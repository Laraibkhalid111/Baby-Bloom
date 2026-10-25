import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitDeliveryAssignment } from './api.jsx'

const deliveryAssignmentSchema = z.object({
  deliveryPerson: z.enum(["sarah-johnson", "michael-brown", "amina-wilson", "david-lee"], { error: 'Delivery person is required' }),
  assignmentDate: z.string().min(1, 'Assignment date is required')
})

function DeliveryAssignment() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(deliveryAssignmentSchema) })

  async function onSubmit(data) {
    await submitDeliveryAssignment(data)
  }
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-primary mb-2">Baby Bloom</h1>
              <p className="text-center text-muted mb-4">Assign an order for delivery</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="orderId" className="form-label fw-bold">
                      Order ID
                    </label>
                    <select
                      id="orderId"
                      name="orderId"
                      className="form-select"
                      defaultValue="" required {...register("orderId")}>
                      <option value="" disabled>Select an order</option>
                    </select>
                    {errors.orderId && <span className="text-danger d-block">{errors.orderId.message}</span>}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="deliveryPerson" className="form-label fw-bold">
                      Delivery person
                    </label>
                    <select
                      id="deliveryPerson"
                      name="deliveryPerson"
                      className="form-select"
                      defaultValue=""
                     required {...register("deliveryPerson")}>
                      <option value="" disabled>
                        Select a delivery person
                      </option>
                      <option value="sarah-johnson">Sarah Johnson</option>
                      <option value="michael-brown">Michael Brown</option>
                      <option value="amina-wilson">Amina Wilson</option>
                      <option value="david-lee">David Lee</option>
                    </select>
                    {errors.deliveryPerson && <span className="text-danger d-block">{errors.deliveryPerson.message}</span>}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="assignmentDate" className="form-label fw-bold">
                      Assignment date
                    </label>
                    <input
                      type="date"
                      id="assignmentDate"
                      name="assignmentDate"
                      className="form-control" required {...register("assignmentDate")} />
                    {errors.assignmentDate && <span className="text-danger d-block">{errors.assignmentDate.message}</span>}
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
