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
        `INSERT INTO Users ( id, lists, settings ) VALUES ( ?, "[]", "{}" )`,
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

export async function getUser(id: string): Promise<User> {
    if(typeof id !== "string") {
        throw new Error("User id is not valid")
    }
    console.log("Getting User: ", id)
    const response = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
        `SELECT * FROM Users WHERE id = ?;`,
        [id]
    );

    const result = response.result[0].results[0]

    if(result == undefined) {
        return {id: "User does not exist", lists: [], settings: ""} as User
    }

    const listIDs = JSON.parse(result.lists)
    const lists = [] as List[]
    for (const id of listIDs) {
        const list = await getList(id.toString())
        lists.push(list)
    }

    const user = {id: result.id, lists: lists, settings: result.settings} as User;
    console.log(user)
    return user;
}

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

async function getList(id: string): Promise<List> {
    if(typeof id !== "string") {throw new Error("List id is not valid")}

    const response = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
        `SELECT * FROM Lists WHERE id = ?;`,
        [id]
    );

    const result = response.result[0].results[0];

    if(result == undefined) {throw new Error("List does not exist")}

    const taskIDs = JSON.parse(result.tasks)
    const tasks = [] as Task[]
    for (const id of taskIDs) {
        const task = await getTask(id.toString())
        tasks.push(task)
    }

    const list = {id: result.id, name: result.name, tasks: tasks} as List;

    return list;

}

// export async function updateList(newList: List): Promise<boolean> {

// }

export async function getNextListID() {
    const response = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
        `SELECT COUNT(*) AS rows FROM Lists;`
        ,[]
    )
    console.log(response)
}

async function getTask(id: string): Promise<Task> {
    if(typeof id !== "string") {throw new Error("Task id is not valid")};

    const response = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
        `SELECT * FROM Tasks WHERE id = ?;`,
        [id]
    );

    const result = response.result[0].results[0];

    if(result == undefined) {throw new Error("Task does not exist")}

    return result as Task;
}

// export async function saveList(newList: List) {

// }





export async function createList() {
    console.log("will create list in db but not implemented");
}
