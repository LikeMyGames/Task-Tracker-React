import { List } from "@/components/List";
import style from "./CreateTask.module.css"
import { Task } from "@/components/Task";
import { useState } from "react";
import Icon from "@/components/Basic Components/Icon";

interface Options {
    batch: boolean;
}

export function CreateTask({ list, close }: { list: List; close: () => void }) {
    // const [newTasks, setNewTasks] = useState<Task[]>([])
    const [options, setOptions] = useState<Options>({} as Options)
    return (
        <div className={style.create}>
            <div className={style.create_panel}>
                <h1 className={style.create_panel_title}>Create Task or Tasks</h1>
                <div className={`${style.create_subpanel} ${style.h}`}>
                    <button type="button" className={`${style.create_subpanel_button} ${!options.batch ? style.create_subpanel_button_selected : ""}`} onClick={() => {
                        setOptions({
                            ...options,
                            batch: false
                        })
                    }}>
                        <h4>
                            Single
                        </h4>
                    </button>
                    <button type="button" className={`${style.create_subpanel_button} ${options.batch ? style.create_subpanel_button_selected : ""}`} onClick={() => {
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
                <div className={`${style.create_subpanel} ${style.v}`}>
                    <div className={`${style.create_subpanel_item} ${style.h}`} >
                        <Icon className={style.create_subpanel_item_icon} iconName={"chevron_right"} />
                        <input className={style.create_subpanel_subitem}>

                        </input>
                        <input className={style.create_subpanel_subitem}>

                        </input>
                        <input className={style.create_subpanel_subitem}>

                        </input>
                        <input className={style.create_subpanel_subitem}>

                        </input>
                    </div>
                    <div className={`${style.create_subpanel_item} ${style.h}`} >
                        <Icon className={style.create_subpanel_item_icon} iconName={"chevron_right"} />
                        <input className={style.create_subpanel_subitem}>

                        </input>
                    </div>
                </div>
            </div>
        </div >
    )
}
