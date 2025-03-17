import style from "@/app/page.module.css";
import { Task } from "@/components/Basic Component Groups/Task";
import List from "@/components/List"


export const ListView: React.FC<{ list: List; textClass?: string }> = ({ list, textClass }) => {
    return (
        <div id={list.id} className={style["main_view"]}>
            <h1 className={`${style.list_name} ${textClass !== undefined ? textClass : ""}`}>
				{list.name || "List Data"}
			</h1>
            <div className={style.edit_panel_replaceable}>
                {
                    list.tasks.map((task: task) => (
                        <Task key={task.id} taskNum={task.index} importance={task.importance} completion={task.completion} id={task.id}>{task.name}</Task>
                    ))
                }
            </div>
        </div>
    )
}

export default ListView