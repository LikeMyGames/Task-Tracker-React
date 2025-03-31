'use client'

import { Task } from "@/components/Task"
import style from "./EditAttributes.module.css"
import Icon from "@/components/Basic Components/Icon";
import { useState } from "react"

export function EditTaskAttributes({ task, save, close, remove }: { task: Task; save: (newTask: Task) => void; close: () => void; remove: (id: string) => void; }) {
	const [newTask, setNewTask] = useState<Task | null>(task)
    return (
        <>
            <div className={style.edit_panel_replaceable}>
		    	<div className={style.edit_panel_attributes}>
		    		<h3 className={style.edit_panel_title}>Task Settings:</h3>
		    		<div className={style.edit_panel_item}>
		    			<h3 className={style.edit_panel_item_title}>Task Name:</h3>
		    			<input
                            name="task_name_input"
                            type="text"
                            className={`${style.edit_panel_item_value} ${newTask?.name != task.name ? style.edit_panel_item_value_changed : ""}`}
                            placeholder="Task Name"
                            defaultValue={newTask?.name}
                            onChange={(e) => {
                                e.preventDefault();
								setNewTask({
									...newTask,
									name: e.target.value
								} as Task)
                            }}
                            autoComplete="off"
                            spellCheck="false"
						/>
		    		</div>
		    		<div className={style.edit_panel_item}>
		    			<h3 className={style.edit_panel_item_title}>Task Importance:</h3>
		    			<select title="task_importance_selector" className={`${style.edit_panel_item_value} ${newTask?.severity != task.severity ? style.edit_panel_item_value_changed : ""}`} defaultValue={newTask?.severity} onChange={(e) => {
                            e.preventDefault();
							setNewTask({
								...newTask,
								severity: +e.target.value
							} as Task)
                        }}>
		    				<option value="1">Very low</option>
		    				<option value="2">Low</option>
		    				<option value="3">Medium</option>
		    				<option value="4">High</option>
		    				<option value="5">Very high</option>
		    			</select>
		    		</div>
		    		<div className={style.edit_panel_item}>
		    			<h3 className={style.edit_panel_item_title}>Task Completed?:</h3>
		    			<button title={"task_completionStatus_checkbox"} type="button" className={`${style.edit_panel_item_value} ${newTask?.completion != task.completion ? style.edit_panel_item_value_changed : ""}`} onClick={(e) => {
                            e.preventDefault();
                            // taskCompletionChanged()
							setNewTask({
								...newTask,
								completion: newTask?.completion == 1 ? 0 : 1
							} as Task)
                        }}>
                            {/* {
                                newTask?.completion == 1 ? (
                                    <Icon iconName={"check"} />
                                ) : (
                                    <Icon iconName={"close"} />
                                )
                            } */}
							{
								newTask?.completion == 1 ? (
									<Icon iconName={"check"} />
								) : (
									<Icon iconName={"close"} />
								)
							}
		    			</button>
		    		</div>
		    		<div className={style.edit_panel_item}>
		    			<h3 className={style.edit_panel_item_title}>Notes:</h3>
		    			<textarea autoComplete="off" className={style.edit_panel_item_value} title="notes_edit_input" placeholder="Notes" defaultValue={""} onChange={(e) => {
                            e.preventDefault();
                            // taskNotesChanged()
                        }}>
                            {newTask?.note}
                        </textarea>
		    		</div>
		    	</div>
		    	<div className={style.edit_panel_close}>
		    		<button type="button" className={`${style.edit_panel_close_button} special`} onClick={(e) => {
                        e.preventDefault();
                        // savecloseTaskEdit(event)
                        save(newTask ?? {} as Task)
                    }}>
		    			<span className="material-symbols-rounded">
		    				save
		    			</span>
		    			<h3>
		    				Save
		    			</h3>
		    		</button>
		    		<button type="button" className={`${style.edit_panel_close_button} special`} onClick={(e) => {
                        e.preventDefault();
                        // closeTaskEdit()
						setNewTask(null)
                        close()
                    }}>
		    			<span className="material-symbols-rounded">
		    				cancel
		    			</span>
		    			<h3>
		    				Cancel
		    			</h3>
		    		</button>
		    	</div>
		    	<div className={style.edit_panel_close}>
		    		<button type="button" className={`${style.edit_panel_close_button} ${style.edit_panel_close_button_single} error`} onClick={(e) => {
                        e.preventDefault();
                        // deleteTask()
                        remove(newTask?.id ?? "");
                    }}>
		    			<span className="material-symbols-rounded">
		    				delete
		    			</span>
		    			<h3>
		    				Delete Task
		    			</h3>
		    		</button>
		    	</div>
		    </div>
        </>
    )
}