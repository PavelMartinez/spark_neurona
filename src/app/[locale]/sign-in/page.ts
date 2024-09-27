import { redirect } from "next/navigation";

export default async function SignIn({
    searchParams,
    locale
}: {
    searchParams?:{ [key: string]: string | undefined };
    locale: string;
}) {
    redirect(`/${locale}/?sign-in${searchParams?.redirect ? "&redirect=" + searchParams.redirect : ""}`);
}