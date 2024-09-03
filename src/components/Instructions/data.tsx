import InstructionsStep from "@/typescript/interfaces/Instructions/InstructionsStep";

import Step1 from '../../../public/instructions/Step1.png'
import Step2 from '../../../public/instructions/Step2.png'
import Step3 from '../../../public/instructions/Step3.png'
import Step4 from '../../../public/instructions/Step4.png'
import Step5 from '../../../public/instructions/Step5.png'


const InstructionsData: InstructionsStep[] = [
    {
        title: "Open site",
        description: "Open the Neurona.com website in the Safari browser",
        image: Step1
    },
    {
        title: "Click on the «Share» icon",
        description: "Click on the «Share» icon (located on the bottom toolbar and is a rectangle with an upward pointing arrow)",
        image: Step2
    },
    {
        title: "Add to Home Screen",
        description: "From the scrolling menu that appears, select «Add to Home Screen»",
        image: Step3
    },
    {
        title: "Enter a name",
        description: "Enter a name for the shortcut, and then click «Add»",
        image: Step4
    },
    {
        title: "Done!",
        description: "Once added, neurona.com will run as a web application on your home screen, offering a seamless full-screen experience without a browser address bar",
        image: Step5
    },
]

export default InstructionsData;