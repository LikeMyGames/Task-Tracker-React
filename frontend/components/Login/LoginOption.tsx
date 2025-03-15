
import { login, loginProvider, signup } from "@/app/actions"

import style from "@/components/Login/Login.module.css";
import Icon from "@/components/Basic Components/Icon"
import TextInput from "@/components/Login/Basic Components/TextInput"
import Button from "@/components/Login/Basic Components/Button"
import GoogleIcon from "@/public/google.svg"
import GithubIcon from "@/public/github.svg"
import Image from "next/image";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function LoginOption() {
	const [choice, setChoice] = useState("login");

	if(choice === "login") {
		return (
			<div className={style.main}>
				<button type={"button"} className={`${style.card} ${style.card_small}`} onClick={() => {setChoice("create")}}>
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
					{/* <div className={style.card_option_seperator}>
						<div className={style.card_option_seperator_bar} />
						<h4 className={style.card_option_seperator_text}>or continue with</h4>
						<div className={style.card_option_seperator_bar} />
					</div> */}
					<div className={style.card_option_seperator}>
						<div className={style.card_option_seperator_bar} />
						<div className={style.card_option_seperator_text} >or continue with</div>
					</div>
					<button type={"button"} className={style.card_option} onClick={() => {loginProvider('google-oauth2')}}>
						<Image alt="Google Icon" src={GoogleIcon} className={style.card_option_icon}></Image>
						<h3 className={style.card_button_text} style={{
							color: "var(--text-color)"
						}}>
							Google
						</h3>
					</button>
					<button type={"button"} className={style.card_option} onClick={() => {loginProvider('github')}}>
						<Image alt="Github Icon" src={GithubIcon} className={style.card_option_icon}></Image>
						<h3 className={style.card_button_text} style={{
							color: "var(--text-color)"
						}}>
							Github
						</h3>
					</button>
				</form>
				<button type={"button"} className={`${style.card} ${style.card_small}`} onClick={() => {setChoice("local")}}>
					<Icon>devices</Icon>
				</button>
			</div>
		);
	} else if (choice  === "create") {
		return (
			<div className={style.main}>
				{/* <Head>
					<link rel="icon" type="image/png" href="@/public/icons/favicon/favicon-96x96.png" sizes="96x96" />
					<link rel="icon" type="image/svg+xml" href="@/public/icons/favicon/favicon.svg" />
					<link rel="shortcut icon" href="@/public/icons/favicon/favicon.ico" />
				</Head> */}
				<button type={"button"} className={`${style.card} ${style.card_small}`} onClick={() => {setChoice("local")}}>
					<Icon>devices</Icon>
				</button>
				<form action={signup} className={`${style.card} ${style.card_big}`}>
					<Icon>person_add</Icon>
					<h2 className={style.card_text_main}>Create Account</h2>
					<TextInput type="email" title={"email"}>Username or Email</TextInput>
					<TextInput type="password" title={"password"}>Password</TextInput>
					<Button className="special" type={"submit"}>
						<h3 className={style.card_button_text}>Create Account</h3>
					</Button>
					{/* <div className={style.card_option_seperator}>
						<div className={style.card_option_seperator_bar} />
						<h4 className={style.card_option_seperator_text}>or continue with</h4>
						<div className={style.card_option_seperator_bar} />
					</div> */}
					<div className={style.card_option_seperator}>
						<div className={style.card_option_seperator_bar} />
						<div className={style.card_option_seperator_text} >or continue with</div>
					</div>
					<button type={"button"} className={style.card_option} onClick={() => {loginProvider('google-oauth2')}}>
						<Image alt="Google Icon" src={GoogleIcon} className={style.card_option_icon}></Image>
						<h3 className={style.card_button_text} style={{
							color: "var(--text-color)"
						}}>
							Google
						</h3>
					</button>
					<button type={"button"} className={style.card_option} onClick={() => {loginProvider('github')}}>
						<Image alt="Github Icon" src={GithubIcon} className={style.card_option_icon}></Image>
						<h3 className={style.card_button_text} style={{
							color: "var(--text-color)"
						}}>
							Github
						</h3>
					</button>
				</form>
				<button type={"button"} className={`${style.card} ${style.card_small}`} onClick={() => {setChoice("login")}}>
					<Icon>person</Icon>
				</button>
			</div>
		);
	} else if (choice === "local") {
		return (
			<div className={style.main}>
				{/* <Head>
					<link rel="icon" type="image/png" href="@/public/icons/favicon/favicon-96x96.png" sizes="96x96" />
					<link rel="icon" type="image/svg+xml" href="@/public/icons/favicon/favicon.svg" />
					<link rel="shortcut icon" href="@/public/icons/favicon/favicon.ico" />
				</Head> */}
				<button type={"button"} className={`${style.card} ${style.card_small}`} onClick={() => {setChoice("login")}}>
					<Icon>person</Icon>
				</button>
				<form action={login} className={`${style.card} ${style.card_big}`}>
					<Icon>devices</Icon>
					<h2 className={style.card_text_main}>Use Locally</h2>
					<Button className="special" type={"button"}>
						<h3 className={style.card_button_text}>On Browser</h3>
					</Button>
					<p className={style.card_button_descriptor}>Stores data in your browser</p>
					<Button className="special" type={"button"}>
						<h3 className={style.card_button_text}>On Device</h3>
					</Button>
					<p className={style.card_button_descriptor}>Stores data directly on your device</p>
					{/* <div className={style.card_option_seperator}>
						<div className={style.card_option_seperator_bar} />
						<h4 className={style.card_option_seperator_text}>or</h4>
						<div className={style.card_option_seperator_bar} />
					</div> */}
					<div className={style.card_option_seperator}>
						<div className={style.card_option_seperator_bar} />
						<div className={style.card_option_seperator_text} >or</div>
					</div>
					<Button className="special" onClick={() => redirect("/docs")} >
						<h3 className={style.card_button_text}>Learn More</h3>
					</Button>
				</form>
				<button type={"button"} className={`${style.card} ${style.card_small}`} onClick={() => {setChoice("create")}}>
					<Icon>person_add</Icon>
				</button>
			</div>
		)
	}
}
