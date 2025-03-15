'use server'

import { D1 } from 'd1-driver'
import { User } from "@/components/User"

const d1 = new D1(process.env['CLOUDFLARE_ACCOUNT_ID'] ?? "", process.env['CLOUDFLARE_API_TOKEN'] ?? "")

export async function createUser(id: string): Promise<User> {
    const response = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
        `INSERT INTO Users ( id, lists, settings ) VALUES ( ?, "[]", "{}" )`,
        [id]
    )
    response.result.forEach(result => {
        console.log(result.results[0])
    })
    const user: User = {id: response.result[0].results[0].id, lists: response.result[0].results[0].lists, settings: response.result[0].results[0].settings};
    return user;
}

export async function getUser(id: string): Promise<User> {
    if(typeof id !== "string") {
        throw new Error("Did not recieve valid ID")
    }
    console.log("Getting User: ", id)
    const response = await d1.query(process.env['CLOUDFLARE_DB_UUID'] ?? "",
        `SELECT * FROM users WHERE id = ?;`,
        [id]
    );
    response.result.forEach(result => {
        console.log(result.results[0])
    })

    if(response.result[0].results[0] == undefined) {
        return {id: "User does not exist", lists: [], settings: ""} as User
    }

    return {id: response.result[0].results[0].id, lists: response.result[0].results[0].lists, settings: response.result[0].results[0].settings} as User;
}



// 'use server'

// import Cloudflare from 'cloudflare';

// // const client = new Cloudflare({
// //   apiEmail: process.env['CLOUDFLARE_EMAIL'], // This is the default and can be omitted
// //   apiKey: process.env['CLOUDFLARE_API_KEY'], // This is the default and can be omitted
// // });

// // // Automatically fetches more pages as needed.
// // for await (const databaseRawResponse of client.d1.database.raw('b5a82870-1fdc-403b-82fd-17632584f895', {
// //   account_id: '989221f9cef637d90c329cdcd8d59c9b',
// //   sql: 'CREATE TABLE IF NOT EXISTS "Users" ( "ID"',
// // })) {
// //   console.log(databaseRawResponse.meta);
// // }

export async function createList() {
    console.log("will create list in db but not implemented");
}

// const client = new Cloudflare({
//     apiEmail: process.env['CLOUDFLARE_EMAIL'], // This is the default and can be omitted
//     apiKey: process.env['CLOUDFLARE_API_KEY'], // This is the default and can be omitted
// });

// export async function getUser(): Promise<string> {
//     // console.log("id: ", id)
//     console.log("getting user data")
//     const databaseRawResponse = await client.d1.database.raw(process.env['CLOUDFLARE_DB_UUID'] ?? "", {
//         account_id: process.env['CLOUDFLARE_ACCOUNT_ID'] ?? "",
//         sql: `SELECT * FROM users WHERE id = ?;`,
//         params: ["google-oauth2|104328036235570396351"]
//     });

//     console.log(databaseRawResponse.result)
//     return JSON.stringify(databaseRawResponse.result)
// }

// export async function addUser(id: string, username: string, password: string) {
//     const databaseRawResponse = await client.d1.database.raw(process.env['CLOUDFLARE_DB_UUID'] ?? "", {
//         account_id: process.env['CLOUDFLARE_ACCOUNT_ID'] ?? "",
//         sql: `INSERT INTO users ( id, name, email ) VALUE ( '${id}', '${username}', '${password}' );`
//     });

//     console.log(databaseRawResponse.result)
// }