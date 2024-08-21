import React, { useState } from 'react'
import { Flex, FlexItem } from '../ui/layout'
import { ButtonGroup } from '../ui/primitives'
import { AppleLogo, FacebookLogo, GoogleLogo } from '../svg'
import Link from 'next/link'
import { OAuthStrategy } from '@clerk/types'
import { useSignIn, useSignUp } from '@clerk/nextjs'
import ScreenProps from '@/typescript/interfaces/Auth/ScreenProps'
import { Screens } from '@/typescript/enums/Auth/Screens'
import { Spin } from 'antd'

const PendingScreen = ({ screenControl }: ScreenProps) => {
    return (
        <Flex alignPrimary='center' alignSecondary='center' className='auth__inner auth__inner--center' direction='column'>
            <Spin size='large' />
        </Flex>
    )
}

export default PendingScreen