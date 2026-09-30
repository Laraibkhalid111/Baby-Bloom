function Review() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-9 col-lg-7">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-primary mb-2">Baby Bloom</h1>
              <p className="text-center text-muted mb-4">Share your product experience</p>

              <form>
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">
                    Product name
                  </label>
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    className="form-control"
                    placeholder="Enter the product name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="customerName" className="form-label">
                    Customer name
                  </label>
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    className="form-control"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="rating" className="form-label">
                    Rating
                  </label>
                  <select id="rating" name="rating" className="form-select" required defaultValue="">
                    <option value="" disabled>
                      Choose a star rating
                    </option>
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="feedback" className="form-label">
                    Review / feedback
                  </label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    className="form-control"
                    rows="5"
                    placeholder="Tell us about your experience with this product"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
