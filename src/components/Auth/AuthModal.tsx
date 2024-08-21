'use client';

import { Screens } from '@/typescript/enums/Auth/Screens';
import React, { Dispatch, SetStateAction } from 'react'
import { DialogModal, Dialog } from '../ui/primitives';
import { useOverlayTrigger } from 'react-aria';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import AuthModalProps from '@/typescript/interfaces/Auth/AuthModalProps';
import LoginEmailScreen from './LoginEmailScreen';
import SignUpEmailScreen from './SignUpEmailScreen';
import PendingScreen from './PendingScreen';

const AuthModal = ({ isOpen, screen, openControl, screenControl }: AuthModalProps) => {
  return ( 
    <DialogModal isOpen={isOpen} isDismissable onOpenChange={openControl}>
        <Dialog className='auth'>
            {screen === Screens.LOGIN &&
                <LoginScreen screenControl={screenControl} />
            }
            {screen === Screens.SIGNUP &&
                <SignUpScreen screenControl={screenControl} />
            }
            {screen === Screens.LOGIN_EMAIL &&
                <LoginEmailScreen screenControl={screenControl} />
            }
            {screen === Screens.SIGNUP_EMAIL &&
                <SignUpEmailScreen screenControl={screenControl} />
            }
            {screen === Screens.PENDING &&
                <PendingScreen screenControl={screenControl} />
            }
        </Dialog>
    </DialogModal>
  )
}

export default AuthModal