// import { useState } from "react";
import style from "./TaskItemExpanded.module.css"
import { Task } from "@/components/Task"
import { ExpandingTextarea } from "@/components/Basic Components/ExpandingTextarea/ExpandingTextarea";
import { useContext } from "react";
import { TasksContext } from "../../CreateTask";

export function TaskItemExpanded({ task, setTask }: { task: Task; setTask: (task: Task) => void; }) {
    const { tasks, setTasks } = useContext(TasksContext)
    // const [newTask, setNewTask] = useState({} as Task)
    return (
        <div className={style.create_task_list_item_input_container}>
            <h4 className={`${style.create_task_list_item_input_title} ${style.grid_column_1} ${style.grid_row_1}`}>Name:</h4>
            <h4 className={`${style.create_task_list_item_input_title} ${style.grid_column_1} ${style.grid_row_2}`}>Severity:</h4>
            <h4 className={`${style.create_task_list_item_input_title} ${style.grid_column_1} ${style.grid_row_3}`}>Due Date:</h4>
            <h4 className={`${style.create_task_list_item_input_title} ${style.grid_column_1} ${style.grid_row_4}`}>Due Time:</h4>
            <h4 className={`${style.create_task_list_item_input_title} ${style.grid_column_1} ${style.grid_row_5}`}>Repetition:</h4>
            <h4 className={`${style.create_task_list_item_input_title} ${style.grid_column_1} ${style.grid_row_6}`}>Notes:</h4>
            <input className={`${style.create_task_list_item_input} ${style.grid_column_2} ${style.grid_row_1}`} type="text" placeholder="Name" defaultValue={task.name} onChange={(e) => {
                setTask({
                    ...task,
                    name: e.target.value
                })
            }} />
            <select title={"task severity selector"} className={`${style.create_task_list_item_input} ${style.grid_column_2} ${style.grid_row_2}`} defaultValue={task.severity} onChange={(e) => {
                setTask({
                    ...task,
                    severity: +e.target.value
                })
            }}>
                <option value="1">Very Low</option>
                <option value="2">Low</option>
                <option value="3">Medium</option>
                <option value="4">High</option>
                <option value="5">Very High</option>
            </select>
            <input className={`${style.create_task_list_item_input} ${style.grid_column_2} ${style.grid_row_3}`} type="date" placeholder="Due Date" defaultValue={task.dueDate} onChange={(e) => {
                setTask({
                    ...task,
                    dueDate: e.target.value
                })
            }} />
            <input className={`${style.create_task_list_item_input} ${style.grid_column_2} ${style.grid_row_4}`} type="time" placeholder="Due Time" defaultValue={`${task.dueTime.substring(0, 2)}:${task.dueTime.substring(2, 5)}`} onChange={(e) => {
                setTask({
                    ...task,
                    dueTime: e.target.value.replace(":", "")
                })
            }} />
            <div className={`${style.grid_column_2} ${style.grid_row_5}`}>
                <select title={"task repetition select"} className={`${style.create_task_list_item_input}`} defaultValue={task.repetition} onChange={(e) => {
                    setTask({
                        ...task,
                        repetition: e.target.value
                    })
                }}>
                    <option value="never">Never</option>
                    <option value="day">Daily</option>
                    <option value="week">Weekly</option>
                    <option value="month">Monthly</option>
                    <option value="year">Yearly</option>
                    {/* <option value="custom">Custom</option> */}
                </select>
            </div>
            <ExpandingTextarea placeholder="Notes" className={style.create_task_list_item_input} onChange={(e) => {
                setTask({
                    ...task,
                    note: e.target.value
                })
            }} />
            {/* <div className={`${style.create_task_list_item_input} ${style.grid_column_2} ${style.grid_row_6}`} id="notes_textarea_container">
                <div className={style.create_task_list_item_input} id="notes_textarea_text">{newTask.note ?? "Notes"}</div>
                <textarea className={style.create_task_list_item_input} placeholder={task.note ?? "Notes"} id="textarea_input" onChange={(e) => {
                    console.log("text area changed to: ", e.target.value)
                    setNewTask({
                        ...newTask,
                        note: e.target.value
                    })
                }} />
            </div> */}

            {/* <div className={`${style.create_task_list_item_input} ${style.grid_column_2} ${style.grid_row_6}`} contentEditable={"plaintext-only"}>{task.name ?? "Notes"}</div> */}
        </div>
    )
}