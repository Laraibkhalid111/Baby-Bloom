import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const deliveryInformationSchema = z.object({
  orderId: z.string().trim().min(1, 'Order ID is required'),
  customerName: z.string().trim().min(1, 'Customer name is required'),
  customerPhone: z.string().trim().min(1, 'Customer phone number is required'),
  city: z.string().trim().min(1, 'City is required'),
  deliveryAddress: z.string().trim().min(1, 'Delivery address is required'),
  postalCode: z.string().trim().min(1, 'Postal code is required'),
  deliveryPerson: z.string().min(1, 'Delivery person is required'),
  expectedDeliveryDate: z.string().min(1, 'Expected delivery date is required'),
  deliveryInstructions: z.string().optional()
})

function DeliveryInformation() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(deliveryInformationSchema) })

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
              <p className="text-center text-muted mb-4">Update delivery information</p>

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

                  <div className="col-md-6">
                    <label htmlFor="city" className="form-label fw-bold">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="form-control"
                      placeholder="Enter the delivery city" {...register("city")} />
                    {errors.city && <span className="text-danger d-block">{errors.city.message}</span>}
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
                      placeholder="Enter the complete delivery address"
                      autoComplete="street-address"
                     {...register("deliveryAddress")}></textarea>
                    {errors.deliveryAddress && <span className="text-danger d-block">{errors.deliveryAddress.message}</span>}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="postalCode" className="form-label fw-bold">
                      Postal code
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      className="form-control"
                      placeholder="Enter the postal code"
                      autoComplete="postal-code" {...register("postalCode")} />
                    {errors.postalCode && <span className="text-danger d-block">{errors.postalCode.message}</span>}
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
                     {...register("deliveryPerson")}>
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
                    <label htmlFor="expectedDeliveryDate" className="form-label fw-bold">
                      Expected delivery date
                    </label>
                    <input
                      type="date"
                      id="expectedDeliveryDate"
                      name="expectedDeliveryDate"
                      className="form-control" {...register("expectedDeliveryDate")} />
                    {errors.expectedDeliveryDate && <span className="text-danger d-block">{errors.expectedDeliveryDate.message}</span>}
                  </div>

                  <div className="col-12">
                    <label htmlFor="deliveryInstructions" className="form-label fw-bold">
                      Delivery instructions / notes
                    </label>
                    <textarea
                      id="deliveryInstructions"
                      name="deliveryInstructions"
                      className="form-control"
                      rows="3"
                      placeholder="Add delivery instructions or notes"
                     {...register("deliveryInstructions")}></textarea>
                    {errors.deliveryInstructions && <span className="text-danger d-block">{errors.deliveryInstructions.message}</span>}
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-4">
                  Update Delivery Information
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryInformation
