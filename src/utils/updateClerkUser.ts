import IUser from "@/typescript/interfaces/Models/IUser"
import { clerkClient } from "@clerk/nextjs/server"

export default function updateClerkUser(user: IUser) {
    return clerkClient().users.updateUser(user.externalId, {
        publicMetadata: {
            coins: user.coins,
            dollars: user.dollars,
            referalString: user.referalString,
            referals: user.referals.length
        }
    })
}