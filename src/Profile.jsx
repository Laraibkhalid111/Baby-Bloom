function Profile() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-9 col-lg-7">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-primary mb-2">Baby Bloom</h1>
              <p className="text-center text-muted mb-4">Update your profile</p>

              <form>
                <div className="row g-3">
                  <div className="col-12">
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
                      Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      className="form-control"
                      rows="3"
                      placeholder="Enter your address"
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
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-4">
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
