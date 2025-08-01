import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Boxes, BoxIcon, BriefcaseBusiness, Download, School } from 'lucide-react'
import useFetch from '@/hooks/useFetch'
import { updateHiringStatus } from '@/api/apiJobs'
import { BarLoader } from 'react-spinners'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { updateApplicationStatus } from '@/api/apiApplications'

const ApplicationCard = ({application,isCandidate=false}) => {

    const handleDownload = ()=>{
        const link = document.createElement("a");
        link.href = application?.resume;
        link.target = "_blank"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    const{
        loading:loadingHiringStatus,
        fn:fnHiringStatus
    } = useFetch(
        updateApplicationStatus,{
            job_id:application.job_id,
        }
    )

    const handleStatusChange = (status) => {
        fnHiringStatus(status)
    }

  return (
    <Card className='mt-4'>
        {loadingHiringStatus && <BarLoader width={"100%"} color='#36d7b7' /> }
        <CardHeader>
            <CardTitle className='flex text-xl items-center justify-between' >
                {isCandidate
                    ? `${application?.job?.title} at ${application?.job?.company?.name} `
                    : application?.name
                }
                <Download size={18}
                className='bg-white text-black rounded-full h-8 w-8 p-1.5 cursor-pointer'
                onClick={handleDownload}
                />
            </CardTitle>
        </CardHeader>
        
        <CardContent className='flex flex-col gap-4 flex-1' >
            <div className='flex flex-col md:flex-row justify-between' >
                <div className='flex gap-2 items-center' > 
                    <BriefcaseBusiness size={15} /> {application?.experience} years of experience
                </div>

                <div className='flex gap-2 items-center' > 
                    <School size={15} /> {application?.education}
                </div>

                <div className='flex gap-2 items-center' > 
                    <Boxes size={15} /> Skills: {application?.skills}
                </div>
            </div>
            <hr />
        </CardContent>
            <CardFooter className='flex justify-between'>
                <span>{new Date(application?.created_at).toLocaleString()}</span>
                {isCandidate?(
                    <span className='font-bold capitalize' >Status:{application?.status}</span>
                ):(
                    <Select  onValueChange={handleStatusChange} defaultValue={application.status} >
                        <SelectTrigger className='w-52' >
                            <SelectValue 
                                placeholder='Application Status'
                            />
                        </SelectTrigger>
                        <SelectContent>

                            <SelectItem value="applied" >Applied</SelectItem>
                            <SelectItem value="interviewing" >Interviewing</SelectItem>
                            <SelectItem value="hired" >Hired</SelectItem>
                            <SelectItem value="rejected" >Rejected</SelectItem>
                                
                        </SelectContent>
                    </Select>
                )}
            </CardFooter>
    </Card>
  )
}

export default ApplicationCard
