'use client'

import style from "./page.module.css"
import Icon from "@/components/Basic Components/Icon"
import { getUser, createList, saveTask, getNextTaskID } from "@/app/actions/db"
// import { getUser } from "@/app/actions/db"
import { UserInfo } from "@/app/user/page"
import { useEffect, useRef, useState } from "react"
import { User } from "@/components/User"
import ListOption from "./components/ListOption/ListOption"
import ListOptionLoading from "./components/ListOption/ListOptionLoading"
import { List, ListSearch } from "@/components/List"
// import { List } from "@/components/List"
import { ListDataItem } from "./components/ListDataItem/ListDataItem"
import { Task } from "@/components/Task"
import { EditListAttributes } from "./components/EditAttributes/EditListAttributes"
import { EditTaskAttributes } from "./components/EditAttributes/EditTaskAttributes"
// import { CreateTask } from "./components/CreateTask/CreateTask"

export default function Home() {
	const userInfoRef = useRef<UserInfo>(null);
	const [user, setUser] = useState<User | null>(null)
	const [activeListID, setActiveListID] = useState<string | null>(null)
	const [activeList, setActiveList] = useState<List | null>(null)
	const [activeTaskID, setActiveTaskID] = useState<string | null>(null)
	const [activeTask, setActiveTask] = useState<Task | null>(null)
	const [taskSearch, setTaskSearch] = useState<ListSearch | null>(null)

	function changeActiveList(list: List | null) {
		setActiveTask(null)
		setActiveTaskID(null)
		setActiveList(list)
	}

	function changeActiveTask(task: Task | null) {
		console.log("new task: ", task)
		setActiveTask(task)
	}

	function changeActiveListByID(id: string) {
		setActiveTask(null)
		setActiveListID(id)
		setActiveList(user?.lists.find(list => {
			return list.id == id
		}) as List | null)
	}

	function changeActiveTaskByID(id: string) {
		setActiveTaskID(id)
		setActiveTask(activeList?.tasks.find(task => {
			return task.id == id
		}) as Task | null)
	}

	function changeTaskSearch(search: ListSearch) {
		setTaskSearch(search)
	}

	function getUserData() {
		getUser(userInfoRef.current?.sub as string ?? "").then((res) => {
			setUser(res)
			console.log(res)
		})
	}

	// function handleTaskComplete(id: string) {
	// 	console.log("need to build function for task completion")
	// 	console.log("completing task with id: ", id)
	// }

	useEffect(() => {
		userInfoRef.current = JSON.parse(localStorage.getItem("userInfo") ?? "") as UserInfo
		if (user == null) {
			getUserData()
		}
	}, [user, setUser])

	user?.lists.find((value, index, obj) => {
		value.id = activeList
		return
	})

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
										return <ListOption id={list.id} key={list.id} name={list.name} action={changeActiveListByID} />
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
												task.task_index = i + 1;
												if ((task.name.includes(taskSearch?.name ?? "") || taskSearch?.name == "") && (task.task_index >= (taskSearch?.index[0] ?? 0) && task.task_index <= (taskSearch?.index[1] ?? 0)) && (+task.severity >= (taskSearch?.severity[0] ?? 0) && +task.severity <= (taskSearch?.severity[1] ?? 0)) && (+task.completion == taskSearch?.completion || taskSearch?.completion == 2)) {
													return (
														<ListDataItem
															key={task.id}
															task={task}
															load={(task) => {
																if (task.id != activeTaskID) {
																	setActiveTask(task)
																	setActiveTaskID(task.id)
																}
															}}
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
					{
						activeList == null ? (
							<div className={style.edit_panel_replaceable} />
						) : (
							<>
								{
									activeTask == null ? (
										<EditListAttributes
											list={activeList}
											filter={{
												filterValue: taskSearch,
												setFilter: setTaskSearch
											}}
											create={() => {
												getNextTaskID()
											}}
											close={() => {
												changeActiveList(null)
												// updateList(activeList)
											}}
										/>
									) : (
										<EditTaskAttributes
											key={activeTask?.id}
											task={activeTask}
											save={(task: Task) => {
												setActiveTask(null)
												saveTask(task).then((savedTask) => {
													const index = activeList.tasks.findIndex((value: Task) => {
														return value.id == savedTask.id
													})
													const tasks = activeList.tasks
													tasks[index] = savedTask
													setActiveList({
														...activeList,
														tasks: tasks
													} as List)
												})
												// activeList.tasks.find((v, i) => {
												// 	if( v.id == task.id ) {
												// 		setActiveList({
												// 			...activeList,
												// 			tasks: [ ...activeList.tasks, task] as Task[]
												// 		} as List)
												// 		activeList.tasks[i] = task
												// 	}
												// })
												// getListTasks(activeList.id).then((tasks) => {
												// 	console.log(tasks)
												// 	setActiveList({
												// 		...activeList,
												// 		tasks: tasks 
												// 	} as List)
												// 	setActiveTask(null)
												// 	console.log("saving task:", task)
												// })
											}}
											close={() => {
												setActiveTask(null)
											}}
											remove={(id: string) => {
												setActiveList({
													id: activeList.id,
													owner_id: activeList.owner_id,
													name: activeList.name,
													tasks: activeList.tasks.filter(task => task.id !== id)
												} as List)
												console.log("deleting task with id: ", id)
											}}
										/>
									)
								}
							</>
						)
					}
				</div>
			</div>
			<div className={style.drag_region}></div>
			{/* <CreateTask
			// list={activeList ?? {} as List}
			// close={(): void => {
			// 	throw new Error("Function not implemented.")
			// }}
			/> */}
		</>
	)
}