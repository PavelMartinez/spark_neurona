import { Screens } from "@/typescript/enums/Auth/Screens";
import { Dispatch, SetStateAction } from "react";

export default interface AuthModalProps {
    isOpen: boolean;
    screen: Screens | "";
    openControl: Dispatch<SetStateAction<boolean>>;
    screenControl: Dispatch<SetStateAction<Screens>>;
}