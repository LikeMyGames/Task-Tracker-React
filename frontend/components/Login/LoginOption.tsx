
import style from "@/components/Login/Login.module.css";
import Icon from "@/components/Basic Components/Icon"


export default function LoginOption() {
	return (
		<div className={style.main}>
			<div className={style.main_panel}>
				<div className={style.main_sub_panel}>
					{/* create account */}
					<Icon className={style.main_sub_panel_icon} >person_add</Icon>
					<button className={style.main_sub_panel_button}>Create Account</button>
				</div>
				<div className={style.main_sub_panel}>
					{/* login */}
					<Icon className={style.main_sub_panel_icon} >person</Icon>
					<button className={style.main_sub_panel_button}>Login</button>
				</div>
				<div className={style.main_sub_panel}>
					{/* use locally */}
					<Icon className={style.main_sub_panel_icon} >devices</Icon>
					<button className={style.main_sub_panel_button}>Use Locally</button>
				</div>
			</div>
		</div>
	);
}
