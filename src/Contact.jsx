function Contact() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-primary mb-2">Baby Bloom</h1>
              <p className="text-center text-muted mb-4">How can we help you?</p>

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

                  <div className="col-md-6">
                    <label htmlFor="issueType" className="form-label">
                      Issue type
                    </label>
                    <select
                      id="issueType"
                      name="issueType"
                      className="form-select"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select an issue type
                      </option>
                      <option value="general-question">General Question</option>
                      <option value="order-issue">Order Issue</option>
                      <option value="product-question">Product Question</option>
                      <option value="delivery-issue">Delivery Issue</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      placeholder="Enter the subject of your message"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Write your message here"
                      required
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-4">
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
