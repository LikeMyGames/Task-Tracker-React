import style from "../../page.module.css"

export default function ListOption({id, name, action}: {id: string; name: string; action: (id: string) => void}) {
    return (
        <button
            type="button"
            id={id}
            className={style.list_menu_list}
            onClick={() => {
                console.log("loading list with id: ", id)
                action(id)
            }}
        >
            <h3 className={style.list_menu_item_title}>
                {name}
            </h3>
        </button>
    )
}