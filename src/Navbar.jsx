import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid px-5 px-lg-5">
        <Link className="navbar-brand text-primary fs-4 fw-semibold" to="/">
          Baby Bloom
        </Link>
        <div className="navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-lg-4">
            <li className="nav-item">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customer">Customer</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/delivery">Rider</Link>
            </li>
          </ul>
          <span className="navbar-text">
            <Link className="btn btn-primary px-4 py-2" to="/customer/checkout">Buy Now</Link>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
