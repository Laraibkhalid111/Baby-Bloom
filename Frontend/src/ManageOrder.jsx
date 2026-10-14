function ManageOrder() {
  return (
    <div
      className="container py-5"
    >
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4 p-md-5">
          <div className="text-center mb-4">
            <h1 className="h3 text-primary mb-2">Baby Bloom</h1>
            <h2 className="h4 mb-0">Manage Order</h2>
          </div>

          <form>
            <div className="table-responsive">
              <table className="table table-bordered align-middle mb-0">
                <thead>
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Order Status</th>
                    <th scope="col">Assign Rider</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label className="visually-hidden" htmlFor="orderId">
                        Order ID
                      </label>
                      <input
                        type="text"
                        id="orderId"
                        name="orderId"
                        className="form-control"
                        required
                      />
                    </td>
                    <td>
                      <label className="visually-hidden" htmlFor="customerName">
                        Customer Name
                      </label>
                      <input
                        type="text"
                        id="customerName"
                        name="customerName"
                        className="form-control"
                        required
                      />
                    </td>
                    <td>
                      <label className="visually-hidden" htmlFor="productName">
                        Product Name
                      </label>
                      <input
                        type="text"
                        id="productName"
                        name="productName"
                        className="form-control"
                        required
                      />
                    </td>
                    <td>
                      <label className="visually-hidden" htmlFor="orderStatus">
                        Order Status
                      </label>
                      <select
                        id="orderStatus"
                        name="orderStatus"
                        className="form-select"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Select a status
                        </option>
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td>
                      <label className="visually-hidden" htmlFor="rider">
                        Assign Rider
                      </label>
                      <select
                        id="rider"
                        name="rider"
                        className="form-select"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Select rider
                        </option>
                        <option value="rider-1">Rider 1</option>
                        <option value="rider-2">Rider 2</option>
                        <option value="rider-3">Rider 3</option>
                      </select>
                    </td>
                    <td>
                      <button type="submit" className="btn btn-primary text-nowrap">
                        Update Order
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ManageOrder
