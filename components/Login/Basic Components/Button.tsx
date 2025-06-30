import style from "@/components/Login/Login.module.css"
import { MouseEventHandler } from "react";

export const TextInput: React.FC<{ children: React.ReactNode; className?: string; type?: "submit" | "reset" | "button"; onClick?: MouseEventHandler<HTMLButtonElement>; }> = ({ children, className, type, onClick }) => {
    return (
        <div className={ style.card_input }>
            <button className={ `${ style.card_button } ${ className }` } type={ type } onClick={ onClick }>{ children }</button>
        </div>
    )
}

export default TextInput