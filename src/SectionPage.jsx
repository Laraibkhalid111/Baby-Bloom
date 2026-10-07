import { Link } from 'react-router-dom'

function SectionPage({ title, options, form }) {
  return (
    <>
      <div className="container py-4">
        <div className="navbar-nav flex-row flex-wrap gap-3 border-bottom pb-3">
          {options.map((option) => (
            <Link className="nav-link text-primary" to={option.path} key={option.path}>
              {option.label}
            </Link>
          ))}
        </div>
        <h1 className="text-primary mt-4">{title}</h1>
        <div>{form}</div>
      </div>
    </>
  )
}

export default SectionPage
