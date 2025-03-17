import { List } from "@/components/List"
import style from "./EditAttributes.module.css"
import Icon from "@/components/Basic Components/Icon";

export function EditListAttributes({ list, search }: { list: List; search: (query: string) => void; }) {
    const newList = list;
	const taskIndexMin = 1;
	const taskIndexMax = list.tasks.length + 1;
    return (
        <div className={style.edit_panel_replaceable}>
			<div className={style.edit_panel_attributes}>
				<h3 className={style.edit_panel_title}>List Settings:</h3>
				<div className={style.edit_panel_item}>
					<h3 className={style.edit_panel_item_title}>List Name:</h3>
					<input type="text" className={style.edit_panel_item_value} placeholder="List Name" title="list_name_input" defaultValue={list.name} onChange={
						(e) => {
							e.preventDefault();
							newList.name = e.target.value;
							console.log("New name for list: ", newList.name);
						}
					}/>
				</div>
			</div>
			<div className={style.edit_panel_attributes}>
				<h3 className={style.edit_panel_title}>Display Options:</h3>
				<div className={style.edit_panel_item}>
					<h3 className={style.edit_panel_item_title}>Search Tasks:</h3>
					<input type="search" className={style.edit_panel_item_value} placeholder="Task Name" title="task_search_input" onChange={
						(e) => {
							e.preventDefault();
							console.log("Searching for task: ", e.target.value);
							search(e.target.value)
						}
					} />
				</div>
				{/* <div className={style.edit_panel_item}>
					<h3 className={style.edit_panel_item_title}>Sort By:</h3>
					<select className={style.edit_panel_item_value} title="task_importance_selector" onChange={
                        (e) => {
                            e.preventDefault();
                            // sortAttributeChange()
                        }
                    }>
						<option value="1">{'Name: (A => Z)'}</option>
						<option value="2">{'Name: (Z => A)'}</option>
						<option value="3">{'Task #: (Low => High)'}</option>
						<option value="4">{'Task #: (High => Low)'}</option>
						<option value="5">{'Importance: (Very Low => Very High)'}</option>
						<option value="6">{'Importance: (Very High => Very Low)'}</option>
						<option value="7">{'Completion: (True => False)'}</option>
						<option value="8">{'Completion: (False => True)'}</option>
					</select>
				</div> */}
			</div>
			<div className={style.edit_panel_attributes}>
				<h3 className={style.edit_panel_title}>Filter By:</h3>
				<div className={style.edit_panel_item}>
					<h3 className={style.edit_panel_item_title}>{'Range of Task #\'s:'}</h3>
					<div className={style.edit_panel_item_range}>
						<input className={style.edit_panel_item_range_value} placeholder="Min" defaultValue={taskIndexMin} onChange={
                            (e) => {
                                e.preventDefault();
                                // listFilter('tasknum')
                            }
                        } />
						<p>{'=>'}</p>
						<input className={style.edit_panel_item_range_value} placeholder="Max" defaultValue={taskIndexMax} onChange={
                            (e) => {
                                e.preventDefault();
                                // listFilter('tasknum')
                            }
                        } />
					</div>
				</div>
				<div className={style.edit_panel_item}>
					<h3 className={style.edit_panel_item_title}>Range of Importances:</h3>
					<div className={style.edit_panel_item_range}>
						<select className={style.edit_panel_item_range_value} onChange={
                            (e) => {
                                e.preventDefault();
                                // listFilter('importance')
                            }
                        }>
							<option selected value="1">Very low</option>
							<option value="2">Low</option>
							<option value="3">Medium</option>
							<option value="4">High</option>
							<option value="5">Very high</option>
						</select>
						<p>{'=>'}</p>
						<select className={style.edit_panel_item_range_value} onChange={
                            (e) => {
                                e.preventDefault();
                                // listFilter('importance')
                            }
                        }>
							<option value="1">Very low</option>
							<option value="2">Low</option>
							<option value="3">Medium</option>
							<option value="4">High</option>
							<option selected value="5">Very high</option>
						</select>
					</div>
				</div>
				<div className={style.edit_panel_item}>
					<h3 className={style.edit_panel_item_title}>Range of Importances:</h3>
					<div className={style.edit_panel_item_range}>
						<select className={style.edit_panel_item_range_value} onChange={
                            (e) => {
                                e.preventDefault();
                                // listFilter('importance')
                            }
                        }>
							<option value="0">No</option>
							<option value="1">Yes</option>
						</select>
						<p>{'=>'}</p>
						<select className={style.edit_panel_item_range_value} onChange={
                            (e) => {
                                e.preventDefault();
                                // listFilter('importance')
                            }
                        }>
							<option value="0">No</option>
							<option value="1">Yes</option>
						</select>
					</div>
				</div>
				{/* <div className={style.edit_panel_item}>
					<h3 className={style.edit_panel_item_title}>Completion:</h3>
					<button name="list_completion_filter_checkbox" type="button" className={style.edit_panel_item_value} onClick={
                        (e) => {
                            e.preventDefault();
                            // listFilter('completion')
                        }
                    }>
                        <Icon>close</Icon>
					</button>
			    </div> */}
            </div>
			<div className={style.edit_panel_close}>
				<button type="button" className={`${style.edit_panel_close_button} special`} onClick={
                    (e) => {
                        e.preventDefault();
                        // createTask()
                    }
                }>
                    <Icon>add_circle</Icon>
					{/* <span className="material-symbols-rounded">
						add_circle
					</span> */}
					<h3>
						Task
					</h3>
				</button>
				<button type="button" className={`${style.edit_panel_close_button} special`} onClick={
                    (e) => {
                        e.preventDefault();
                        // closeList()
                    }
                }>
                    <Icon>cancel</Icon>
					{/* <span className="material-symbols-rounded">
						cancel
					</span> */}
					<h3>
						Close
					</h3>
				</button>
			</div>
			<div className={style.edit_panel_close}>
				<button type="button" className={`${style.edit_panel_close_button_single} ${style.edit_panel_close_button} error`} onClick={
                    (e) => {
                        e.preventDefault();
                        // deleteList()
                    }
                }>
                    <Icon>delete</Icon>
					{/* <span className="material-symbols-rounded">
						delete
					</span> */}
					<h3>
						Delete List
					</h3>
				</button>
			</div>
		</div>
    )
}