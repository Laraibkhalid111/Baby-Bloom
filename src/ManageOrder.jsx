function ManageOrder() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-primary mb-2">Baby Bloom</h1>
              <p className="text-center text-muted mb-4">Manage customer order</p>

              <form>
                <h2 className="h5 text-primary border-bottom pb-2 mb-3">Order information</h2>

                <div className="row g-3 mb-4">
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
                    <label htmlFor="orderDate" className="form-label">
                      Order date
                    </label>
                    <input
                      type="date"
                      id="orderDate"
                      name="orderDate"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="totalAmount" className="form-label">
                      Total amount
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">$</span>
                      <input
                        type="number"
                        id="totalAmount"
                        name="totalAmount"
                        className="form-control"
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                        required
                      />
                    </div>
                  </div>
                </div>

                <h2 className="h5 text-primary border-bottom pb-2 mb-3">Order status</h2>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="orderStatus" className="form-label">
                      Order status
                    </label>
                    <select
                      id="orderStatus"
                      name="orderStatus"
                      className="form-select"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select order status
                      </option>
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="paymentStatus" className="form-label">
                      Payment status
                    </label>
                    <select
                      id="paymentStatus"
                      name="paymentStatus"
                      className="form-select"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select payment status
                      </option>
                      <option value="pending">Pending</option>
                      <option value="paid">Paid</option>
                      <option value="failed">Failed</option>
                      <option value="refunded">Refunded</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="adminNotes" className="form-label">
                      Admin notes
                    </label>
                    <textarea
                      id="adminNotes"
                      name="adminNotes"
                      className="form-control"
                      rows="4"
                      placeholder="Add notes about this order"
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-4">
                  Update Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageOrder
