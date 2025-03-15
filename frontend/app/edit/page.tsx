'use client'

import style from "@/app/edit/page.module.css"
import Icon from "@/components/Basic Components/Icon"
import { getUser, createList } from "@/app/actions/db"
import { UserInfo } from "@/app/user/page"
import { useEffect, useRef, useState } from "react"
import { User } from "@/components/User"

export default function Home() {
    const userInfoRef = useRef<UserInfo>(null);
    const [ user, setUser ] = useState<User>({id: "", lists: [], settings: ""})
    
    
    useEffect(() => {
        userInfoRef.current = JSON.parse(localStorage.getItem("userInfo") ?? "") as UserInfo
        // console.log(userInfoRef.current.sub)
        const getUserWithID = getUser.bind(null, userInfoRef.current.sub as string)
        getUserWithID().then((res) => {
            setUser(res)
            console.log(res)
        })
    }, [])
    
    return (
        <>
            <div className={style.main}>
                <div className={style.list_menu}>
	        		<h2 className={style.list_menu_title}>
	        			Lists
	        		</h2>
	        		<div className={style.list_menu_lists}>
	        		</div>
	        		<div className={style.list_menu_panel}>
	        			<button type="button" className={`${style.list_menu_panel_button} special`} onClick={(e) => {
                            e.preventDefault();
                            createList()
                        }}>
                            <Icon>add_circle</Icon>
	        				<h3>
	        					List
	        				</h3>
	        			</button>
	        		</div>
                </div>
                <div className={style.main_view}>
                    <h1 className={style.list_name}>
	        			List Name
	        		</h1>
	        		<div className={style.list_replaceable}>
	        		</div>
                </div>
                <div className={style.edit_panel}>
                    <h2 className={style.properties}>
	        			Properties
                    </h2>
	        		<div className={style.edit_panel_replaceable}>

	        		</div>
                </div>
            </div>
	        <div className={style.drag_region}></div>
        </>
    )
}