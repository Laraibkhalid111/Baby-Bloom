import AddProduct from './AddProduct.jsx'
import EditProduct from './EditProduct.jsx'
import ManageOrder from './ManageOrder.jsx'
import { Navbar } from './App.jsx'
import AdminMenu from './AdminMenu.jsx'

function Admin({ form }) {
  return (
    <>
      <Navbar />
      <div className="container py-4">
        <AdminMenu />
        <h1 className="text-primary mt-4">Admin</h1>
        <div>{form}</div>
      </div>
    </>
  )
}

export default Admin
