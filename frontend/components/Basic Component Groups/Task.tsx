export interface task {
	name: string;
	importance: string;
	completion: boolean;
	note: string | null;
	index: number;
	id: string;
}

export const Task: React.FC<{ taskNum: number; importance: string; completion: boolean; id: string; children?: React.ReactNode; }> = ({ taskNum, importance, completion, children }) => {
    return (
        <>
            <button type="button" id="task-${name}" className="list_data_item"> 
			<h3 className="list_data_item_title">
				{children}
			</h3>
			<ul className="list_data_item_attributes">
				<li className="list_data_item_attribute">
					<p>Task #:</p>
					<p className="list_data_item_task_num">{taskNum}</p>
				</li>
				<li className="list_data_item_attribute">
					<p>Importance:</p>
					<p className="list_data_item_severity">{importance}</p>
				</li>
				<li className="list_data_item_attribute">
					<p>Completed?:</p>
					<p className="list_data_item_completeion">{completion ? 'Yes' : 'No'}</p>
				</li>
			</ul>
    	</button>
        </>
    )
}

export default Task