import { Link } from 'react-router-dom'
import Navbar from './Navbar.jsx'

function Login() {
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

							<form>
								<div className="mb-3">
									<label htmlFor="email" className="form-label">
										Email address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="form-control"
										placeholder="Enter your email"
										required
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="password" className="form-label">
										Password
									</label>
									<input
										type="password"
										id="password"
										name="password"
										className="form-control"
										placeholder="Enter your password"
										required
									/>
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
