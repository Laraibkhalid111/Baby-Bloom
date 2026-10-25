function DeliveryInformation() {
  return (
    <div className="container py-5">
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4 p-md-5">
          <h1 className="h3 text-center text-primary mb-2">Baby Bloom</h1>
          <p className="text-center text-muted mb-4">Delivery information</p>
          <div className="table-responsive">
            <table className="table table-bordered align-middle mb-0">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Customer Phone</th>
                  <th>Delivery Address</th>
                  <th>Products &amp; Quantities</th>
                  <th>Assignment Date</th>
                  <th>Delivery Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="7" className="text-center text-muted">No delivery information available</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryInformation
