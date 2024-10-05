import { Sender } from "@/typescript/enums/Chat/Sender";

export default interface MessagesItemProps {
    sender: Sender;
    text: string;
}