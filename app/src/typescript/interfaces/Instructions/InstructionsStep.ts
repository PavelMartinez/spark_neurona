import { StaticImageData } from "next/image";

export default interface InstructionsStep { 
    title: string;
    description: string;
    image: StaticImageData;
}