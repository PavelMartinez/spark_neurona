import InstructionsStep from "@/typescript/interfaces/Instructions/InstructionsStep";

import Step1 from '../../../public/instructions/Step1.png'
import Step2 from '../../../public/instructions/Step2.png'
import Step3 from '../../../public/instructions/Step3.png'
import Step4 from '../../../public/instructions/Step4.png'
import Step5 from '../../../public/instructions/Step5.png'
import { AbstractIntlMessages, createTranslator } from "next-intl";

const InstructionsData = (locale: string, messages: AbstractIntlMessages): InstructionsStep[] => {
    const t = createTranslator({locale: locale, messages});
    console.log(locale)
    return [
    {
        title: t('Instructions.steps.1.title'),
        description: t('Instructions.steps.1.description'),
        image: Step1
    },
    {
        title: t('Instructions.steps.2.title'),
        description: t('Instructions.steps.2.description'),
        image: Step2
    },
    {
        title: t('Instructions.steps.3.title'),
        description: t('Instructions.steps.3.description'),
        image: Step3
    },
    {
        title: t('Instructions.steps.4.title'),
        description: t('Instructions.steps.4.description'),
        image: Step4
    },
    {
        title: t('Instructions.steps.5.title'),
        description: t('Instructions.steps.5.description'),
        image: Step5
    },
]}

export default InstructionsData;