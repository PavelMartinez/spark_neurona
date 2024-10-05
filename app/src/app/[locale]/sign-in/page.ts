import { redirect } from "next/navigation";

export default async function SignIn({
    searchParams,
    params: { locale }
}: {
    searchParams?:{ [key: string]: string | undefined };
    params: { locale: string };
}) {
    redirect(`/${locale}/?sign-in${searchParams?.redirect ? "&redirect=" + searchParams.redirect : ""}`);
}