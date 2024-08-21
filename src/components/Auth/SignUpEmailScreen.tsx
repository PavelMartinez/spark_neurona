import React, { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { useClerk, useSignUp } from '@clerk/nextjs'
import ScreenProps from '@/typescript/interfaces/Auth/ScreenProps'
import { Flex, FlexItem } from '../ui/layout'
import { Button, Input, Link } from '../ui/primitives'
import { LeftArrowIcon } from '../svg'
import { Screens } from '@/typescript/enums/Auth/Screens'

// pages/sign-up.jsx
// Render the sign up form.
// Collect user's email address and send an email link with which
// they can sign up.
function SignUpEmailScreen({ screenControl }: ScreenProps) {
  const [emailAddress, setEmailAddress] = React.useState('')
  const [expired, setExpired] = React.useState(false)
  const [verified, setVerified] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const router = useRouter()
  const { signUp, isLoaded, setActive } = useSignUp()

  if (!isLoaded) {
    return null
  }

  const { startEmailLinkFlow, cancelEmailLinkFlow } = signUp.createEmailLinkFlow()

  async function submit(e: FormEvent) {
    e.preventDefault()
    setExpired(false)
    setVerified(false)
    setSubmitted(true)

    // Start the sign up flow, by collecting
    // the user's email address.
    await signUp?.create({ emailAddress })

    setEmailAddress("")

    // Start the email link flow.
    // Pass your app URL that users will be navigated
    // when they click the email link from their
    // email inbox.
    // su will hold the updated sign up object.
    const su = await startEmailLinkFlow({
      redirectUrl: 'http://localhost:3000/verification',
    })

    // Check the verification result.
    const verification = su.verifications.emailAddress
    if (verification.verifiedFromTheSameClient()) {
      setVerified(true)
      // If you're handling the verification result from
      // another route/component, you should return here.
      // See the <EmailLinkVerification/> component as an
      // example below.
      // If you want to complete the flow on this tab,
      // don't return. Check the sign up status instead.
      return
    } else if (verification.status === 'expired') {
      setExpired(true)
    }

    if (su.status === 'complete' && setActive) {
      // Sign up is complete, we have a session.
      // Navigate to the after sign up URL.
      setActive({
        session: su.createdSessionId,
        beforeEmit: () => router.push('/after-sign-up-path'),
      })
      return
    }
  }

  if (expired) {
    return <div>Email link has expired</div>
  }

  if (verified) {
    return <div>Signed in on other tab</div>
  }

    return (
        <Flex alignPrimary='center' alignSecondary='center' className='auth__inner' direction='column'>
            <FlexItem size='fill' className='auth__heading'>
                <h3>Sign up with Email</h3>
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
                    By signing up, you agree to our
                    <Link className="auth__text-link" href={"/privacy"}>
                        Terms of Service 
                    </Link>
                    and 
                    <Link className="auth__text-link" href={"/privacy"}>
                        Privacy Policy
                    </Link>
                </p>
            </FlexItem>
            <button className="auth__backbutton" onClick={() => screenControl(Screens.SIGNUP)}>
                <LeftArrowIcon />
            </button>
        </Flex>
    )
}

export default SignUpEmailScreen