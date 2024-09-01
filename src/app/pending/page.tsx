import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function Pending() {

    return (<AuthenticateWithRedirectCallback 
                signInForceRedirectUrl={"/account"}
                signUpForceRedirectUrl={"/account"}
            />)
}