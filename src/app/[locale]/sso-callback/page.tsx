import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function Pending({
    searchParams,
}: {
    searchParams?:{ [key: string]: string | undefined };
}) {
    return (<AuthenticateWithRedirectCallback 
                signInForceRedirectUrl={searchParams?.redirect || '/account'}
                signUpForceRedirectUrl={searchParams?.referal ? "/api/account/referal.add?referal=" + searchParams?.referal + `${searchParams?.redirect ? "&redirect=" + searchParams?.redirect : ""}` : (searchParams?.redirect || '/account')}
            />)
}