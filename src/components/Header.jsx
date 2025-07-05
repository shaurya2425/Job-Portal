import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton,UserButton } from '@clerk/clerk-react'

function Header() {
  return (
    <div>
      <nav className='py-4 px-10 max-w-full flex justify-between items-center'>
        <Link>
            <img src="/logo.png" className='h-20 ' alt="logo" />
        </Link>

        <Button variant="outline">Login</Button>

        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>

      </nav>
    </div>
  )
}

export default Header

