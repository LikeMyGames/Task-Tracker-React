'use client'

import style from "@/app/user/page.module.css"
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
                    
                </div>
                {user?.name}
            </div>
        </div>
    )
}