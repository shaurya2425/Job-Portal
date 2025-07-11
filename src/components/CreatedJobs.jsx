import { getMyJobs } from '@/api/apiJobs';
import useFetch from '@/hooks/useFetch';
import { useUser } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import { BarLoader } from 'react-spinners';
import JobCard from './JobCard';

function CreatedJobs() {

   const {user} = useUser();

   const {
        loading:loadingCreatedJobs,
        data:createdJobs,
        fn:fnCreatedJobs,
    } = useFetch(getMyJobs,{
        recruiter_id:user.id
    })

    useEffect(()=>{ 
        fnCreatedJobs()
    },[])

    if(loadingCreatedJobs){
        return <BarLoader width={"100%"} color='#36d7b7' />
    }

  return (
      <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {createdJobs && createdJobs.length > 0 ? (
            createdJobs.map((job) => (
            <JobCard
                key={job.id}
                job={job}
                savedInit={job.saved?.length > 0} // ✅ handles undefined
                isMyJob
            />
            ))
        ) : (
            <div className="col-span-full text-center text-2xl font-semibold">
            No Jobs Found 😢
            </div>
        )}
       </div>
    
  )
}

export default CreatedJobs
