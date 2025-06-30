import style from "../../page.module.css"
import loadingStyle from "./ListOptionLoading.module.css"

export default function ListOptionLoading() {
    return (
        <>
            <div className={`${loadingStyle.loading} ${style.list_menu_list}`} />
            <div className={`${loadingStyle.loading} ${style.list_menu_list}`} />
            <div className={`${loadingStyle.loading} ${style.list_menu_list}`} />
        </>
    )
}