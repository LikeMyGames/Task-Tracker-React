import style from "@/components/Login/Login.module.css"

export const TextInput: React.FC<{ children: React.ReactNode; className?: string; type?: "submit" | "reset" | "button"; }> = ({ children, className, type }) => {
    return (
        <div className={style.card_input}>
            <button className={`${style.card_button} ${className}`} type={type}>{children}</button>
        </div>
    )
}

export default TextInput