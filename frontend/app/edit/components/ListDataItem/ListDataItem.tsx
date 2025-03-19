import style from "./ListDataItem.module.css"
import { Task } from "@/components/Task"

export function ListDataItem({ task, load, complete }: { task: Task; load: (id: string) => void; complete?: (id: string) => void; }) {
    return (
        <>
            <button type="button" id={`task-${task.name}`} className={style.list_data_item} onClick={(e) => {
                e.preventDefault();
                // loadTask("task-${name}")
				load(task.id)
            }}>
		    	<h3 className={style.list_data_item_title}>
		    		{task.name}
		    	</h3>
		    	<ul className={style.list_data_item_attributes}>
		    		<li className={style.list_data_item_attribute}>
		    			<p>Task #:</p>
		    			<p className={style.list_data_item_task_num}>{task.index}</p>
		    		</li>
		    		<li className={style.list_data_item_attribute}>
		    			<p>Importance:</p>
		    			<p className={style.list_data_item_severity}>{task.severity}</p>
		    		</li>
		    		<li className={style.list_data_item_attribute}>
		    			<p>Completed?:</p>
		    			<p className={style.list_data_item_completeion}>{task.completion ? (<>Yes</>) : (<>No</>)}</p>
		    		</li>
		    	</ul>
    	    </button>
        </>
    )
}