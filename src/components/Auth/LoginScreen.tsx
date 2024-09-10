import React, { FormEvent, useState } from 'react'
import { Flex, FlexItem } from '../ui/layout'
import { Button, ButtonGroup, Input } from '../ui/primitives'
import { AppleLogo, EmailIcon, FacebookLogo, GoogleLogo, PlaneIcon } from '../svg'
import {Link} from '@/i18n/routing';
import { OAuthStrategy } from '@clerk/types'
import { useSignIn, useSignUp } from '@clerk/nextjs'
import ScreenProps from '@/typescript/interfaces/Auth/ScreenProps'
import { Screens } from '@/typescript/enums/Auth/Screens'
import { useRouter, useSearchParams } from 'next/navigation'

const LoginScreen = ({ openControl }: ScreenProps) => {
    const { signIn } = useSignIn()
    const { signUp, setActive, isLoaded } = useSignUp()
    const [extended, setExtended] = useState<boolean>(false);
    const [emailAddress, setEmailAddress] = React.useState('')
    const [expired, setExpired] = React.useState(false)
    const [verified, setVerified] = React.useState(false)
    const [submitted, setSubmitted] = React.useState(false)
    const router = useRouter()
    const searchParams = useSearchParams()
  
    if (!signIn || !signUp || !isLoaded) return null
  
    const signInWith = (strategy: OAuthStrategy) => {
      return signIn.authenticateWithRedirect({
        strategy,
        redirectUrl: `/sso-callback${searchParams.has("referal") ? "?referal=" + searchParams.get("referal") : ""}`,
        redirectUrlComplete: searchParams.get("redirect") || '/account'
      })
    }
  
    async function handleSignIn(strategy: OAuthStrategy) {
      if (!signIn || !signUp) return null
  
      // If the user has an account in your application, but does not yet
      // have an OAuth account connected to it, you can transfer the OAuth
      // account to the existing user account.
      const userExistsButNeedsToSignIn =
        signUp.verifications.externalAccount.status === 'transferable' &&
        signUp.verifications.externalAccount.error?.code === 'external_account_exists'
  
      if (userExistsButNeedsToSignIn) {
        const res = await signIn.create({ 
            transfer: true
         })
        console.log(res)
  
        if (res.status === 'complete') {
          setActive({
            session: res.createdSessionId,
            beforeEmit: () => router.push(searchParams.get("redirect") || '/account'),
          })
          openControl!(false)
        }
      }
  
      // If the user has an OAuth account but does not yet
      // have an account in your app, you can create an account
      // for them using the OAuth information.
      const userNeedsToBeCreated = signIn.firstFactorVerification.status === 'transferable'
  
      try {
        if (userNeedsToBeCreated) {
            const res = await signUp.create({
              transfer: true,
              unsafeMetadata: {
                referal: searchParams.has("referal") ? searchParams.get("referal") : ""
              }
            })
      
            if (res.status === 'complete') {
              setActive({
                session: res.createdSessionId,
                beforeEmit: () => router.push(searchParams.get("redirect") || '/account'),
              })
              openControl!(false)
            }
          } else {
            // If the user has an account in your application
            // and has an OAuth account connected to it, you can sign them in.
            signInWith(strategy)
            openControl!(false)
          }
      } catch(e) {
        console.error(e)
      }
    }

  	async function submit(e: FormEvent) {
        e.preventDefault()
        setExpired(false)
        setVerified(false)
        setSubmitted(true)

        // Start the sign up flow, by collecting
        // the user's email address.
        try {
            await signUp?.create({
                emailAddress,
                unsafeMetadata: {
                    referal: searchParams.has("referal") ? searchParams.get("referal") : ""
                }
            })

            const { startEmailLinkFlow } = signUp!.createEmailLinkFlow()

            const su = await startEmailLinkFlow({
                redirectUrl: process.env.NEXT_PUBLIC_URL + '/verification',
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
                    beforeEmit: () => router.push(searchParams.get("redirect") || '/account'),
                })
                openControl!(false)
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
                        redirectUrl: process.env.NEXT_PUBLIC_URL + '/verification',
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
                            beforeEmit: () => router.push(searchParams.get("redirect") || '/account'),
                        })
                        openControl!(false)
                        return
                    }
                }
                catch(e) {
                    console.error(e)
                }
            }
        }
  	}
    return (
        <Flex alignPrimary='center' alignSecondary='center' className='auth__inner' direction='column'>
            <FlexItem size='fill' className='auth__heading'>
                <h3>Sign In to Neurona</h3>
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
                    <div className="auth__form-input__wrapper">
                        <Input
                            className="auth__form-input"
                            placeholder="E-mail"
                            onChange={(e) => setEmailAddress(e.target.value)}
                            value={emailAddress}
                            type='email'
                            disabled={submitted}
                            required
                        />
                        <div className="auth__form-input__icon">
                            <EmailIcon />
                        </div>
                    </div>
                    <Button type="submit" variant='primary' className="auth__form-button" isDisabled={submitted || !emailAddress}>
                        <div className="auth__buttons-icon">
                            <PlaneIcon />
                        </div>
                        <div className="auth__buttons-text">
                            Continue with email
                        </div>
                    </Button>
                </form>
            </FlexItem>
            <FlexItem size='fill' className='auth__buttons'>
                {!extended ?
                    <>
                        <button className="auth__buttons-item auth__buttons-item--white" onClick={() => {
                            handleSignIn("oauth_google")
                        }}>
                            <div className="auth__buttons-icon">
                                <GoogleLogo />
                            </div>
                            <div className="auth__buttons-text">
                                Continue with Google
                            </div>
                        </button>
                        <button className="auth__buttons-item auth__buttons-item--service" onClick={() => setExtended(true)}>
                            <div className="auth__buttons-text">
                                View more options
                            </div>
                        </button>
                    </> :
                    <>
                        <button className="auth__buttons-item auth__buttons-item--white" onClick={() => {
                            handleSignIn("oauth_google")
                        }}>
                            <div className="auth__buttons-icon">
                                <GoogleLogo />
                            </div>
                            <div className="auth__buttons-text">
                                Continue with Google
                            </div>
                        </button>
                        <button className="auth__buttons-item" onClick={() => {
                            handleSignIn("oauth_facebook")
                        }}>
                            <div className="auth__buttons-icon">
                                <FacebookLogo />
                            </div>
                            <div className="auth__buttons-text">
                                Continue with Facebook
                            </div>
                        </button>
                        <button className="auth__buttons-item" onClick={() => {
                            handleSignIn("oauth_apple")
                        }}>
                            <div className="auth__buttons-icon">
                                <AppleLogo />
                            </div>
                            <div className="auth__buttons-text">
                                Continue with Apple
                            </div>
                        </button>
                    </>
                }
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
        </Flex>
    )
}

export default LoginScreen