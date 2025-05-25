import {Link} from 'react-router-dom'
const ViewJobsButton = ({page}) => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
        <Link to={page} class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View All Jobs</Link>
    </section>
  )
}

export default ViewJobsButton
