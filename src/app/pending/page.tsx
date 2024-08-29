'use client';

import { AuthenticateWithRedirectCallback, useClerk } from "@clerk/nextjs";

export default async function Pending() {

    return <AuthenticateWithRedirectCallback 
                signInForceRedirectUrl={"/account"}
                signUpForceRedirectUrl={"/account"}
            />
}