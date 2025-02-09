import style from "@/app/page.module.css"
import { Task, task} from "@/components/Basic Component Groups/Task"

export interface List {
    id: string;
    name: string;
    tasks: task[];
}


const ListView: React.FC<{ children?: React.ReactNode; list: List; textClass?: string}> = ({ list, textClass }) => {
    return (
        <div id={list.id} className={style["main_view"]}>
            <h1 className={`${style.list_name} ${textClass !== undefined ? textClass : ""}`}>
				{list.name}
			</h1>
            {
                list.tasks.map((task: task) => (
                    <Task key={task.id} taskNum={task.index} importance={task.importance} completion={task.completion} id={task.id}>{task.name}</Task>
                ))
            }
        </div>
    )
}

export default ListView