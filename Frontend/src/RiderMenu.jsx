import { Link } from 'react-router-dom'

function RiderMenu() {
  return (
    <div className="navbar-nav flex-row flex-wrap gap-3 border-bottom pb-3">
      <Link className="nav-link text-primary" to="/delivery/assignment">
        Delivery Assignment
      </Link>
      <Link className="nav-link text-primary" to="/delivery/status">
        Delivery Status
      </Link>
      <Link className="nav-link text-primary" to="/delivery/information">
        Delivery Information
      </Link>
    </div>
  )
}

export default RiderMenu
