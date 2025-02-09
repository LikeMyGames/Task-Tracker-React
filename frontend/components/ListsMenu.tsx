import ListMenuItem from "@/components/Basic Component Groups/ListMenuItem";
import { List } from "@/components/ListView";

const ListsMenu: React.FC<{ children?: React.ReactNode; lists: List[]}> = ({ lists }) => {
    return (
        <>
            {
                lists.map((list) => (<ListMenuItem key={list.id}>{list.name}</ListMenuItem>))
            }
        </>
    )
}

export default ListsMenu