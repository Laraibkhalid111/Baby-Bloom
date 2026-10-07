import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Checkout from './checkout.jsx'
import Profile from './Profile.jsx'
import Review from './Review.jsx'
import AddProduct from './AddProduct.jsx'
import EditProduct from './EditProduct.jsx'
import ManageOrder from './ManageOrder.jsx'
import DeliveryAssignment from './DeliveryAssignment.jsx'
import DeliveryStatus from './DeliveryStatus.jsx'
import DeliveryInformation from './DeliveryInformation.jsx'
import Contact from './Contact.jsx'

 function Forms() {
  return(
  <>
  <Login/>
  <Signup/>
  <Checkout/>
  <Profile/>
  <Review/>
  <AddProduct/>
  <EditProduct/>
  <ManageOrder/>
  <DeliveryAssignment/>
  <DeliveryStatus/>
  <DeliveryInformation/>
  <Contact/>
  </>
  );
}
export default Forms;
