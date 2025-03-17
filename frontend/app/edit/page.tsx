'use client'

import style from "./page.module.css"
import Icon from "@/components/Basic Components/Icon"
import { getUser, createList } from "@/app/actions/db"
import { UserInfo } from "@/app/user/page"
import { useEffect, useRef, useState } from "react"
import { User } from "@/components/User"
import ListOption from "./components/ListOption/ListOption"
import ListOptionLoading from "./components/ListOption/ListOptionLoading"
import { List } from "@/components/List"
import { ListDataItem } from "./components/ListDataItem/ListDataItem"
import { Task } from "@/components/Task"
import { EditListAttributes } from "./components/EditAttributes/EditListAttributes"

export default function Home() {
    const userInfoRef = useRef<UserInfo>(null);
    const [ user, setUser ] = useState<User | null>(null)
	// const [ activeListID, setActiveListID ] = useState<string>("")
	const [ activeList, setActiveList ] = useState<List | null>(null)
	const [ activeTask, setActiveTask ] = useState<Task | null>(null)
	const [ taskSearchQuery, setTaskSearchQuery ] = useState<string>("")
    
    function changeActiveList(id: string) {
		// setActiveListID(id)
		setActiveList(user?.lists.find(list => {
			return list.id == id
		}) as List | null)
	}

	function changeActiveTask(id: string) {
		setActiveTask(activeList?.tasks.find(task => {
			return task.id == id
		}) as Task | null)
	}

	// function handleTaskComplete(id: string) {
	// 	console.log("need to build function for task completion")
	// 	console.log("completing task with id: ", id)
	// }

    useEffect(() => {
        userInfoRef.current = JSON.parse(localStorage.getItem("userInfo") ?? "") as UserInfo
        // console.log(userInfoRef.current.sub)
        const getUserWithID = getUser.bind(null, userInfoRef.current.sub as string)
        getUserWithID().then((res) => {
            setUser(res)
        })
    }, [])
    console.log(user)

	// user?.lists.find((value, index, obj) => {
	// 	value.id = activeList
	// 	return 
	// })
    
    return (
        <>
            <div className={style.main}>
                <div className={style.list_menu}>
	        		<h2 className={style.list_menu_title}>
	        			Lists
	        		</h2>
	        		<div className={style.list_menu_lists}>
						{
							user == null ? (
								<ListOptionLoading />
							) : (
								<>
									{user?.lists.map((list) => {
										return <ListOption id={list.id} key={list.id} name={list.name} action={changeActiveList}/>
									})}
								</>
							)
						}
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
	        			{
							activeList == null ? (
								<>
									List Name
								</>
							) : (
								<>
									{activeList.name}
								</>
							)
						}
	        		</h1>
	        		<div className={style.list_replaceable}>
						{
							activeList == null ? (
								<></>
							) : (
								<div className={style.list_data}>
									{
										activeList.tasks.length == 0 ? (
											<h3 className={style.list_data_item_title}>no tasks in this list</h3>
										) : (
											activeList.tasks.map((task, i) => {
												task.index = i
												console.log(task)
												if (task.name.includes(taskSearchQuery) || taskSearchQuery == "") {
													return (
														<ListDataItem 
															key={task.id} 
															task={task} 
															load={changeActiveTask}
														/>
													)
												}
											})
										)
									}
								</div>
							)
						}
	        		</div>
                </div>
                <div className={style.edit_panel}>
                    <h2 className={style.properties}>
	        			Properties
                    </h2>
	        		{/*  */}
					{
						activeList == null ? (
							<div className={style.edit_panel_replaceable} />
						) : (
							<>
								{
									activeTask == null ? (
										<EditListAttributes list={activeList} search={setTaskSearchQuery}/>
									) : (
										<>
											Need to create EditTaskAttributes component
										</>
									)
								}
							</>
						)
					}
                </div>
            </div>
	        <div className={style.drag_region}></div>
        </>
    )
}