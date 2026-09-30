function DeliveryStatus() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-primary mb-2">Baby Bloom</h1>
              <p className="text-center text-muted mb-4">Update delivery status</p>

              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="orderId" className="form-label">
                      Order ID
                    </label>
                    <input
                      type="text"
                      id="orderId"
                      name="orderId"
                      className="form-control"
                      placeholder="Enter the order ID"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="customerName" className="form-label">
                      Customer name
                    </label>
                    <input
                      type="text"
                      id="customerName"
                      name="customerName"
                      className="form-control"
                      placeholder="Enter the customer name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="customerPhone" className="form-label">
                      Customer phone number
                    </label>
                    <input
                      type="tel"
                      id="customerPhone"
                      name="customerPhone"
                      className="form-control"
                      placeholder="Enter the customer phone number"
                      autoComplete="tel"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="deliveryAddress" className="form-label">
                      Delivery address
                    </label>
                    <textarea
                      id="deliveryAddress"
                      name="deliveryAddress"
                      className="form-control"
                      rows="3"
                      placeholder="Enter the delivery address"
                      autoComplete="street-address"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="currentStatus" className="form-label">
                      Current delivery status
                    </label>
                    <select
                      id="currentStatus"
                      name="currentStatus"
                      className="form-select"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select current status
                      </option>
                      <option value="assigned">Assigned</option>
                      <option value="out-for-delivery">Out for Delivery</option>
                      <option value="delivered">Delivered</option>
                      <option value="delivery-failed">Delivery Failed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="newStatus" className="form-label">
                      New delivery status
                    </label>
                    <select
                      id="newStatus"
                      name="newStatus"
                      className="form-select"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select new status
                      </option>
                      <option value="assigned">Assigned</option>
                      <option value="out-for-delivery">Out for Delivery</option>
                      <option value="delivered">Delivered</option>
                      <option value="delivery-failed">Delivery Failed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="deliveryDate" className="form-label">
                      Delivery date
                    </label>
                    <input
                      type="date"
                      id="deliveryDate"
                      name="deliveryDate"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="deliveryNotes" className="form-label">
                      Delivery notes
                    </label>
                    <textarea
                      id="deliveryNotes"
                      name="deliveryNotes"
                      className="form-control"
                      rows="3"
                      placeholder="Add notes about the delivery"
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-4">
                  Update Delivery Status
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryStatus
