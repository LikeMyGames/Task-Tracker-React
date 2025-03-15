/* eslint-disable @next/next/no-img-element */
'use client'

import style from "@/app/user/page.module.css"
import Person from "@/public/person.svg"
import Image from "next/image"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

export interface UserInfo {
    email: string
    email_verified: boolean
    family_name: string
    given_name: string
    name: string
    nickname: string
    picture: string
    sub: string
    updated_at: string
}

export default function UserPage() {
    const [user, setUser] = useState<UserInfo | null>(null)
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("userInfo") ?? ""))
    }, [])
    console.log(user)

    return (
        <div className={style.main}>
            <div className={style.center}>
                <div className={style.account_title}>
                    <div className={style.account_title_image_container}>
                        <Image
                            src={user?.picture ?? Person}
                            alt={``}
                            className={style.account_title_image}
                            width={150}
                            height={150}
                        />
                    </div>
                    <h2 className={style.account_title_name} >{user?.name}</h2>
                </div>
                <div className={style.account_info_seperator} />
                <button type={"button"} onClick={(e) => {e.preventDefault(); redirect('/edit')}}>Edit Lists</button>
            </div>
        </div>
    )
}