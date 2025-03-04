'use client'
import auth0 from 'auth0-js';
import { PrintToCMD } from '@/lib/actions';

const options = {
    domain:       'dev-tvx4tuhqxdxxw3wm.us.auth0.com',
    clientID:     'mA7Fyvjn5KejbRpeD6FStgw9e4vW66Ws',
    redirectUri: 'http://localhost:3000/login',
    scope: 'openid profile email',
    responseType: 'id_token',
}

export let accessToken = "";
let userGlobal: auth0.Auth0UserProfile;

// const webAuth = new auth0.WebAuth(options);

export async function login( formData: FormData ) {
    const webAuth = new auth0.WebAuth(options)
    const email = formData.get( "email" );
    const password = formData.get( "password" );
    console.log("Email: ", email, "; Password: ", password);
    console.log(webAuth.login({
        responseType: 'code id_token token',
        username: (email ?? "")?.toString(),
        password: (password ?? "").toString(),
        // realm: (process.env.AUTH0_DB ?? "").toString()
        realm: 'Task-Tracker-Auth-db'
    }, (err, authResult) => {
        if (err) {
            console.error(err.description || "Login failed");
            return;
        }

        PrintToCMD(authResult.accessToken)

        if (authResult && authResult.accessToken) {
            localStorage.setItem("token", authResult.accessToken);
            accessToken = authResult.accessToken;
            console.log(accessToken)
            window.location.href = "/";
            getUser()
        }
    }))
}

export async function loginProvider( provider: string) {
    const webAuth = new auth0.WebAuth(options)
    console.log(webAuth.authorize({
        connection: provider,
        responseType: 'token',
    }))
    window.location.hash = "";
}

export async function signup( formData: FormData ) {
    const webAuth = new auth0.WebAuth(options)
    const email = formData.get( "email" );
    const password = formData.get( "password" );
    console.log("Email: ", email, "; Password: ", password);
    webAuth.signup({
        email: (email ?? "")?.toString(),
        password: (password ?? "").toString(),
        // connection: process.env.AUTH0_DB ?? ""
        connection: 'Task-Tracker-Auth-db'
    }, (err, authResult) => {
        if (err) {
            console.error(authResult || "Signup failed");
            return;
        }

        console.log(authResult)

        if (authResult && authResult.accessToken) {
            localStorage.setItem("token", authResult.accessToken);
            accessToken = authResult.accessToken;
            window.location.href = "/";
            getUser()
        }
    })
}

export function getUser() {
    const webAuth = new auth0.WebAuth(options)
    webAuth.parseHash({ hash: window.location.hash }, function(err, authResult) {
        if (err) {
            return console.error(err);
        }

        webAuth.client.userInfo(authResult?.accessToken ?? "", function(err, user) {
            if (err) {
                return console.error(err)
            }
            userGlobal = user
            PrintToCMD(JSON.stringify(userGlobal))
        })
    })
    return userGlobal
}