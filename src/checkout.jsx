function Checkout() {
	return (
		<div className="container py-5">
			<div className="row justify-content-center">
				<div className="col-12 col-lg-8">
					<div className="card border-0 shadow-sm">
						<div className="card-body p-4 p-md-5">
							<h1 className="h3 text-center text-primary mb-2">Baby Bloom Checkout</h1>
							<p className="text-center text-muted mb-4">Enter your details to place your order</p>

							<form>
								<div className="row g-3">
									<div className="col-md-6">
										<label htmlFor="fullName" className="form-label">
											Full name
										</label>
										<input
											type="text"
											id="fullName"
											name="fullName"
											className="form-control"
											placeholder="Enter your full name"
											autoComplete="name"
											required
										/>
									</div>

									<div className="col-md-6">
										<label htmlFor="province" className="form-label">
											Province
										</label>
										<input
											type="text"
											id="province"
											name="province"
											className="form-control"
											placeholder="Enter your province"
											autoComplete="address-level1"
											required
										/>
									</div>

									<div className="col-md-6">
										<label htmlFor="email" className="form-label">
											Email address
										</label>
										<input
											type="email"
											id="email"
											name="email"
											className="form-control"
											placeholder="Enter your email"
											autoComplete="email"
											required
										/>
									</div>

									<div className="col-md-6">
										<label htmlFor="phone" className="form-label">
											Phone number
										</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											className="form-control"
											placeholder="Enter your phone number"
											autoComplete="tel"
											required
										/>
									</div>

									<div className="col-12">
										<label htmlFor="address" className="form-label">
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
										></textarea>
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
											placeholder="Enter your city"
											autoComplete="address-level2"
											required
										/>
									</div>

									<div className="col-md-6">
										<label htmlFor="postalCode" className="form-label">
											Postal code
										</label>
										<input
											type="text"
											id="postalCode"
											name="postalCode"
											className="form-control"
											placeholder="Enter your postal code"
											autoComplete="postal-code"
											required
										/>
									</div>

									<div className="col-12">
										<label htmlFor="discountCode" className="form-label">
											Discount code <span className="text-muted">(optional)</span>
										</label>
										<div className="input-group">
											<input
												type="text"
												id="discountCode"
												name="discountCode"
												className="form-control"
												placeholder="Enter discount code"
											/>
											<button type="button" className="btn btn-outline-primary">
												Apply Discount
											</button>
										</div>
									</div>

									<div className="col-12">
										<fieldset>
											<legend className="form-label mb-2">Payment method</legend>

											<div className="form-check">
												<input
													type="radio"
													id="cashOnDelivery"
													name="paymentMethod"
													value="cash-on-delivery"
													className="form-check-input"
													required
												/>
												<label htmlFor="cashOnDelivery" className="form-check-label">
													Cash on Delivery
												</label>
											</div>

											<div className="form-check">
												<input
													type="radio"
													id="card"
													name="paymentMethod"
													value="card"
													className="form-check-input"
												/>
												<label htmlFor="card" className="form-check-label">
													Card
												</label>
											</div>
										</fieldset>
									</div>

									<div className="col-12">
										<label htmlFor="orderNotes" className="form-label">
											Order notes / delivery instructions <span className="text-muted">(optional)</span>
										</label>
										<textarea
											id="orderNotes"
											name="orderNotes"
											className="form-control"
											rows="3"
											placeholder="Add any delivery instructions"
										></textarea>
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
