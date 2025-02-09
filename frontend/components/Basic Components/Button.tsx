import style from "@/app/page.module.css"
import Icon from "@/components/Basic Components/Icon";

// interface ButtonProps {
//     className?: string;
//     iconName?: string;
// 	variant?: "normal" | "special" | "error" | "warning" | "note" | string;
// }

const Button: React.FC<{iconName?: string; className?: string; variant: "normal" | "special" | "error" | "warning" | "note"; children?: React.ReactNode;}> = ({iconName, variant, children}) => {
    return (
        <>
            <button type="button" className={`${style.list_menu_panel_button} ${style[variant]}`}>
                <Icon>{iconName}</Icon>
				<h3>
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