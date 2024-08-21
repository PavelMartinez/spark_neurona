import React, { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { useClerk, useSignIn } from '@clerk/nextjs'
import { EmailLinkErrorCode, isEmailLinkError } from '@clerk/nextjs/errors'
import ScreenProps from '@/typescript/interfaces/Auth/ScreenProps'
import { Button, Input } from '../ui/primitives'
import { Flex, FlexItem } from '../ui/layout'
import Link from 'next/link'
import { LeftArrowIcon } from '../svg'
import { Screens } from '@/typescript/enums/Auth/Screens'

// pages/sign-in.jsx
// Render the sign in form.
// Collect user's email address and send an email link with which
// they can sign in.
function LoginEmailScreen({ screenControl }: ScreenProps) {
    const [emailAddress, setEmailAddress] = React.useState('')
    const [expired, setExpired] = React.useState(false)
    const [submitted, setSubmitted] = React.useState(false)
    const [verified, setVerified] = React.useState(false)
    const router = useRouter()
    const { signIn, isLoaded, setActive } = useSignIn()

    if (!isLoaded) {
        return null
    }

    const { startEmailLinkFlow, cancelEmailLinkFlow } = signIn.createEmailLinkFlow()

    async function submit(e: FormEvent) {
        e.preventDefault()
        setExpired(false)
        setVerified(false)
        setSubmitted(true)

        // Start the sign in flow, by collecting
        // the user's email address.
        const si = await signIn?.create({ identifier: emailAddress })
        const supportedFirstFactors = si?.supportedFirstFactors?.find(
            (ff) => ff.strategy === 'email_link' && ff.safeIdentifier === emailAddress,
        );

        setEmailAddress("")

        // Start the email link flow.
        // Pass your app URL that users will be navigated
        // res will hold the updated sign in object.
        const res = await startEmailLinkFlow({
            emailAddressId: (supportedFirstFactors as any)?.emailAddressId,
            redirectUrl: 'http://localhost:3000/verification',
        })

        // Check the verification result.
        const verification = res.firstFactorVerification
        if (verification.verifiedFromTheSameClient()) {
            setVerified(true)
            // If you're handling the verification result from
            // another route/component, you should return here.
            // See the <Verification/> component as an
            // example below.
            // If you want to complete the flow on this tab,
            // don't return. Simply check the sign in status.
        } else if (verification.status === 'expired') {
            setExpired(true)
        }
        if (res.status === 'complete' && setActive) {
            setActive({ session: res.createdSessionId })
            
            router.push("/account")
            return
        }
    }

    return (
        <Flex alignPrimary='center' alignSecondary='center' className='auth__inner' direction='column'>
            <FlexItem size='fill' className='auth__heading'>
                <h3>Login with Email</h3>
            </FlexItem>
            {expired && 
                <FlexItem size='fill' className='auth__text auth__text--status'>
                    Email link has expired
                </FlexItem>
            }
            {submitted && 
                <FlexItem size='fill' className='auth__text auth__text--status'>
                    Check your e-mail.
                </FlexItem>
            }
            <FlexItem size='fill' className='auth__form'>
                <form onSubmit={submit} className='auth__form-inner'>
                    <Input className="auth__form-input" placeholder="E-mail" onChange={(e) => setEmailAddress(e.target.value)} value={emailAddress}/>
                    <Button type="submit" variant='primary' className="auth__form-button" isDisabled={submitted}>Continue</Button>
                </form>
            </FlexItem>
            <FlexItem size='fill' className='auth__text'>
                <p>
                    By signing in, you agree to our
                    <Link className="auth__text-link" href={"/privacy"}>
                     Terms of Service 
                    </Link>
                    and 
                    <Link className="auth__text-link" href={"/privacy"}>
                     Privacy Policy
                    </Link>
                </p>
            </FlexItem>
            <button className="auth__backbutton" onClick={() => screenControl(Screens.LOGIN)}>
                <LeftArrowIcon />
            </button>
        </Flex>
    )
}

export default LoginEmailScreen;