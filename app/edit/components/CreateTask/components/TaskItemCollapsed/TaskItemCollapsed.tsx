import style from "./TaskItemCollapsed.module.css"
import { Task } from "@/components/Task"

export function TaskItemCollapsed({ task }: { task: Task; }) {
    console.log(task)
    return (
        <div className={`${style.create_task_list_item_input_container}`} >
            <h3 className={style.create_task_list_item_input}>{task.name ?? "Name"}</h3>
        </div>
    )
}