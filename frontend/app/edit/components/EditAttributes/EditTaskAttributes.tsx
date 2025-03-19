import { Task } from "@/components/Task"
import style from "./EditAttributes.module.css"
import Icon from "@/components/Basic Components/Icon";

export function EditTaskAttributes({ task }: { task: Task }) {
    return (
        <>
            <div className={style.edit_panel_replaceable}>
		    	<div className={style.edit_panel_attributes}>
		    		<h3 className={style.edit_panel_title}>Task Settings:</h3>
		    		<div className={style.edit_panel_item}>
		    			<h3 className={style.edit_panel_item_title}>Task Name:</h3>
		    			<input name="task_name_input" type="text" className={style.edit_panel_item_value} placeholder="Task Name" value="${currentTask.name}" onChange="taskNameChanged()" autocomplete="off" spellcheck="false" />
		    		</div>
		    		<div className={style.edit_panel_item}>
		    			<h3 className={style.edit_panel_item_title}>Task Importance:</h3>
		    			<select title="task_importance_selector" className={style.edit_panel_item_value} defaultValue={task.severity} onChange={(e) => {
                            e.preventDefault();
                            task.severity = e.target.value;
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
		    			<button name={style.task_completionStatus_checkbox} type="button" className="edit_panel_item_value" onClick={(e) => {
                            e.preventDefault();
                            // taskCompletionChanged()
                        }}>
		    				<Icon>{task.completion ? "check" : "close"}</Icon>
		    			</button>
		    		</div>
		    		<div className={style.edit_panel_item}>
		    			<h3 className={style.edit_panel_item_title}>Notes:</h3>
		    			<textarea autoComplete="off" className={style.edit_panel_item_value} title="notes_edit_input" placeholder="Notes" defaultValue={""} onChange={(e) => {
                            e.preventDefault();
                            // taskNotesChanged()
                        }}>
                            {task.note}
                        </textarea>
		    		</div>
		    	</div>
		    	<div className={style.edit_panel_close}>
		    		<button type="button" className={`${style.edit_panel_close_button} special`} onClick="savecloseTaskEdit(event)">
		    			<span className="material-symbols-rounded">
		    				save
		    			</span>
		    			<h3>
		    				Save
		    			</h3>
		    		</button>
		    		<button type="button" className={`${style.edit_panel_close_button} special`} onClick="closeTaskEdit()">
		    			<span className="material-symbols-rounded">
		    				cancel
		    			</span>
		    			<h3>
		    				Cancel
		    			</h3>
		    		</button>
		    	</div>
		    	<div className="edit_panel_close">
		    		<button type="button" className={`${style.edit_panel_close_button} ${style.edit_panel_close_button_single} error`} onClick="deleteTask()">
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