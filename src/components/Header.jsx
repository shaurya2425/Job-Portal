import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignIn,UserButton, useUser } from '@clerk/clerk-react'
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";

function Header() {

  const [showSignIn,setShowSignIn] = useState(false)

  const [search,setSearch] = useSearchParams()

  const {user} = useUser()

  useEffect(()=>{
    if(search.get('sign-in')){
      setShowSignIn(true);
    }
  },[search])

   const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({})
    }



  };

  return (
    <div>
      <nav className='py-4 px-10 max-w-full flex justify-between items-center'>
        <Link>
            <img src="/logo.png" className='h-20 ' alt="logo" />
        </Link>


        <div className='flex gap-8'>
          <SignedOut>
            <Button variant="outline" onClick={()=> setShowSignIn(true)} >Login</Button>
          </SignedOut>
          <SignedIn>
            { user?.unsafeMetadata?.role === "recruiter" && (
              <Link to='/post-job'>
                <Button 
                variant="destructive" className='rounded-full'>
                  <PenBox size={20} className='mr-2' />
                  Post a Job
                </Button>
              </Link>)
            }     
              <UserButton 
            
              appearance={
                {
                  elements:{
                    avatarBox:"w-20 h-20"
                  },
                }
              }>
                <UserButton.MenuItems>
                  <UserButton.Link 
                    label='My Jobs'
                    labelIcon = {<BriefcaseBusiness size={15} color='white' />}
                    href='/my-jobs'
                  />
                  <UserButton.Link 
                    label='Saved Jobs'
                    labelIcon = {<Heart size={15} color='white' />}
                    href='/saved-jobs'
                  />
                </UserButton.MenuItems>
              </UserButton>
          </SignedIn>
        </div>

      </nav>

      {showSignIn && 
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      }

    </div>
  )
}

export default Header

