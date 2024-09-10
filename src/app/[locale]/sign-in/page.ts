import { redirect } from "next/navigation";

export default async function SignIn({
    searchParams,
}: {
    searchParams?:{ [key: string]: string | undefined };
}) {
    redirect(`/?sign-in${searchParams?.redirect ? "&redirect=" + searchParams.redirect : ""}`);
}