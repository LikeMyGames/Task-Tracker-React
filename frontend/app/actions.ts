'use server'
import auth0 from 'auth0-js';

const webAuth = new auth0.WebAuth({
    domain:       'dev-tvx4tuhqxdxxw3wm.us.auth0.com',
    clientID:     'mA7Fyvjn5KejbRpeD6FStgw9e4vW66Ws',
    redirectUri: 'http://tasktracker.dcamill.com/callback',
    scope: 'openid profile email'
});

export async function login( formData: FormData ) {
    const email = formData.get( "email" );
    const password = formData.get( "password" );
    console.log("Email: ", email, "; Password: ", password);
    webAuth.client.login({
        username: (email ?? "")?.toString(),
        password: (password ?? "").toString(),
        realm: (process.env.AUTH0_DB ?? "").toString()
    }, (err, authResult) => {
        if (err) {
            console.error(err.description || "Login failed");
            return;
        }

        if (authResult && authResult.accessToken) {
            localStorage.setItem("token", authResult.accessToken);
            window.location.href = "/";
        }
    })
}

export async function loginProvider( provider: string) {
    console.log(webAuth.authorize({
        connection: provider,
        responseType: 'code',
        clientID: process.env.AUTH0_CLIENT_ID
    }))
}

export async function signup( formData: FormData ) {
    const email = formData.get( "email" );
    const password = formData.get( "password" );
    console.log("Email: ", email, "; Password: ", password);
    webAuth.signup({
        email: (email ?? "")?.toString(),
        password: (password ?? "").toString(),
        connection: process.env.AUTH0_DB ?? ""
    }, function (err) { 
        if (err) return alert('Something went wrong: ' + err); 
          return alert('success signup without login!') 
    })
}