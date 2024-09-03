import { redirect } from "next/navigation";

export default async function Referal({ params }: { params: { slug: string } }) {
    redirect(`/?sign-in&referal=${params.slug}`);
}