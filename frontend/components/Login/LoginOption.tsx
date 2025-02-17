
import { login } from "@/app/actions"

import style from "@/components/Login/Login.module.css";
import Icon from "@/components/Basic Components/Icon"
import TextInput from "@/components/Login/Basic Components/TextInput"
import Button from "@/components/Login/Basic Components/Button"
import GoogleIcon from "@/public/google.svg"
import GithubIcon from "@/public/github.svg"
import Image from "next/image";
import Head from "next/head";


export default function LoginOption() {
	return (
		<div className={style.main}>
			<Head>
				<link rel="icon" type="image/png" href="@/public/icons/favicon/favicon-96x96.png" sizes="96x96" />
				<link rel="icon" type="image/svg+xml" href="@/public/icons/favicon/favicon.svg" />
				<link rel="shortcut icon" href="@/public/icons/favicon/favicon.ico" />
			</Head>
			<button type={"button"} className={`${style.card} ${style.card_small}`}>
				<Icon>person_add</Icon>
			</button>
			<form action={login} className={`${style.card} ${style.card_big}`}>
				<Icon>person</Icon>
				<h2 className={style.card_text_main}>Sign In</h2>
				<TextInput type="email" title={"email"}>Username or Email</TextInput>
				<TextInput type="password" title={"password"}>Password</TextInput>
				<Button className="special" type={"submit"}>
					<h3 className={style.card_button_text}>Sign In</h3>
				</Button>
				<div className={style.card_option_seperator}>
					<div className={style.card_option_seperator_bar} />
					<h4 className={style.card_option_seperator_text}>or continue with</h4>
					<div className={style.card_option_seperator_bar} />
				</div>
				<button type={"button"} className={style.card_option}>
					<Image alt="Google Icon" src={GoogleIcon} className={style.card_option_icon}></Image>
					<h3 className={style.card_button_text} style={{
						color: "var(--text-color)"
					}}>
						Google
					</h3>
				</button>
				<button type={"button"} className={style.card_option}>
					<Image alt="Github Icon" src={GithubIcon} className={style.card_option_icon}></Image>
					<h3 className={style.card_button_text} style={{
						color: "var(--text-color)"
					}}>
						Github
					</h3>
				</button>
			</form>
			<button type={"button"} className={`${style.card} ${style.card_small}`}>
				<Icon>devices</Icon>
			</button>
		</div>
	);
}
