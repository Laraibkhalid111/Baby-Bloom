import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const loginSchema = z.object({
  email: z.string().trim().email('Enter a valid email address'),
  password: z.string().min(1, 'Password is required')
})

import { Link } from 'react-router-dom'
import { Navbar } from './App.jsx'

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(loginSchema) })

  function onSubmit(data) {
    console.log('form submitted', data)
  }
	return (
		<>
			<Navbar />
			<div className="container py-5">
			<div className="row justify-content-center">
				<div className="col-12 col-sm-10 col-md-7 col-lg-5">
					<div className="card border-0 shadow-sm">
						<div className="card-body p-4 p-md-5">
							<h1 className="h3 text-center text-primary mb-2">Baby Bloom</h1>
							<p className="text-center text-muted mb-4">Welcome back</p>

							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="mb-3">
									<label htmlFor="email" className="form-label fw-bold">
										Email address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="form-control"
										placeholder="Enter your email" {...register("email")} />
                    {errors.email && <span className="text-danger d-block">{errors.email.message}</span>}
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
										placeholder="Enter your password" {...register("password")} />
                    {errors.password && <span className="text-danger d-block">{errors.password.message}</span>}
								</div>

								<div className="text-end mb-4">
									<Link to="#forgot-password" className="small text-decoration-none">
										Forgot Password?
									</Link>
								</div>

								<button type="submit" className="btn btn-primary w-100">
									Login
								</button>

								<p className="text-center text-muted small mt-4 mb-0">
									Don&apos;t have an account?{' '}
									<Link to="#sign-up" className="text-decoration-none">
										Sign up
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

export default Login
