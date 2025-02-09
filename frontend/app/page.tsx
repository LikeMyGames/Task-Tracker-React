import style from "@/app/temp.module.css"
// import List from "@/components/List"
// import Task from "@/components/Task"
// import Button from "@/components/Button"


export default function Home() {
	return (
		<div className={style["main"]}>
        	<div className={style["list_menu"]}>
				<h2 className={style["list_menu_title"]}>
					Lists
				</h2>
				<div className={style["list_menu_lists"]}>
				</div>
				<div className={style["list_menu_panel"]}>
					<button type="button" className={style["list_menu_panel_button special"]}>
						<span className={`material-symbols-rounded ${undefined}`}>
							add_circle
						</span>
						<h3>
							List
						</h3>
					</button>
				</div>
        	</div>
        	<div className={style["main_view"]}>
        	    <h1 className={style["list_name"]}>
					List Name
				</h1>
				<div className={style["list_replaceable"]}>
				</div>
        	</div>
        	<div className={style["edit_panel"]}>
        	    <h2 className={style["properties"]}>
					Properties
        	    </h2>
				<div className={style["edit_panel_replaceable"]}>

				</div>
        	</div>
    	</div>
	);
}
