import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const checkoutSchema = z.object({
  fullName: z.string().trim().min(1, 'Full name is required'),
  province: z.string().trim().min(1, 'Province is required'),
  email: z.string().trim().email('Enter a valid email address'),
  phone: z.string().trim().min(1, 'Phone number is required'),
  address: z.string().trim().min(1, 'Delivery address is required'),
  city: z.string().trim().min(1, 'City is required'),
  postalCode: z.string().trim().min(1, 'Postal code is required'),
  discountCode: z.string().optional(),
  paymentMethod: z.string().min(1, 'Payment method is required'),
  orderNotes: z.string().optional()
})

function Checkout() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(checkoutSchema) })

  function onSubmit(data) {
    console.log('form submitted', data)
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
											autoComplete="name" {...register("fullName")} />
                    {errors.fullName && <span className="text-danger d-block">{errors.fullName.message}</span>}
									</div>

									<div className="col-md-6">
										<label htmlFor="province" className="form-label fw-bold">
											Province
										</label>
										<input
											type="text"
											id="province"
											name="province"
											className="form-control"
											placeholder="Enter your province"
											autoComplete="address-level1" {...register("province")} />
                    {errors.province && <span className="text-danger d-block">{errors.province.message}</span>}
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
											autoComplete="email" {...register("email")} />
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
											autoComplete="tel" {...register("phone")} />
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
											autoComplete="address-level2" {...register("city")} />
                    {errors.city && <span className="text-danger d-block">{errors.city.message}</span>}
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
											placeholder="Enter your postal code"
											autoComplete="postal-code" {...register("postalCode")} />
                    {errors.postalCode && <span className="text-danger d-block">{errors.postalCode.message}</span>}
									</div>

									<div className="col-12">
										<label htmlFor="discountCode" className="form-label fw-bold">
											Discount code <span className="text-muted">(optional)</span>
										</label>
										<div className="input-group">
											<input
												type="text"
												id="discountCode"
												name="discountCode"
												className="form-control"
												placeholder="Enter discount code" {...register("discountCode")} />
                    {errors.discountCode && <span className="text-danger d-block">{errors.discountCode.message}</span>}
											<button type="button" className="btn btn-outline-primary">
												Apply Discount
											</button>
										</div>
									</div>

									<div className="col-12">
										<fieldset>
											<legend className="form-label fw-bold mb-2">Payment method</legend>

											<div className="form-check">
												<input
													type="radio"
													id="cashOnDelivery"
													name="paymentMethod"
													value="cash-on-delivery"
													className="form-check-input" {...register("paymentMethod")} />
                    {errors.paymentMethod && <span className="text-danger d-block">{errors.paymentMethod.message}</span>}
												<label htmlFor="cashOnDelivery" className="form-check-label fw-bold">
													Cash on Delivery
												</label>
											</div>

											<div className="form-check">
												<input
													type="radio"
													id="card"
													name="paymentMethod"
													value="card"
													className="form-check-input" {...register("paymentMethod")} />
                    {errors.paymentMethod && <span className="text-danger d-block">{errors.paymentMethod.message}</span>}
												<label htmlFor="card" className="form-check-label fw-bold">
													Card
												</label>
											</div>
										</fieldset>
									</div>

									<div className="col-12">
										<label htmlFor="orderNotes" className="form-label fw-bold">
											Order notes / delivery instructions <span className="text-muted">(optional)</span>
										</label>
										<textarea
											id="orderNotes"
											name="orderNotes"
											className="form-control"
											rows="3"
											placeholder="Add any delivery instructions"
										 {...register("orderNotes")}></textarea>
                    {errors.orderNotes && <span className="text-danger d-block">{errors.orderNotes.message}</span>}
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
