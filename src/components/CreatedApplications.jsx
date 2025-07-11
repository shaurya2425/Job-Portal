import { getApplications } from '@/api/apiApplications'
import useFetch from '@/hooks/useFetch'
import { useUser } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import { BarLoader } from 'react-spinners';
import ApplicationCard from './ApplicationCard';

function CreatedApplications() {

    const {user} = useUser();

    const {
        loading:loadingApplications,
        data:applications,
        fn:fnApplications,
    } = useFetch(getApplications,{
        user_id:user.id
    })

    useEffect(()=>{ 
        fnApplications()
    },[])

    if(loadingApplications){
        return <BarLoader width={"100%"} color='#36d7b7' />
    }

  return (
    <div className='flex flex-col gap-2'>
    {applications?.length > 0 ? (
        applications.map((application) => (
        <ApplicationCard
            key={application.id}
            application={application}
            isCandidate
        />
        ))
    ) : (
        <div className="text-center text-gray-400 py-10 text-xl">
        No applications found 🕵️‍♂️
        </div>
    )}
    </div>

  )
}

export default CreatedApplications
