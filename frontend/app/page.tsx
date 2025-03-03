'use client'
import LoginOption from "@/components/Login/LoginOption"

export default function Home() {
	console.log(process.env.NODE_ENV)
	return (
		<>
			<LoginOption></LoginOption>
		</>
	);
}
