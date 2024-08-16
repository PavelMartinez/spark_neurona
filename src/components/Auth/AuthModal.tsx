'use client';

import { Screens } from '@/typescript/enums/Auth/Screens';
import React, { Dispatch, SetStateAction } from 'react'
import { DialogModal, Dialog } from '../ui/primitives';
import { useOverlayTrigger } from 'react-aria';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';

interface AuthModalProps {
    isOpen: boolean;
    screen: Screens | "";
    openControl: Dispatch<SetStateAction<boolean>>;
}

const AuthModal = ({ isOpen, screen, openControl }: AuthModalProps) => {
  return ( 
    <DialogModal isOpen={isOpen} isDismissable onOpenChange={openControl}>
        <Dialog className='auth'>
            {screen === Screens.LOGIN &&
                <LoginScreen />
            }
            {screen === Screens.SIGNUP &&
                <SignUpScreen />
            }
        </Dialog>
    </DialogModal>
  )
}

export default AuthModal