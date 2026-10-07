import DeliveryAssignment from './DeliveryAssignment.jsx'
import DeliveryInformation from './DeliveryInformation.jsx'
import DeliveryStatus from './DeliveryStatus.jsx'
import Navbar from './Navbar.jsx'
import SectionPage from './SectionPage.jsx'

const options = [
  { label: 'Delivery Assignment', path: '/delivery/assignment' },
  { label: 'Delivery Status', path: '/delivery/status' },
  { label: 'Delivery Information', path: '/delivery/information' },
]

function Delivery({ form }) {
  return (
    <>
      <Navbar />
      <SectionPage title="Delivery" options={options} form={form} />
    </>
  )
}

export default Delivery
