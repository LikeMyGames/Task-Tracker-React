
import style from "@/components/Login/Login.module.css";
import Icon from "@/components/Basic Components/Icon"
import TextInput from "@/components/Login/Basic Components/TextInput"
import Button from "@/components/Login/Basic Components/Button"
import GoogleIcon from "@/public/google.svg"
import GithubIcon from "@/public/github.svg"
import Image from "next/image";


export default function LoginOption() {
	return (
		<div className={style.main}>
			<div className={`${style.card} ${style.card_small}`}>
				<Icon>person_add</Icon>
			</div>
			<div className={`${style.card} ${style.card_big}`}>
				<Icon>person</Icon>
				<h2 className={style.card_text_main}>Sign In</h2>
				<TextInput type="email" title={"username"}>Username or Email</TextInput>
				<TextInput type="password" title={"password"}>Password</TextInput>
				<Button className="special">
					<h3 className={style.card_button_text}>Sign In</h3>
				</Button>
				<div className={style.card_option_seperator}>
					<div className={style.card_option_seperator_bar} />
					<h4 className={style.card_option_seperator_text}>or continue with</h4>
					<div className={style.card_option_seperator_bar} />
				</div>
				<button type={"button"} className={style.card_option}>
					<Image alt="Google Icon" src={GoogleIcon} className={style.card_option_icon}></Image>
					<h3 className={style.card_button_text}>
						Google
					</h3>
				</button>
				<button type={"button"} className={style.card_option}>
					<Image alt="Github Icon" src={GithubIcon} className={style.card_option_icon}></Image>
					<h3 className={style.card_button_text}>
						Github
					</h3>
				</button>
			</div>
			<div className={`${style.card} ${style.card_small}`}>
				<Icon>devices</Icon>
			</div>
		</div>
	);
}
