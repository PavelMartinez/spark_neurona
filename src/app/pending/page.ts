import { redirect } from "next/navigation";

export default async function Pending() {
    redirect("/?pending");
}