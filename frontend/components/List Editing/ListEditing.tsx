// 'use client'
// import style from "@/app/page.module.css";
// import EditPanel from "@/components/List Editing/EditPanel";
// import ListsMenu from "@/components/List Editing/ListMenu";
// import ListView from "@/components/List Editing/ListView";
// import { List } from "@/components/List";
// import { useState } from "react";
// import { Task } from "@/components/Task";
// import { User } from "@/components/User";





// export default function Home() {

// 	const [user, setUser] = useState({
// 		username: "babyyoda",
// 		password: "pizzaburger",
// 		lists: [
// 			{
// 				id: "this is my new id",
// 				name: "data",
// 				tasks: [],
// 			}
// 		],
// 		settings: {
// 			ListDirectory: "./",
// 			APIPath: "localhost:8080/",
// 			DeleteCompletedTasks: false,
// 		},
// 	} as User)

// 	// const [list, setList] = useState({
// 	// 	id: "this is my new id",
// 	// 	name: "data",
// 	// 	tasks: [] as Task[],
// 	// } as List)

// 	const OpenList = (): void => {
// 		fetch(user.settings.APIPath + "?/")
// 	}

// 	return (
// 		<div className={style["main"]}>
// 			<ListsMenu lists={user.lists} menuItemOnClick={OpenList} />
// 			<ListView list={list} />
// 			<EditPanel></EditPanel>


// 			<div className={style["edit_panel"]}>
// 				<h2 className={style["properties"]}>
// 					Properties
// 				</h2>
// 				<div className={style["edit_panel_replaceable"]}>

// 				</div>
// 			</div>
// 		</div>
// 	);
// }
