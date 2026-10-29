
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'

const reviewSchema = z.object({
  productName: z.enum(["baby-shampoo", "baby-lotion", "baby-oil", "baby-powder"], { error: 'Product selection is required' }),
  rating: z.enum(["1", "2", "3", "4", "5"], { error: 'Rating is required' }),
  feedback: z.string().trim().min(1, 'Review is required')
})

function Review() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(reviewSchema)
  })

  async function onSubmit(data) {
     await submitReview(data)
   }
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-9 col-lg-7">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-primary mb-2">Baby Bloom</h1>
              <p className="text-center text-muted mb-4">Share your product experience</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label fw-bold">
                    Product name
                  </label>
                  <select
                    id="productName"
                    name="productName"
                    className="form-select"
                    defaultValue=""
                    required
                    {...register("productName")}>
                    <option value="" disabled>Select a product</option>
                    <option value="baby-shampoo">Baby Shampoo</option>
                    <option value="baby-lotion">Baby Lotion</option>
                    <option value="baby-oil">Baby Oil</option>
                    <option value="baby-powder">Baby Powder</option>
                  </select>
                  {errors.productName && <span className="text-danger d-block">{errors.productName.message}</span>}
                </div>

                <div className="mb-3">
                  <label htmlFor="rating" className="form-label fw-bold">
                    Rating (1–5 Stars)
                  </label>
                  <select
                    id="rating"
                    name="rating"
                    className="form-select"
                    defaultValue=""
                    required
                    {...register("rating")}>
                    <option value="" disabled>Choose a star rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  {errors.rating && <span className="text-danger d-block">{errors.rating.message}</span>}
                </div>

                <div className="mb-4">
                  <label htmlFor="feedback" className="form-label fw-bold">
                    Write your review
                  </label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    className="form-control"
                    rows="5"
                    placeholder="Tell us about your experience with this product"
                    required
                    {...register("feedback")}></textarea>
                  {errors.feedback && <span className="text-danger d-block">{errors.feedback.message}</span>}
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
