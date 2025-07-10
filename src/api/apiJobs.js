import supabaseClient from "@/utils/supabase";

// Fetch Jobs
export async function getJobs(token, { location, company_id, searchQuery }) {
  const supabase = await supabaseClient(token);
  let query = supabase
    .from("jobs")
    .select("*,company:companies(name,logo_url), saved:saved_jobs!saved_jobs_job_id_fkey(id, user_id) ");

  if (location) {
    query = query.eq("location", location);
  }

  if (company_id) {
    query = query.eq("company_id", company_id);
  }

  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching Jobs:", error);
    return null;
  }

  return data;
}



// Saved Jobs
export async function savedJobs(token, { alreadySaved }, saveData) {
  const supabase = await supabaseClient(token);

    if(alreadySaved){
        const { data, error:deleteError } = await supabase
            .from("saved_jobs")
            .delete()
            .eq("job_id",saveData.job_id)

        if (deleteError) {
            console.error("Error Deleting Saved Jobs:", deleteError);
            return null;
        }
        return data;
    } else{
        const { data, error:insertError } = await supabase
            .from("saved_jobs")
            .insert(saveData)
            .select()
            if (insertError) {
                console.error("Error Inserting Jobs:", insertError);
                return null;
            }

  return data;
    }

}

// Single Job

export async function getSingleJob(token,{job_id}) {
    const supabase = await supabaseClient(token);

    const {data , error} = await supabase
                            .from("jobs")
                            .select(
                                    "*,company:companies(name,logo_url),applications:applications!applications_job_id_fkey(*)"
                                    )
                            .eq("id",job_id)
                            .single();
    
    if(error){
        console.error("Error Fetching Job",error);
        return null;
    }

    return data;
    
}


// Update Hiring Status

export async function updateHiringStatus(token,{job_id}, isOpen ) {
    const supabase = await supabaseClient(token);

    const {data , error} = await supabase
                            .from("jobs")
                            .update({isOpen:isOpen})
                            .eq("id",job_id)
                            .select();
    
    if(error){
        console.error("Error Updating Job",error);
        return null;
    }

    return data;
    
}


// Post New Job

export async function addNewJob(token, _, jobData) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase
    .from("jobs")
    .insert([jobData])
    .select();

  if (error) {
  console.error("Supabase Error:", error);
  throw new Error(error.message || "Error Creating Job");
  }


  return data;
}

