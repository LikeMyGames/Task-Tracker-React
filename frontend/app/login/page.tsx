'use client'
import auth0 from 'auth0-js'
// import { ParseQuery } from '@/lib/URL'
import { redirect } from 'next/navigation';
import { useEffect } from 'react';



const options = {
    domain: 'dev-tvx4tuhqxdxxw3wm.us.auth0.com',
    clientID: 'mA7Fyvjn5KejbRpeD6FStgw9e4vW66Ws',
    redirectUri: process.env["NODE_ENV"] == "development" ? 'http://localhost:3000' : 'https://tasktracker.dcamill.com',
    // redirectUri: 'http://localhost:3000',
    scope: 'openid profile email',
    responseType: 'token',
}

const webAuth = new auth0.WebAuth(options)

export default function LoginLanding() {
    useEffect(() => {
        let userInfo;
        webAuth.parseHash({ hash: window.location.hash }, function(err, authResult) {
            if (err) {
                return console.log(err);
            }

            webAuth.client.userInfo(authResult?.accessToken ?? "" , function(err, user) {
                if (err) {
                    console.error(err);
                    return;
                }
                localStorage.setItem("userInfo", JSON.stringify(user))
                userInfo = user;
                console.log(userInfo)
                redirect(`/user`)
            });
        });
    }, [])
}