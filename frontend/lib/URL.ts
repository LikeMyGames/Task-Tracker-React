'use client'

export async function ParseQuery(queryStr: string) {
    if (queryStr.includes("?")) {
        queryStr.replace("?", "")
    }
    const data = queryStr.split("&")
    console.log(data)

    const params: { [key: string]: unknown } = {}
    
    let pair: string[];
    for(let i = 0; i<data.length; i++) {
        pair = data[i].split("=")
        params[pair[0]] = pair[1]
    }
}