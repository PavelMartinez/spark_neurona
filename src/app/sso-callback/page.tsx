import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function Pending({
    searchParams,
}: {
    searchParams?:{ [key: string]: string | undefined };
}) {
    return (<AuthenticateWithRedirectCallback 
                signInForceRedirectUrl={"/account"}
                signUpForceRedirectUrl={searchParams?.referal ? "/api/account/referal.add?referal=" + searchParams?.referal : "/account"}
            />)
}