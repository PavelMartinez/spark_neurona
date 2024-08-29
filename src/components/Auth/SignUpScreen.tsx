import React, { useState } from 'react'
import { Flex, FlexItem } from '../ui/layout'
import { ButtonGroup } from '../ui/primitives'
import { AppleLogo, FacebookLogo, GoogleLogo } from '../svg'
import Link from 'next/link'
import { OAuthStrategy } from '@clerk/types'
import { useSignIn, useSignUp } from '@clerk/nextjs'
import ScreenProps from '@/typescript/interfaces/Auth/ScreenProps'
import { Screens } from '@/typescript/enums/Auth/Screens'

const SignUpScreen = ({ screenControl }: ScreenProps) => {
    const { signUp } = useSignUp()
    const [extended, setExtended] = useState<boolean>(false);

    if (!signUp) return null
  
    const signUpWith = async (strategy: OAuthStrategy) => {
      return console.log(await signUp.authenticateWithRedirect({
        strategy,
        redirectUrl: '/pending',
        redirectUrlComplete: '/account',
      }))
    }
    return (
        <Flex alignPrimary='center' alignSecondary='center' className='auth__inner' direction='column'>
            <FlexItem size='fill' className='auth__heading'>
                <h3>Sign Up to Neurona</h3>
            </FlexItem>
            <FlexItem size='fill' className='auth__buttons'>
                {!extended ?
                    <>
                        <button className="auth__buttons-item auth__buttons-item--white" onClick={() => {
                            signUpWith("oauth_google")
                        }}>
                            <div className="auth__buttons-icon">
                                <GoogleLogo />
                            </div>
                            <div className="auth__buttons-text">
                                Continue with Google
                            </div>
                        </button>
                        <button className="auth__buttons-item auth__buttons-item--grey" onClick={() => screenControl(Screens.SIGNUP_EMAIL)}>
                            <div className="auth__buttons-text">
                                Continue with Email
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
                            signUpWith("oauth_google")
                        }}>
                            <div className="auth__buttons-icon">
                                <GoogleLogo />
                            </div>
                            <div className="auth__buttons-text">
                                Continue with Google
                            </div>
                        </button>
                        <button className="auth__buttons-item" onClick={() => {
                            signUpWith("oauth_facebook")
                        }}>
                            <div className="auth__buttons-icon">
                                <FacebookLogo />
                            </div>
                            <div className="auth__buttons-text">
                                Continue with Facebook
                            </div>
                        </button>
                        <button className="auth__buttons-item" onClick={() => {
                            signUpWith("oauth_apple")
                        }}>
                            <div className="auth__buttons-icon">
                                <AppleLogo />
                            </div>
                            <div className="auth__buttons-text">
                                Continue with Apple
                            </div>
                        </button>
                        <button className="auth__buttons-item auth__buttons-item--grey" onClick={() => screenControl(Screens.SIGNUP_EMAIL)}>
                            <div className="auth__buttons-text">
                                Continue with Email
                            </div>
                        </button>
                    </>
                }
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
        </Flex>
    )
}

export default SignUpScreen