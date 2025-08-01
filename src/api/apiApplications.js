import supabaseClient, { supabaseUrl } from "@/utils/supabase";

// - Apply to job ( candidate )
export async function applyToJob(token, _, jobData) {
  const supabase = await supabaseClient(token);

  const random = Math.floor(Math.random() * 90000);
  const fileName = `resume-${random}-${jobData.candidate_id}`;

  const { error: storageError } = await supabase.storage
    .from("resume")
    .upload(fileName, jobData.resume);

  if (storageError) {
    throw new Error("Error uploading Resume",storageError);
    return null;
  }

  const resume = `${supabaseUrl}/storage/v1/object/public/resume/${fileName}`;

  const { data, error } = await supabase
    .from("applications")
    .insert([
      {
        ...jobData,
        resume,
      },
    ])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Error submitting Application");
  }

  return data;
}




export async function updateApplicationStatus(token,{job_id},status){

    const supabase = await supabaseClient(token);

    
    const { data, error } = await supabase.from("applications")
                            .update({status})
                            .eq('job_id',job_id)
                            .select()

        if (error || data.length === 0 ) {
            console.error("Error Updating Application Status:", error);
            return null;
        }       
    return data;
}


export async function getApplications(token,{user_id}){

    const supabase = await supabaseClient(token);

    
    const { data, error } = await supabase
                            .from("applications")
                            .select(`
                              *,
                              job:jobs!applications_job_id_fkey (
                                title,
                                company:companies!company_id (
                                  name
                                )
                              )
                            `)
                            .eq('candidate_id',user_id)

        if (error) {
            console.error("Error Fetching Applications:", error);
            return null;
        }       
    return data;
}