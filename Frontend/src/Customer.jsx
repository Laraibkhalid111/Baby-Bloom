import Checkout from './checkout.jsx'
import Contact from './Contact.jsx'
import { Navbar } from './App.jsx'
import Review from './Review.jsx'
import CustomerMenu from './CustomerMenu.jsx'

function Customer({ form }) {
  return (
    <>
      <Navbar />
      <div className="container py-4">
        <CustomerMenu />
        <h1 className="text-primary mt-4">Customer</h1>
        <div>{form}</div>
      </div>
    </>
  )
}

export default Customer
