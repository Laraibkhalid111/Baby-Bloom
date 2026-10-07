import Checkout from './checkout.jsx'
import Contact from './Contact.jsx'
import Navbar from './Navbar.jsx'
import Profile from './Profile.jsx'
import Review from './Review.jsx'
import SectionPage from './SectionPage.jsx'

const options = [
  { label: 'Checkout', path: '/customer/checkout' },
  { label: 'Profile', path: '/customer/profile' },
  { label: 'Review', path: '/customer/review' },
  { label: 'Contact', path: '/customer/contact' },
  { label: 'Login', path: '/login' },
  { label: 'Signup', path: '/signup' },
]

function Customer({ form }) {
  return (
    <>
      <Navbar />
      <SectionPage title="Customer" options={options} form={form} />
    </>
  )
}

export default Customer
