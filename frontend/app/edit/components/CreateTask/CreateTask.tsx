// import { List } from "@/components/List";
import style from "./CreateTask.module.css"
import { Task } from "@/components/Task";
import { useState, createContext } from "react";
// import Icon from "@/components/Basic Components/Icon";
import { TaskItemCollapsed } from "./components/TaskItemCollapsed/TaskItemCollapsed";
import { TaskItemExpanded } from "./components/TaskItemExpanded/TaskItemExpanded";
import { List } from "@/components/List";
import Icon from "@/components/Basic Components/Icon";

type Options = {
    batch: boolean;
    selected?: string;
    next_id: string;
    next_task_index: number
}

export const TasksContext = createContext<{ tasks: Task[]; setTasks: (tasks: Task[]) => void }>({ tasks: [], setTasks: () => { } } as { tasks: Task[]; setTasks: (tasks: Task[]) => void })

export function CreateTask({ list }: { list: List }) {
    // console.log("owner_id for all tasks: ", list.id)
    const [options, setOptions] = useState<Options>({ batch: false, selected: "0", next_id: "0", next_task_index: 0 } as Options)
    const defaultTask = { id: options.next_id, owner_id: "0", name: "", task_index: 0, severity: 3, completion: 0, note: "", dueDate: "", dueTime: "", repetition: "never" } as Task
    const [newTasks, setNewTasks] = useState<Task[]>([defaultTask] as Task[])
    if (newTasks.length > 1) {
        setOptions({
            ...options,
            batch: true
        })
    }
    console.log(newTasks)
    return (
        <div className={style.create}>
            <div className={style.create_panel}>
                <h1 className={style.create_panel_title}>{options.batch ? "Create Tasks" : "Create Task"}</h1>
                {/* <div className={`${style.create_create_type} ${style.h}`}>
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
                </div> */}
                <div className={`${style.create_task_list}`}>
                    <TasksContext.Provider value={{
                        tasks: newTasks,
                        setTasks: (tasks: Task[]) => {
                            setNewTasks(tasks)
                        }
                    }}>

                    </TasksContext.Provider>
                    {
                        options.batch ? newTasks.map((task: Task, i: number) => {
                            console.log(task)
                            return (
                                <>
                                    {
                                        task.id == options.selected ? (
                                            <div className={`${style.create_task_list_item}`}>
                                                <button title="expand details button" type="button" className={style.create_task_list_item_icon} onClick={(e) => {
                                                    e.preventDefault();
                                                    setOptions({
                                                        ...options,
                                                        selected: undefined
                                                    } as Options)
                                                }}>
                                                    <Icon className={`${style.create_task_list_item_icon_text_selected}`} iconName={"chevron_right"} />
                                                </button>
                                                <TaskItemExpanded key={i} task={task} setTask={(task: Task) => {
                                                    setNewTasks({
                                                        ...newTasks,
                                                        [i]: task
                                                    })
                                                }} />
                                            </div>
                                        ) : (
                                            <div className={`${style.create_task_list_item}`}>
                                                <button title="expand details button" type="button" className={style.create_task_list_item_icon} onClick={(e) => {
                                                    e.preventDefault();
                                                    setOptions({
                                                        ...options,
                                                        selected: task.id
                                                    } as Options)
                                                }}>
                                                    <Icon className={style.create_task_list_item_icon_text} iconName={"chevron_right"} />
                                                </button>
                                                <TaskItemCollapsed key={task.id} task={task} />
                                            </div>
                                        )
                                    }
                                </>
                            )
                        }
                        ) : (
                            <div className={`${style.create_task_list_item}`}>
                                <TaskItemExpanded task={newTasks[0]} setTask={(task: Task) => {
                                    setNewTasks({
                                        ...newTasks,
                                        [0]: task
                                    })
                                }} />
                            </div>
                        )
                    }
                    {/* <TaskItemCollapsed task={{} as Task} />
                    <TaskItemExpanded task={{} as Task} /> */}
                </div>
                <div className={`${style.create_actions}`}>
                    <button type="button" id="add" className={`${style.create_action_button} ${style.flex_start}`} onClick={(e) => {
                        e.preventDefault();
                        setNewTasks([
                            ...newTasks,
                            defaultTask
                        ] as Task[])
                    }}>
                        <h4>
                            Add Task
                        </h4>
                    </button>
                    <button type="button" id="create" className={`${style.create_action_button} ${style.flex_end}`} onClick={(e) => {
                        e.preventDefault();
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
