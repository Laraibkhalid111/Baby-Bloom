import AddProduct from './AddProduct.jsx'
import EditProduct from './EditProduct.jsx'
import ManageOrder from './ManageOrder.jsx'
import Navbar from './Navbar.jsx'
import SectionPage from './SectionPage.jsx'
const options = [
  { label: 'Add Product', path: '/admin/add-product' },
  { label: 'Edit Product', path: '/admin/edit-product' },
  { label: 'Manage Order', path: '/admin/manage-order' },
]

function Admin({ form }) {
  return (
    <>
      <Navbar />
      <SectionPage title="Admin" options={options} form={form} />
    </>
  )
}

export default Admin
