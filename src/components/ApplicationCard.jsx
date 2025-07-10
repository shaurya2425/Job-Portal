import React from 'react'
import { Card, CardHeader, CardTitle } from './ui/card'
import { Download } from 'lucide-react'

const ApplicationCard = ({application,isCandidate=false}) => {

    const handleDownload = ()=>{
        const link = document.createElement("a");
        link.href = application?.resume;
        link.target = "_blank"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

  return <Card className='mt-4'>
    <CardHeader>
        <CardTitle className='flex items-center justify-between' >
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
  </Card>
}

export default ApplicationCard
