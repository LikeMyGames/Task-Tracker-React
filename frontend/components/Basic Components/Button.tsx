import style from "@/app/page.module.css"
import Icon from "@/components/Basic Components/Icon";
import { MouseEventHandler } from "react";

// interface ButtonProps {
//     className?: string;
//     iconName?: string;
// 	variant?: "normal" | "special" | "error" | "warning" | "note" | string;
// }

const Button: React.FC<{iconName?: string; buttonClassName?: string; textClassName?:string; iconClassName?: string; variant: "normal" | "special" | "error" | "warning" | "note"; children?: React.ReactNode; onClick?: MouseEventHandler<HTMLButtonElement>; }> = ({iconName, buttonClassName, textClassName, iconClassName, variant, children, onClick}) => {
    return (
        <>
            <button type="button" className={`${buttonClassName} ${style[variant]}`} onClick={onClick}>
                <Icon className={iconClassName}>{iconName}</Icon>
				<h3 className={textClassName}>
                    {children}
				</h3>
			</button>
        </>
    )
}

export default Button

// export default function ListButton({children, props}: Readonly<{children: React.ReactNode; props: ButtonProps;}>) {
//     return (
//         <>
//             <button type="button" className={`${style.list_menu_panel_button} ${style.special}`}>
//                 {props.iconName !== "" || null || undefined ? (
//                     	<span className={`material-symbols-rounded`}>
// 							{props.iconName}
// 				    	</span> 
//                     ) : 
// 					(<></>)
//                 }
// 				<h3>
//                     {children}
// 				</h3>
// 			</button>
//         </>
//     )
// }