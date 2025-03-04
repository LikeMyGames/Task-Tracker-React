'use client'
import LoginOption from "@/components/Login/LoginOption"
import { getUser } from "./actions";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext(null)

export default function Home() {
	const [user, setUser] = useState(null)


	return (
		<>
			<UserContext.Provider 
				value={{
					user,
					setUser
				}}
			>

			</UserContext.Provider>
			{user == null ? 
				<LoginOption></LoginOption>
			: <>
				logged in
			</>}
		</>
	);
}
