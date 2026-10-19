import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const deliveryStatusSchema = z.object({
  orderId: z.string().trim().min(1, 'Order ID is required'),
  customerName: z.string().trim().min(1, 'Customer name is required'),
  customerPhone: z.string().trim().min(1, 'Customer phone number is required'),
  deliveryAddress: z.string().trim().min(1, 'Delivery address is required'),
  currentStatus: z.string().min(1, 'Current delivery status is required'),
  newStatus: z.string().min(1, 'New delivery status is required'),
  deliveryDate: z.string().min(1, 'Delivery date is required'),
  deliveryNotes: z.string().optional()
})

function DeliveryStatus() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(deliveryStatusSchema) })

  function onSubmit(data) {
    console.log('form submitted', data)
  }
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-primary mb-2">Baby Bloom</h1>
              <p className="text-center text-muted mb-4">Update delivery status</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="orderId" className="form-label fw-bold">
                      Order ID
                    </label>
                    <input
                      type="text"
                      id="orderId"
                      name="orderId"
                      className="form-control"
                      placeholder="Enter the order ID" {...register("orderId")} />
                    {errors.orderId && <span className="text-danger d-block">{errors.orderId.message}</span>}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="customerName" className="form-label fw-bold">
                      Customer name
                    </label>
                    <input
                      type="text"
                      id="customerName"
                      name="customerName"
                      className="form-control"
                      placeholder="Enter the customer name" {...register("customerName")} />
                    {errors.customerName && <span className="text-danger d-block">{errors.customerName.message}</span>}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="customerPhone" className="form-label fw-bold">
                      Customer phone number
                    </label>
                    <input
                      type="tel"
                      id="customerPhone"
                      name="customerPhone"
                      className="form-control"
                      placeholder="Enter the customer phone number"
                      autoComplete="tel" {...register("customerPhone")} />
                    {errors.customerPhone && <span className="text-danger d-block">{errors.customerPhone.message}</span>}
                  </div>

                  <div className="col-12">
                    <label htmlFor="deliveryAddress" className="form-label fw-bold">
                      Delivery address
                    </label>
                    <textarea
                      id="deliveryAddress"
                      name="deliveryAddress"
                      className="form-control"
                      rows="3"
                      placeholder="Enter the delivery address"
                      autoComplete="street-address"
                     {...register("deliveryAddress")}></textarea>
                    {errors.deliveryAddress && <span className="text-danger d-block">{errors.deliveryAddress.message}</span>}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="currentStatus" className="form-label fw-bold">
                      Current delivery status
                    </label>
                    <select
                      id="currentStatus"
                      name="currentStatus"
                      className="form-select"
                      defaultValue=""
                     {...register("currentStatus")}>
                      <option value="" disabled>
                        Select current status
                      </option>
                      <option value="assigned">Assigned</option>
                      <option value="out-for-delivery">Out for Delivery</option>
                      <option value="delivered">Delivered</option>
                      <option value="delivery-failed">Delivery Failed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                    {errors.currentStatus && <span className="text-danger d-block">{errors.currentStatus.message}</span>}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="newStatus" className="form-label fw-bold">
                      New delivery status
                    </label>
                    <select
                      id="newStatus"
                      name="newStatus"
                      className="form-select"
                      defaultValue=""
                     {...register("newStatus")}>
                      <option value="" disabled>
                        Select new status
                      </option>
                      <option value="assigned">Assigned</option>
                      <option value="out-for-delivery">Out for Delivery</option>
                      <option value="delivered">Delivered</option>
                      <option value="delivery-failed">Delivery Failed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                    {errors.newStatus && <span className="text-danger d-block">{errors.newStatus.message}</span>}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="deliveryDate" className="form-label fw-bold">
                      Delivery date
                    </label>
                    <input
                      type="date"
                      id="deliveryDate"
                      name="deliveryDate"
                      className="form-control" {...register("deliveryDate")} />
                    {errors.deliveryDate && <span className="text-danger d-block">{errors.deliveryDate.message}</span>}
                  </div>

                  <div className="col-12">
                    <label htmlFor="deliveryNotes" className="form-label fw-bold">
                      Delivery notes
                    </label>
                    <textarea
                      id="deliveryNotes"
                      name="deliveryNotes"
                      className="form-control"
                      rows="3"
                      placeholder="Add notes about the delivery"
                     {...register("deliveryNotes")}></textarea>
                    {errors.deliveryNotes && <span className="text-danger d-block">{errors.deliveryNotes.message}</span>}
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
