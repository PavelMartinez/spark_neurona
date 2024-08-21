'use client';

import { Flex } from "@/components/ui/layout";
// pages/verification.jsx
// Handle email link verification results. This is

import { useClerk } from "@clerk/nextjs"
import { EmailLinkErrorCode, isEmailLinkError } from "@clerk/nextjs/errors"
import React from "react"

// the final step in the email link flow.
function Verification() {
  const [verificationStatus, setVerificationStatus] = React.useState('loading')

  const { handleEmailLinkVerification } = useClerk()

  React.useEffect(() => {
    async function verify() {
      try {
        await handleEmailLinkVerification({})
        // If we're not redirected at this point, it means
        // that the flow has completed on another device.
        setVerificationStatus('verified')
      } catch (err: any) {
        // Verification has failed.
        let status = 'failed'
        if (isEmailLinkError(err) && err.code === EmailLinkErrorCode.Expired) {
          status = 'expired'
        }
        setVerificationStatus(status)
      }
    }
    verify()
  }, [])

  if (verificationStatus === 'loading') {
    return <Flex container alignPrimary="center" alignSecondary="center" className="verification">Loading...</Flex>
  }

  if (verificationStatus === 'failed') {
    return <Flex container alignPrimary="center" alignSecondary="center" className="verification">Email link verification failed</Flex>
  }

  if (verificationStatus === 'expired') {
    return <Flex container alignPrimary="center" alignSecondary="center" className="verification">Email link expired</Flex>
  }

  return <Flex container alignPrimary="center" alignSecondary="center" className="verification">Successfully signed in. Return to the original tab to continue.</Flex>
}

export default Verification;