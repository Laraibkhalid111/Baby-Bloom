function DeliveryAssignment() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-primary mb-2">Baby Bloom</h1>
              <p className="text-center text-muted mb-4">Assign an order for delivery</p>

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

                  <div className="col-md-6">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="form-control"
                      placeholder="Enter the delivery city"
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
                      placeholder="Enter the complete delivery address"
                      autoComplete="street-address"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="deliveryPerson" className="form-label">
                      Delivery person
                    </label>
                    <select
                      id="deliveryPerson"
                      name="deliveryPerson"
                      className="form-select"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select a delivery person
                      </option>
                      <option value="sarah-johnson">Sarah Johnson</option>
                      <option value="michael-brown">Michael Brown</option>
                      <option value="amina-wilson">Amina Wilson</option>
                      <option value="david-lee">David Lee</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="expectedDeliveryDate" className="form-label">
                      Expected delivery date
                    </label>
                    <input
                      type="date"
                      id="expectedDeliveryDate"
                      name="expectedDeliveryDate"
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
                      placeholder="Add any special delivery instructions"
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-4">
                  Assign Delivery
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryAssignment
