import DeliveryAssignment from './DeliveryAssignment.jsx'
import DeliveryInformation from './DeliveryInformation.jsx'
import DeliveryStatus from './DeliveryStatus.jsx'
import { Navbar } from './App.jsx'
import RiderMenu from './RiderMenu.jsx'

function Delivery({ form }) {
  return (
    <>
      <Navbar />
      <div className="container py-4">
        <RiderMenu />
        <h1 className="text-primary mt-4">Rider</h1>
        <div>{form}</div>
      </div>
    </>
  )
}

export default Delivery
