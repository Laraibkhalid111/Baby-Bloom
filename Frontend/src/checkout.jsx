import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitCheckout } from './api.jsx'

const checkoutSchema = z.object({
  fullName: z.string().trim().min(1, 'Full name is required'),
  email: z.string().trim().email('Enter a valid email address'),
  phone: z.string().trim().min(1, 'Phone number is required'),
  address: z.string().trim().min(1, 'Delivery address is required'),
  city: z.string().trim().min(1, 'City is required'),
  area: z.string().trim().min(1, 'Area / locality is required'),
  paymentMethod: z.enum(["cash-on-delivery"], { error: 'Payment method is required' }),
  deliveryInstructions: z.string().optional()
})

function Checkout() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(checkoutSchema) })

  async function onSubmit(data) {
    await submitCheckout(data)
  }
	return (
		<div className="container py-5">
			<div className="row justify-content-center">
				<div className="col-12 col-lg-8">
					<div className="card border-0 shadow-sm">
						<div className="card-body p-4 p-md-5">
							<h1 className="h3 text-center text-primary mb-2">Baby Bloom Checkout</h1>
							<p className="text-center text-muted mb-4">Enter your details to place your order</p>

							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="row g-3">
									<div className="col-md-6">
										<label htmlFor="fullName" className="form-label fw-bold">
											Full name
										</label>
										<input
											type="text"
											id="fullName"
											name="fullName"
											className="form-control"
											placeholder="Enter your full name"
											autoComplete="name" required {...register("fullName")} />
                    {errors.fullName && <span className="text-danger d-block">{errors.fullName.message}</span>}
									</div>

									<div className="col-md-6">
										<label htmlFor="email" className="form-label fw-bold">
											Email address
										</label>
										<input
											type="email"
											id="email"
											name="email"
											className="form-control"
											placeholder="Enter your email"
											autoComplete="email" required {...register("email")} />
                    {errors.email && <span className="text-danger d-block">{errors.email.message}</span>}
									</div>

									<div className="col-md-6">
										<label htmlFor="phone" className="form-label fw-bold">
											Phone number
										</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											className="form-control"
											placeholder="Enter your phone number"
											autoComplete="tel" required {...register("phone")} />
                    {errors.phone && <span className="text-danger d-block">{errors.phone.message}</span>}
									</div>

									<div className="col-12">
										<label htmlFor="address" className="form-label fw-bold">
											Delivery address
										</label>
										<textarea
											id="address"
											name="address"
											className="form-control"
											rows="3"
											placeholder="Enter your complete delivery address"
											autoComplete="street-address"
											required
										 {...register("address")}></textarea>
                    {errors.address && <span className="text-danger d-block">{errors.address.message}</span>}
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
											placeholder="Enter your city"
											autoComplete="address-level2" required {...register("city")} />
                    {errors.city && <span className="text-danger d-block">{errors.city.message}</span>}
									</div>

									<div className="col-12">
										<label htmlFor="area" className="form-label fw-bold">
											Area / locality
										</label>
										<input type="text" id="area" name="area" className="form-control"
											placeholder="Enter your area or locality" required {...register("area")} />
                    {errors.area && <span className="text-danger d-block">{errors.area.message}</span>}
									</div>

									<div className="col-12">
										<label htmlFor="paymentMethod" className="form-label fw-bold">Payment method</label>
										<select id="paymentMethod" name="paymentMethod" className="form-select"
											defaultValue="" required {...register("paymentMethod")}>
											<option value="" disabled>Select a payment method</option>
											<option value="cash-on-delivery">Cash on Delivery (COD)</option>
										</select>
                    {errors.paymentMethod && <span className="text-danger d-block">{errors.paymentMethod.message}</span>}
									</div>

									<div className="col-12">
										<label htmlFor="deliveryInstructions" className="form-label fw-bold">
											Delivery instructions <span className="text-muted">(optional)</span>
										</label>
										<textarea
											id="deliveryInstructions"
											name="deliveryInstructions"
											className="form-control"
											rows="3"
											placeholder="Add any delivery instructions"
										 {...register("deliveryInstructions")}></textarea>
                    {errors.deliveryInstructions && <span className="text-danger d-block">{errors.deliveryInstructions.message}</span>}
									</div>
								</div>

								<button type="submit" className="btn btn-primary w-100 mt-4">
									Place Order
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Checkout
