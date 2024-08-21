import { Screens } from "@/typescript/enums/Auth/Screens";
import { Dispatch, SetStateAction } from "react";

export default interface ScreenProps {
    screenControl: Dispatch<SetStateAction<Screens>>;
}