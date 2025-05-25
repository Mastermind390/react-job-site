import { useParams, useLoaderData } from "react-router-dom";
import Spinner from "../components/Spinner";
import JobDetailPage from "../components/JobDetailPage";


const JobPage = () => {
    const {id} = useParams();
    const job = useLoaderData();

  return (
    <>
        <JobDetailPage title={job.title} type={job.type} description={job.description} location={job.location} salary={job.salary} company={job.company}/>
    </>
  )
};

const jobLoader = async ({params}) => {
    const res = await fetch(`api/jobs/${params.id}`)
    const data = await res.json();
    return data;
};

export {JobPage as default, jobLoader}
