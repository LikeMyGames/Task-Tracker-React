'use client'
import LoginOption from "@/components/Login/LoginOption"
// import { getUser } from "@/app/actions"
// import { useEffect, useState } from "react";

// const CurrentUserContext = createContext(null)

export default function MyApp() {
	// const [currentUser, setCurrentUser] = useState();
	
	// useEffect(() => {
	// 	let ignore = false;
	// 	setCurrentUser(null);
	// 	setCurrentUser(getUser())
	// 	getUser().then(res => {
	// 		if (!ignore) {
	// 			setCurrentUser(res);
	// 		}
	// 	})

	// 	fetchBio(person).then(result => {
	// 		if (!ignore) {
	// 			setBio(result);
	// 		}
	// 	});
	// 	return () => {
	// 		ignore = true;
	// 	};
	//   }, [person]);
	return (
	  <LoginOption />
	);
  }
