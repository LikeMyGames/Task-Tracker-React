import { ChangeEvent, useState } from "react";
import style from "./ExpandingTextarea.module.css"

export function ExpandingTextarea({ placeholder, className, title, onChange }: { placeholder?: string; className?: string; title?: string; onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void; }) {
    const [text, setText] = useState(placeholder);
    return (
        <div className={`${style.expanding_textarea_container} ${className ?? ""}`}>
            <div className={style.expanding_textarea_text}>
                {text}
            </div>
            <textarea title={title ?? "expanding textarea"} className={style.expanding_textarea_input} onChange={(e) => {
                setText(e.target.value)
                onChange(e)
            }} />
        </div>
    )
}