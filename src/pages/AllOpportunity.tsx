import { Link } from "react-router"

function AllOpportunity() {
  return (
    <div>
      All Opportunity Cards, with Filters Status indicators (Draft, Active, Under Review, Completed)
      <Link to="/Dashboard/allApplicants">
      <p className="text-blue-600 underline">Application details will be there in each opportunity</p>
      </Link>

      <p>Only First Payment Done Opportunity will be Visible</p>
    </div>
  )
}

export default AllOpportunity
