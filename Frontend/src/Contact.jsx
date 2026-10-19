import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const contactSchema = z.object({
  fullName: z.string().trim().min(1, 'Full name is required'),
  email: z.string().trim().email('Enter a valid email address'),
  phone: z.string().trim().min(1, 'Phone number is required'),
  issueType: z.string().min(1, 'Issue type is required'),
  subject: z.string().trim().min(1, 'Subject is required'),
  message: z.string().trim().min(1, 'Message is required')
})

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(contactSchema) })

  function onSubmit(data) {
    console.log('form submitted', data)
  }
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-primary mb-2">Baby Bloom</h1>
              <p className="text-center text-muted mb-4">How can we help you?</p>

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

                  <div className="col-md-6">
                    <label htmlFor="issueType" className="form-label fw-bold">
                      Issue type
                    </label>
                    <select
                      id="issueType"
                      name="issueType"
                      className="form-select"
                      defaultValue=""
                     {...register("issueType")}>
                      <option value="" disabled>
                        Select an issue type
                      </option>
                      <option value="general-question">General Question</option>
                      <option value="order-issue">Order Issue</option>
                      <option value="product-question">Product Question</option>
                      <option value="delivery-issue">Delivery Issue</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.issueType && <span className="text-danger d-block">{errors.issueType.message}</span>}
                  </div>

                  <div className="col-12">
                    <label htmlFor="subject" className="form-label fw-bold">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      placeholder="Enter the subject of your message" {...register("subject")} />
                    {errors.subject && <span className="text-danger d-block">{errors.subject.message}</span>}
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label fw-bold">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Write your message here"
                     {...register("message")}></textarea>
                    {errors.message && <span className="text-danger d-block">{errors.message.message}</span>}
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
