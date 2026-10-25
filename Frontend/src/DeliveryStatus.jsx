import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitDeliveryStatus } from './api.jsx'

const deliveryStatusSchema = z.object({
  deliveryStatus: z.enum(["assigned", "picked-up", "out-for-delivery", "delivered", "delivery-failed"], { error: 'Delivery status is required' }),
  deliveryNote: z.string().optional()
})

function DeliveryStatus() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(deliveryStatusSchema) })

  async function onSubmit(data) {
    await submitDeliveryStatus(data)
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
                    <select
                      id="orderId"
                      name="orderId"
                      className="form-control"
                      defaultValue="" required {...register("orderId")}>
                      <option value="" disabled>Select an assigned order</option>
                    </select>
                    {errors.orderId && <span className="text-danger d-block">{errors.orderId.message}</span>}
                  </div>

                  <div className="col-12">
                    <label htmlFor="deliveryStatus" className="form-label fw-bold">
                      Delivery status
                    </label>
                    <select
                      id="deliveryStatus"
                      name="deliveryStatus"
                      className="form-select"
                      defaultValue=""
                      required {...register("deliveryStatus")}>
                      <option value="" disabled>Select delivery status</option>
                      <option value="assigned">Assigned</option>
                      <option value="picked-up">Picked Up</option>
                      <option value="out-for-delivery">Out for Delivery</option>
                      <option value="delivered">Delivered</option>
                      <option value="delivery-failed">Delivery Failed</option>
                    </select>
                    {errors.deliveryStatus && <span className="text-danger d-block">{errors.deliveryStatus.message}</span>}
                  </div>

                  <div className="col-12">
                    <label htmlFor="deliveryNote" className="form-label fw-bold">
                      Delivery note <span className="text-muted">(optional)</span>
                    </label>
                    <textarea
                      id="deliveryNote"
                      name="deliveryNote"
                      className="form-control"
                      rows="3"
                      placeholder="Add an optional delivery note"
                     {...register("deliveryNote")}></textarea>
                    {errors.deliveryNote && <span className="text-danger d-block">{errors.deliveryNote.message}</span>}
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
