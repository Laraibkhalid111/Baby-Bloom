import { createBrowserRouter } from 'react-router-dom'
import AddProduct from './AddProduct.jsx'
import Admin from './Admin.jsx'
import App from './App.jsx'
import Checkout from './checkout.jsx'
import Contact from './Contact.jsx'
import Customer from './Customer.jsx'
import Delivery from './Delivery.jsx'
import DeliveryAssignment from './DeliveryAssignment.jsx'
import DeliveryInformation from './DeliveryInformation.jsx'
import DeliveryStatus from './DeliveryStatus.jsx'
import EditProduct from './EditProduct.jsx'
import Login from './Login.jsx'
import ManageOrder from './ManageOrder.jsx'
import Profile from './Profile.jsx'
import Review from './Review.jsx'
import Signup from './Signup.jsx'

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/admin', element: <Admin /> },
  { path: '/admin/add-product', element: <Admin form={<AddProduct />} /> },
  { path: '/admin/edit-product', element: <Admin form={<EditProduct />} /> },
  { path: '/admin/manage-order', element: <Admin form={<ManageOrder />} /> },
  { path: '/delivery', element: <Delivery /> },
  { path: '/delivery/assignment', element: <Delivery form={<DeliveryAssignment />} /> },
  { path: '/delivery/status', element: <Delivery form={<DeliveryStatus />} /> },
  { path: '/delivery/information', element: <Delivery form={<DeliveryInformation />} /> },
  { path: '/customer', element: <Customer /> },
  { path: '/customer/checkout', element: <Customer form={<Checkout />} /> },
  { path: '/customer/profile', element: <Customer form={<Profile />} /> },
  { path: '/customer/review', element: <Customer form={<Review />} /> },
  { path: '/customer/contact', element: <Customer form={<Contact />} /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
])
