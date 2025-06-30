'use server'

import { D1 } from 'd1-driver'
import { User } from "@/components/User"
import { List } from '@/components/List';
import { Task } from '@/components/Task';

const d1 = new D1(process.env['CLOUDFLARE_ACCOUNT_ID'] ?? "", process.env['CLOUDFLARE_API_TOKEN'] ?? "")

export async function createUser(id: string): Promise<User> {
    if(typeof id !== "string") {
        throw new Error("User id is not valid");
    }
    const response = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
        `INSERT INTO Users ( id, lists, settings ) VALUES ( ?, "{}" )`,
        [id]
    )
    response.result.forEach(result => {
        console.log(result.results[0])
    })

    const result = response.result[0].results[0]

    if(result == undefined) {
        return {id: "Could not create user", lists: [], settings: ""} as User;
    }

    return {id: result.id, lists: result.lists, settings: result.settings} as User;
}

// export async function getUser(id: string): Promise<User> {
//     if(typeof id !== "string") {
//         throw new Error("User id is not valid")
//     }
//     console.log("Getting User: ", id)
//     const response = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
//         `SELECT * FROM Users WHERE id = ?;`,
//         [id]
//     );

//     const result = response.result[0].results[0]

//     if(result == undefined) {
//         return {id: "User does not exist", lists: [], settings: ""} as User
//     }

//     const listIDs = JSON.parse(result.lists)
//     const lists = [] as List[]
//     for (const id of listIDs) {
//         const list = await getList(id.toString())
//         lists.push(list)
//     }

//     const user = {id: result.id, lists: lists, settings: result.settings} as User;
//     console.log(user)
//     return user;
// }

export async function getUser(id: string): Promise<User> {
    const response = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
        `SELECT * FROM Users WHERE id = ?;`,
        [id]
    );
    const result = response.result[0].results[0] as User
    result.lists = await getUserLists(id)
    result.settings = JSON.parse(result.settings as string)
    // console.log(result)
    return result
}

export async function getUserLists(userID: string): Promise<List[]> {
    const response = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
        `SELECT * FROM Lists WHERE owner_id = ?;`,
        [userID]
    );
    const result = response.result[0].results as List[]
    for ( let i = 0; i<result.length; i++ ) {
        result[i].tasks = [] as Task[]
        for ( const task of await getListTasks(result[i].id) ) {
            result[i].tasks.push(task)
        }
    }
    return result
}

export async function getListTasks(listID: string): Promise<Task[]> {
    const response = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
        `SELECT * FROM Tasks WHERE owner_id = ?;`,
        [listID]
    );
    console.log(response.result[0].results as Task[])
    return response.result[0].results as Task[]
}

export async function saveTask(task: Task): Promise<Task> {
    await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
        `UPDATE Tasks SET name = ?, task_index = ?, severity = ?, completion = ?, note = ?, dueDate = ?, dueTime = ?, repetition = ? WHERE id = ?;`,
        [task.name, task.task_index, task.severity, task.completion, task.note, task.dueDate, task.dueTime, task.repetition, task.id]
    );
	const response = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
        `SELECT * FROM Tasks WHERE id = ?`,
        [task.id]
    );
    console.log(response.result[0].results)
    return response.result[0].results[0] as Task
}

export async function createTask(task: Task): Promise<Task> {
	await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
        `INSERT INTO Tasks (id, name, task_index, severity, completion, note, dueDate, dueTime, repetition, owner_id) VALUES (?, ?, ?, ?, ?, ?, ?, ? ,? , ?)`,
        [task.id, task.name, task.task_index, task.severity, task.completion, task.note, task.dueDate, task.dueTime, task.repetition, task.owner_id]
    );
	const response = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
        `SELECT * FROM Tasks WHERE id = ?`,
        [task.id]
    );
	console.log(response.result[0].results[0] as Task)
	return response.result[0].results[0] as Task
}

export async function getNextTaskID() {
	const response = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
        `SELECT COUNT(id) FROM Tasks`
    );
	console.log("Next Task ID: ", response.result[0].results[0]["COUNT(id)"])
	return response.result[0].results[0]["COUNT(id)"] as string;
}

// export async function updateList(list: List): Promise<boolean> {
//     const oldList = await getList(list.id)
//     // const response = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
//     //     `SELECT * FROM Tasks WHERE owner_id = ?;`,
//     //     [listID]
//     // );
// }

// export async function updateUser(newUser: User): Promise<boolean> {
//     if(typeof newUser.id !== "string") {throw new Error("User id is not valid")}

//     const tasks = ;
//     let lists = [] as { id: string; name: string; tasks: string[] }[];

//     for (const list of newUser.lists) {
//         let taskIDs = [] as string[]
//         for (const task of list.tasks) {
//             taskIDs.push(task.id)
//         }

//         lists.push({ id: list.id, name: list.name, tasks: taskIDs })
//     }

//     let listIds = [] as string[]
//     lists.forEach(list => {
//         listIds.push(list.id)
//     })
//     const user = { id: newUser.id, lists: listIds, settings: JSON.stringify(newUser.settings) } as { id: string; lists: string[]; settings: string };
    
    

//     const response = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
//         `UPDATE Users SET lists="?" WHERE id=?;`,
//         [JSON.stringify(lists), newUser.id]
//     );

//     for (const listID of lists) {
//         const listResponse = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
//             `UPDATE Lists SET tasks="?" WHERE id=?;`,
//             [JSON.stringify(tasks), listID]
//         );
//     }


//     return response.result[0].success
// }

// async function getList(id: string): Promise<List> {
//     if(typeof id !== "string") {throw new Error("List id is not valid")}
//     const response = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
//         `SELECT * FROM Lists WHERE id = ?;`,
//         [id]
//     );
//     const result = response.result[0].results[0];
//     if(result == undefined) {throw new Error("List does not exist")}
//     const taskIDs = JSON.parse(result.tasks)
//     const tasks = [] as Task[]
//     for (const id of taskIDs) {
//         const task = await getTask(id.toString())
//         tasks.push(task)
//     }
//     const list = {id: result.id, name: result.name, tasks: tasks} as List;
//     return list;
// }

// export async function getNextListID() {
//     const response = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
//         `SELECT COUNT(*) AS rows FROM Lists;`
//         ,[]
//     )
//     console.log(response)
// }

// async function getTask(id: string): Promise<Task> {
//     if(typeof id !== "string") {throw new Error("Task id is not valid")};
//     const response = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
//         `SELECT * FROM Tasks WHERE id = ?;`,
//         [id]
//     );
//     const result = response.result[0].results[0];
//     if(result == undefined) {throw new Error("Task does not exist")}
//     return result as Task;
// }

export async function createList() {
    console.log("will create list in db but not implemented");
}
