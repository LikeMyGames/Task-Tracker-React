import style from "./ListDataItem.module.css"
import { Task } from "@/components/Task"

export function ListDataItem({ task, load }: { task: Task; load: (task: Task) => void; }) {
    return (
        <>
            <button type="button" id={`task-${task.name}`} className={style.list_data_item} onClick={(e) => {
                e.preventDefault();
				console.log("loading task with id: ", task.id)
				load(task)
            }}>
		    	<h3 className={style.list_data_item_title}>
		    		{task.name}
		    	</h3>
		    	<ul className={style.list_data_item_attributes}>
		    		<li className={style.list_data_item_attribute}>
		    			<p>Task #:</p>
		    			<p className={style.list_data_item_task_num}>{task.task_index}</p>
		    		</li>
		    		<li className={style.list_data_item_attribute}>
		    			<p>Importance:</p>
		    			<p className={style.list_data_item_severity}>{
							task.severity == 1 ? "Very Low" : task.severity == 2 ? "Low" : task.severity == 3 ? "Medium" : task.severity == 4 ? "High" : "Very High"
						}</p>
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