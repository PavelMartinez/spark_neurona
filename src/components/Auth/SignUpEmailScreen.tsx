import React, { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { useSignUp, useSignIn } from '@clerk/nextjs'
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
  const { signIn } = useSignIn()

  if (!isLoaded) {
    return null
  }


  	async function submit(e: FormEvent) {
    e.preventDefault()
    setExpired(false)
    setVerified(false)
    setSubmitted(true)

    // Start the sign up flow, by collecting
    // the user's email address.
    try {
      await signUp?.create({ emailAddress })

      const { startEmailLinkFlow } = signUp!.createEmailLinkFlow()

      const su = await startEmailLinkFlow({
        redirectUrl: '/verification',
      })

      // Check the verification result.
      const verification = su.verifications.emailAddress
      if (verification.verifiedFromTheSameClient()) {
        setVerified(true)
      } else if (verification.status === 'expired') {
        setExpired(true)
      }
  
      if (su.status === 'complete' && setActive) {
        setActive({
          session: su.createdSessionId,
          beforeEmit: () => router.push('/account'),
        })
        return
      }
    } catch(e: any) {
		if(e.errors.find((err: any) => err.code === "form_identifier_exists"))
		{
			const si = await signIn?.create({ identifier: emailAddress })
			const supportedFirstFactors = si?.supportedFirstFactors?.find(
				(ff) => ff.strategy === 'email_link' && ff.safeIdentifier === emailAddress,
			);
			// @ts-ignore
			const { startEmailLinkFlow } = signIn?.createEmailLinkFlow()

			try {
				const res = await startEmailLinkFlow({
					emailAddressId: (supportedFirstFactors as any)?.emailAddressId,
					redirectUrl: 'http://localhost:3000/verification',
				})
				// Check the verification result.
				const verification = res.firstFactorVerification
				if (verification.verifiedFromTheSameClient()) {
					setVerified(true)
				} else if (verification.status === 'expired') {
					setExpired(true)
				}
				if (res.status === 'complete' && setActive) {
					setActive({
						session: res.createdSessionId,
						beforeEmit: () => router.push('/account'),
					})
					return
				}
			}
			catch(e) {
				console.error(e)
			}
		}
    }

    // setEmailAddress("")
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