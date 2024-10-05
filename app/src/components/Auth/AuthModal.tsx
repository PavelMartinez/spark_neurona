'use client';

import { Screens } from '@/typescript/enums/Auth/Screens';
import React from 'react'
import { DialogModal, Dialog } from '../ui/primitives';
import LoginScreen from './LoginScreen';
import AuthModalProps from '@/typescript/interfaces/Auth/AuthModalProps';

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