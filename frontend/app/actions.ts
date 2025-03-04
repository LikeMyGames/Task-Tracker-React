'use client'
import auth0 from 'auth0-js';

const options = {
    domain:       'dev-tvx4tuhqxdxxw3wm.us.auth0.com',
    clientID:     'mA7Fyvjn5KejbRpeD6FStgw9e4vW66Ws',
    redirectUri: 'http://localhost:3000',
    scope: 'openid profile email',
    responseType: 'id_token',
}

let accessToken

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

        if (authResult && authResult.accessToken) {
            localStorage.setItem("token", authResult.accessToken);
            window.location.href = "/";
        }
    }))
}

export async function loginProvider( provider: string) {
    const webAuth = new auth0.WebAuth(options)
    console.log(webAuth.authorize({
        connection: provider,
        responseType: 'id_token',
    }))
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

        if (authResult && authResult.accessToken) {
            localStorage.setItem("token", authResult.accessToken);
            accessToken = authResult.accessToken;
            window.location.href = "/";
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
            return user
        })
    })
}