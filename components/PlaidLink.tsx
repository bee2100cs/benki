import React from 'react'
import { Button } from './ui/button'

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
    // Create a config object
    const config: PlaidLinkOptions = 
  return (
    <>
        {variant === 'primary' ? (
            <Button 

                className='plaidlink-primary'>
                Connect Bank
            </Button>
        ): variant === 'ghost' ? (
            <Button>
                Connect Bank
            </Button>
        ): (
            <Button>
                Connect Bank
            </Button>
        )}
    </>
  )
}

export default PlaidLink