import style from "@/components/Login/Login.module.css"

export const TextInput: React.FC<{ children: React.ReactNode; title: string; type?: string; }> = ({ children, title, type }) => {
    return (
        <div className={style.card_input}>
            <h5 className={style.card_input_title}>{`${children}`}</h5>
            <input type={type} className={style.card_input_text} title={title} name={title}/>
        </div>
    )
}

export default TextInput