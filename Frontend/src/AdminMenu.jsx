import { Link } from 'react-router-dom'

function AdminMenu() {
  return (
    <div className="navbar-nav flex-row flex-wrap gap-3 border-bottom pb-3">
      <Link className="nav-link text-primary" to="/admin/add-product">
        Add Product
      </Link>
      <Link className="nav-link text-primary" to="/admin/edit-product">
        Edit Product
      </Link>
      <Link className="nav-link text-primary" to="/admin/manage-order">
        Manage Order
      </Link>
    </div>
  )
}

export default AdminMenu
