'use client'

export const Auth0Domain: string = (process.env.AUTH0_DOMAIN ?? "").toString()

export const Auth0ClientID: string = (process.env.AUTH0_CLIENT_ID ?? "").toString()

export async function getAuth0Domain() {
    return Auth0Domain
}

export async function getAuth0ClientID() {
    return Auth0ClientID
}