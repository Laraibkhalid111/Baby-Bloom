import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Checkout from './checkout.jsx'
import profile from './Profile.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Profile from './Profile.jsx'
import Review from './Review.jsx'
import AddProduct from './AddProduct.jsx'
import EditProduct from './EditProduct.jsx'
import ManageOrder from './ManageOrder.jsx'
import DeliveryAssignment from './DeliveryAssignment.jsx'
import DeliveryStatus from './DeliveryStatus.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Review /> */}
    {/* <Profile /> */}
    {/* <Signup /> */}
    {/* <App /> */}
    {/* <Login /> */}
    {/* <checkout /> */}
    {/* <AddProduct /> */}
    {/* <EditProduct /> */}
    {/* <ManageOrder /> */}
    {/* <DeliveryAssignment /> */}
    {/* <DeliveryStatus /> */}
  </StrictMode>,
)
