import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const signupSchema = z.object({
  fullName: z.string().trim().min(1, 'Full name is required'),
  email: z.string().trim().email('Enter a valid email address'),
  phone: z.string().trim().min(1, 'Phone number is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string().min(8, 'Confirm password must be at least 8 characters'),
  terms: z.literal(true, { errorMap: () => ({ message: 'You must agree to the Terms & Conditions' }) })
}).refine((data) => data.password === data.confirmPassword, { path: ['confirmPassword'], message: 'Passwords must match' })

import { Link } from 'react-router-dom'
import { Navbar } from './App.jsx'

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(signupSchema) })

  function onSubmit(data) {
    console.log('form submitted', data)
  }
	return (
		<>
			<Navbar />
			<div className="container py-5">
			<div className="row justify-content-center">
				<div className="col-12 col-sm-10 col-md-8 col-lg-6">
					<div className="card border-0 shadow-sm">
						<div className="card-body p-4 p-md-5">
							<h1 className="h3 text-center text-primary mb-2">Baby Bloom</h1>
							<p className="text-center text-muted mb-4">Create your account</p>

							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="mb-3">
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

								<div className="mb-3">
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

								<div className="mb-3">
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

								<div className="mb-3">
									<label htmlFor="password" className="form-label fw-bold">
										Password
									</label>
									<input
										type="password"
										id="password"
										name="password"
										className="form-control"
										placeholder="Create a password"
										autoComplete="new-password"
										minLength="8" {...register("password")} />
                    {errors.password && <span className="text-danger d-block">{errors.password.message}</span>}
								</div>

								<div className="mb-3">
									<label htmlFor="confirmPassword" className="form-label fw-bold">
										Confirm password
									</label>
									<input
										type="password"
										id="confirmPassword"
										name="confirmPassword"
										className="form-control"
										placeholder="Confirm your password"
										autoComplete="new-password"
										minLength="8" {...register("confirmPassword")} />
                    {errors.confirmPassword && <span className="text-danger d-block">{errors.confirmPassword.message}</span>}
								</div>

								<div className="form-check mb-4">
									<input
										type="checkbox"
										id="terms"
										name="terms"
										className="form-check-input" {...register("terms")} />
                    {errors.terms && <span className="text-danger d-block">{errors.terms.message}</span>}
									<label htmlFor="terms" className="form-check-label fw-bold">
										I agree to the Terms &amp; Conditions
									</label>
								</div>

								<button type="submit" className="btn btn-primary w-100">
									Create Account
								</button>

								<p className="text-center text-muted small mt-4 mb-0">
									Already have an account?{' '}
									<Link to="#login" className="text-decoration-none">
										Login
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
			</div>
		</>
	)
}

export default Signup
