import style from "@/app/page.module.css";
import ListMenuItem from "@/components/Basic Component Groups/ListMenuItem";
import { List } from "@/components/List";
import Button from "../Basic Components/Button";
import { MouseEventHandler } from "react";

export const ListMenu: React.FC<{ lists: List[]; menuItemOnClick?: MouseEventHandler<HTMLButtonElement>; }> = ({ lists, menuItemOnClick }) => {
	return (
		<div className={style["list_menu"]}>
			<h2 className={style["list_menu_title"]}>
				Lists
			</h2>
			<div className={style["list_menu_lists"]}>
				{
					lists.map((list) => (<ListMenuItem key={list.id} onClick={menuItemOnClick}>{list.name}</ListMenuItem>))
				}
			</div>
			<div className={style["list_menu_panel"]}>
				<Button iconName="add_circle" buttonClassName={style.list_menu_panel_button} variant={"special"}>List</Button>
			</div>
		</div>
	)
}

export default ListMenu