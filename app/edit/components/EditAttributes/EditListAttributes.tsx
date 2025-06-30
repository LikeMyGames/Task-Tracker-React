import { List, ListSearch } from "@/components/List"
import style from "./EditAttributes.module.css"
import Icon from "@/components/Basic Components/Icon";
// import { createContext } from "react";

// const TaskSearchContext = createContext<{ filterValue: ListSearch; setFilter: (search: ListSearch) => void; } | null>(null)

export function EditListAttributes({ list, filter, create, close }: { list: List; filter: { filterValue: ListSearch | null, setFilter: (value: ListSearch) => void; }, create: () => void; close: () => void }) {
    const newList = list;
	if ( filter.filterValue == null ) {
		filter.setFilter({
			name: "",
			index: [ 1, list.tasks.length ] as number[],
			severity: [ 1, 5 ] as number[],
			completion: 2 as number
		} as ListSearch)
	}
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
			{/* <div className={style.edit_panel_attributes}>
				<h3 className={style.edit_panel_title}>Display Options:</h3>
				<div className={style.edit_panel_item}>
					<h3 className={style.edit_panel_item_title}>Search Tasks:</h3>
					<input type="search" className={style.edit_panel_item_value} placeholder="Task Name" title="task_search_input" onChange={
						(e) => {
							e.preventDefault();
							console.log("Searching for task: ", e.target.value);
							filter.setFilter({
								name: e.target.value,
								index: filter.filterValue?.index,
								severity: filter.filterValue?.severity,
								completion: filter.filterValue?.completion
							} as ListSearch)
						}
					} />
				</div>
			</div> */}
			<div className={style.edit_panel_attributes}>
				<h3 className={style.edit_panel_title}>Filter By:</h3>
				<div className={style.edit_panel_item}>
					<h3 className={style.edit_panel_item_title}>Search Tasks:</h3>
					<input type="search" className={style.edit_panel_item_value} placeholder="Task Name" title="task_search_input" onChange={
						(e) => {
							e.preventDefault();
							console.log("Searching for task: ", e.target.value);
							filter.setFilter({
								name: e.target.value,
								index: filter.filterValue?.index,
								severity: filter.filterValue?.severity,
								completion: filter.filterValue?.completion
							} as ListSearch)
						}
					} />
				</div>
				<div className={style.edit_panel_item}>
					<h3 className={style.edit_panel_item_title}>{'Range of Task #\'s:'}</h3>
					<div className={style.edit_panel_item_range}>
						<input className={style.edit_panel_item_range_value} placeholder="Min" defaultValue={filter.filterValue?.index[0]} onChange={
                            (e) => {
                                e.preventDefault();
                                // listFilter('tasknum')
								filter.setFilter({
									name: filter.filterValue?.name,
									index: [ e.target.value , filter.filterValue?.index[1] ] as number[],
									severity: filter.filterValue?.severity,
									completion: filter.filterValue?.completion
								} as ListSearch)
                            }
                        } />
						<p>{'=>'}</p>
						<input className={style.edit_panel_item_range_value} placeholder="Max" defaultValue={filter.filterValue?.index[1]} onChange={
                            (e) => {
                                e.preventDefault();
                                // listFilter('tasknum')
								filter.setFilter({
									name: filter.filterValue?.name,
									index: [ filter.filterValue?.index[0], e.target.value ] as number[],
									severity: filter.filterValue?.severity,
									completion: filter.filterValue?.completion
								} as ListSearch)
                            }
                        } />
					</div>
				</div>
				<div className={style.edit_panel_item}>
					<h3 className={style.edit_panel_item_title}>Range of Importances:</h3>
					<div className={style.edit_panel_item_range}>
						<select className={style.edit_panel_item_range_value} title={"edit_panel_item_range_value_importance_min"} defaultValue={1} onChange={
                            (e) => {
                                e.preventDefault();
                                // listFilter('importance')
								filter.setFilter({
									name: filter.filterValue?.name,
									index: filter.filterValue?.index,
									severity: [ e.target.value, filter.filterValue?.severity[1] ] as number[],
									completion: filter.filterValue?.completion
								} as ListSearch)
                            }
                        }>
							<option value="1">Very low</option>
							<option value="2">Low</option>
							<option value="3">Medium</option>
							<option value="4">High</option>
							<option value="5">Very high</option>
						</select>
						<p>{'=>'}</p>
						<select className={style.edit_panel_item_range_value} title={"edit_panel_item_range_value_importance_max"} defaultValue={5} onChange={
                            (e) => {
                                e.preventDefault();
                                // listFilter('importance')
								filter.setFilter({
									name: filter.filterValue?.name,
									index: filter.filterValue?.index,
									severity: [ filter.filterValue?.severity[0], e.target.value ] as number[],
									completion: filter.filterValue?.completion
								} as ListSearch)
                            }
                        }>
							<option value="1">Very low</option>
							<option value="2">Low</option>
							<option value="3">Medium</option>
							<option value="4">High</option>
							<option value="5">Very high</option>
						</select>
					</div>
				</div>
				<div className={style.edit_panel_item}>
					<h3 className={style.edit_panel_item_title}>Completed:</h3>
					<div className={style.edit_panel_item_range}>
						<select className={style.edit_panel_item_range_value} title={"edit_panel_item_range_value_completion"} defaultValue={2} onChange={
                            (e) => {
                                e.preventDefault();
                                // listFilter('importance')
								filter.setFilter({
									name: filter.filterValue?.name,
									index: filter.filterValue?.index,
									severity: filter.filterValue?.severity,
									completion: +e.target.value as number
								} as ListSearch)
                            }
                        }>
							<option value="1">Yes</option>
							<option value="0">No</option>
							<option value="2">Yes and No</option>
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
						create()
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
						close()
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