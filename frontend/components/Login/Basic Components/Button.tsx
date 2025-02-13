import style from "@/components/Login/Login.module.css"

export const TextInput: React.FC<{ children: React.ReactNode; className?: string; }> = ({ children, className }) => {
    return (
        <div className={style.card_input}>
            <button className={`${style.card_button} ${className}`}>{children}</button>
        </div>
    )
}

export default TextInput