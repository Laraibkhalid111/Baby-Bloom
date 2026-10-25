import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitManageOrder } from './api.jsx'

const manageOrderSchema = z.object({
  rider: z.enum(["rider-1", "rider-2", "rider-3"], { error: 'Rider is required' })
})

function ManageOrder() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(manageOrderSchema) })

  async function onSubmit(data) {
    await submitManageOrder(data)
  }
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="table-responsive">
              <table className="table table-bordered align-middle mb-0">
                <thead>
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Products Quantities</th>
                    <th scope="col">Total (PKR)</th>
                    <th scope="col">Payment Method / Status</th>
                    <th scope="col">Delivery Status</th>
                    <th scope="col">Delivery Person</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label className="visually-hidden" htmlFor="orderId">
                        Order ID
                      </label>
                      <select
                        id="orderId"
                        name="orderId"
                        className="form-select"
                        defaultValue=""
                        required {...register("orderId")}>
                        <option value="" disabled>Select an order</option>
                      </select>
                    {errors.orderId && <span className="text-danger d-block">{errors.orderId.message}</span>}
                    </td>
                    <td>
                      No order data available
                    </td>
                    <td>
                      <label className="visually-hidden" htmlFor="productName">
                        Product Name
                      </label>
                      No order data available
                    </td>
                    <td>
                      No order data available
                    </td>
                    <td>No order data available</td>
                    <td>No order data available</td>
                    <td>
                      <label className="visually-hidden" htmlFor="rider">
                        Delivery Person
                      </label>
                      <select
                        id="rider"
                        name="rider"
                        className="form-select"
                        defaultValue=""
                        required
                       {...register("rider")}>
                        <option value="" disabled>Select delivery person</option>
                        <option value="rider-1">Rider 1</option>
                        <option value="rider-2">Rider 2</option>
                        <option value="rider-3">Rider 3</option>
                      </select>
                    {errors.rider && <span className="text-danger d-block">{errors.rider.message}</span>}
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
