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
        <Dialog className='auth' aria-label='Auth Dialog'>
            {screen === Screens.LOGIN &&
                <LoginScreen screenControl={screenControl} openControl={openControl} />
            }
        </Dialog>
    </DialogModal>
  )
}

export default AuthModal