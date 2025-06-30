import Button from "@/components/Basic Components/Button";
import style from "@/app/page.module.css"
import { MouseEventHandler } from "react";

const ListMenuItem: React.FC<{ children?: React.ReactNode; onClick?: MouseEventHandler<HTMLButtonElement>; }> = ({ children, onClick }) => {
	return (
		<>
			<Button variant="normal" buttonClassName={style.list_menu_list} textClassName={style.list_menu_item_title} onClick={onClick}>{children}</Button>
		</>
	)
}

export default ListMenuItem 