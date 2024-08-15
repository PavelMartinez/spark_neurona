'use client';

import { Screens } from '@/typescript/enums/Auth/Screens';
import React, { Dispatch, SetStateAction } from 'react'
import { DialogModal, Dialog } from '../ui/primitives';
import { useOverlayTrigger } from 'react-aria';

interface AuthModalProps {
    isOpen: boolean;
    screen: Screens | "";
    openControl: Dispatch<SetStateAction<boolean>>;
}

const AuthModal = ({ isOpen, screen, openControl }: AuthModalProps) => {
  return ( 
    <DialogModal isOpen={isOpen} isDismissable onOpenChange={openControl}>
        <Dialog className='auth'>
            sdsaasd
            <button>close</button>
        </Dialog>
    </DialogModal>
  )
}

export default AuthModal