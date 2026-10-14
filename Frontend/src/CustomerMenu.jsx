import { Link } from 'react-router-dom'

function CustomerMenu() {
  return (
    <div className="navbar-nav flex-row flex-wrap gap-3 border-bottom pb-3">
      <Link className="nav-link text-primary" to="/customer/checkout">
        Checkout
      </Link>
      <Link className="nav-link text-primary" to="/customer/review">
        Review
      </Link>
      <Link className="nav-link text-primary" to="/customer/contact">
        Contact
      </Link>
      <Link className="nav-link text-primary" to="/login">
        Login
      </Link>
      <Link className="nav-link text-primary" to="/signup">
        Signup
      </Link>
    </div>
  )
}

export default CustomerMenu
