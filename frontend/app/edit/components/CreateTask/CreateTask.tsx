// import { List } from "@/components/List";
import style from "./CreateTask.module.css"
import { Task } from "@/components/Task";
import { useState } from "react";
import Icon from "@/components/Basic Components/Icon";

interface Options {
    batch: boolean;
}

export function CreateTask() {
    const [newTasks, setNewTasks] = useState<Task[]>([])
    const [options, setOptions] = useState<Options>({} as Options)
    return (
        <div className={style.create}>
            <div className={style.create_panel}>
                <h1 className={style.create_panel_title}>{options.batch ? "Create Tasks" : "Create Task"}</h1>
                <div className={`${style.create_create_type} ${style.h}`}>
                    <button type="button" className={`${style.create_create_type_button} ${!options.batch ? style.create_create_type_button_selected : ""}`} onClick={() => {
                        setOptions({
                            ...options,
                            batch: false
                        })
                    }}>
                        <h4>
                            Single
                        </h4>
                    </button>
                    <button type="button" className={`${style.create_create_type_button} ${options.batch ? style.create_create_type_button_selected : ""}`} onClick={() => {
                        setOptions({
                            ...options,
                            batch: true
                        })
                    }}>
                        <h4>
                            Batch
                        </h4>
                    </button>
                </div>
                <div className={`${style.create_task_list}`}>
                    <div className={`${style.create_task_list_item}`} >
                        <Icon className={style.create_task_list_item_icon} iconName={"chevron_right"} />
                        {/* <div className={style.create_task_list_item_input_container}> */}
                        <h3 className={style.create_task_list_item_input}>Name</h3>
                        {/* <select title={"task severity selector"} className={style.create_task_list_item_input} defaultValue={3}>
                            <option value={1}>Very Low</option>
                            <option value={2}>Low</option>
                            <option value={3}>Medium</option>
                            <option value={4}>High</option>
                            <option value={5}>Very High</option>
                        </select>
                        <input className={style.create_task_list_item_input} placeholder="Due Date" type="date">

                        </input>
                        <input className={style.create_task_list_item_input} placeholder="Due Time" type="time">

                        </input>
                        <input className={style.create_task_list_item_input} placeholder="Notes" type="text"> */}

                        {/* </input> */}
                        {/* </div> */}
                    </div>
                </div>
                <div className={`${style.create_actions}`}>
                    <button type="button" id="add" className={`${style.create_action_button} ${style.flex_start}`} onClick={() => {
                        setOptions({
                            ...options,
                            batch: false
                        })
                    }}>
                        <h4>
                            Add Task
                        </h4>
                    </button>
                    <button type="button" id="create" className={`${style.create_action_button} ${style.flex_end}`} onClick={() => {
                        setOptions({
                            ...options,
                            batch: true
                        })
                    }}>
                        <h4>
                            {options.batch ? "Create Tasks" : "Create Task"}
                        </h4>
                    </button>
                </div>
            </div>
        </div >
    )
}
