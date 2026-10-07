import image from './assets/image.png'
import p1 from './assets/p1.png'
import p2 from './assets/p2.png'
import p3 from './assets/p3.png'
import p4 from './assets/p4.png'
import bundle from './assets/bundle.png'
import Brush from './assets/Brush.png'
import bloom from './assets/bloom.png'
import { Link } from 'react-router-dom'
import Navbar from './Navbar.jsx'


 function App () {
    return (
        <>
        <Navbar />


<div className="mx-3 my-4">
  <img src={bloom} className="d-block w-100" alt="Baby Bloom hero" />
</div>
  <div className="container my-5">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">

    {/* Product 1 */}
    <div className="col">
      <div className="card h-100">
        <img
          src={p1}
          className="card-img-top"
          alt="Baby Shampoo"
          style={{ height: '280px', objectFit: 'cover' }}
        />

        <div className="card-body">
          <h5 className="card-title">Baby Shampoo</h5>
          <p className="card-text">
            Gentle shampoo for your baby's delicate hair and scalp.
          </p>
          <button className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    {/* Product 2 */}
    <div className="col">
      <div className="card h-100">
        <img
          src={p2}
          className="card-img-top"
          alt="Baby Lotion"
          style={{ height: '280px', objectFit: 'cover' }}
        />

        <div className="card-body">
          <h5 className="card-title">Shower Gel</h5>
          <p className="card-text">
            Soft and gentle care for your baby's delicate skin.
          </p>
          <button className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    {/* Product 3 */}
    <div className="col">
      <div className="card h-100">
        <img
          src={p3}
          className="card-img-top"
          alt="Baby Oil"
          style={{ height: '280px', objectFit: 'cover' }}
        />

        <div className="card-body">
          <h5 className="card-title">Baby lotion</h5>
          <p className="card-text">
            Nourishing oil for everyday baby care.
          </p>
          <button className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    {/* Product 4 */}
    <div className="col">
      <div className="card h-100">
        <img
          src={p4}
          className="card-img-top"
          alt="Baby Powder"
          style={{ height: '280px', objectFit: 'cover' }}
        />

        <div className="card-body">
          <h5 className="card-title">Baby oil</h5>
          <p className="card-text">
            Gentle powder for comfortable everyday baby care.
          </p>
          <button className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>

  </div>
</div>
 <div className="container my-5">
  <div className="row g-4">

    {/* Bundle Pack - Wider */}
    <div className="col-lg-8">
      <div className="card h-100">
        <img
          src={bundle}
          className="card-img-top"
          alt="Baby Care Bundle"
          style={{ height: '320px', objectFit: 'cover' }}
        />

        <div className="card-body">
          <h3 className="card-title">Baby Care Bundle</h3>

          <p className="card-text">
            Everything your little one needs in one complete care bundle.
          </p>

          <button className="btn btn-primary">
            Shop Bundle
          </button>
        </div>
      </div>
    </div>

    {/* Smaller Card */}
    <div className="col-lg-4">
      <div className="card h-100">
        <img
          src={Brush}
          className="card-img-top"
          alt="Baby Gift Pack"
          style={{ height: '320px', objectFit: 'cover' }}
        />

        <div className="card-body">
          <h4 className="card-title">Bloom Brush</h4>

          <p className="card-text">
            A sweet little gift for newborns and new parents.
          </p>

          <button className="btn btn-primary">
            Explore
          </button>
        </div>
      </div>
    </div>

  </div>
</div>


<footer className="bg-light text-white mt-5">
  <div className="container py-5">
    <div className="row">

      {/* Brand */}
      <div className="col-lg-4 col-md-6 mb-4">
        <h4 className="text-primary">Baby Bloom</h4>
        <p className="text-secondary">
          Gentle care for your little ones. Discover products
          made for happy, healthy beginnings.
        </p>
      </div>

      {/* Quick Links */}
      <div className="text-primary col-lg-2 col-md-6 mb-4">
        <h5>Quick Links</h5>

        <ul className="list-unstyled">
          <li className="mb-2">
            <Link to="#" className="text-dark text-decoration-none">
              Home
            </Link>
          </li>

          <li className="mb-2">
            <Link to="#" className="text-dark text-decoration-none">
              Products
            </Link>
          </li>

          <li className="mb-2">
            <Link to="#" className="text-dark text-decoration-none">
              Baby Tips
            </Link>
          </li>

          <li>
            <Link to="#" className="text-dark text-decoration-none">
              About Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Customer Care */}
      <div className="text-primary col-lg-3 col-md-6 mb-4">
        <h5>Customer Care</h5>

        <ul className="list-unstyled text-dark">
          <li className="mb-2">Contact Us</li>
          <li className="mb-2">Shipping & Delivery</li>
          <li className="mb-2">Returns & Exchanges</li>
          <li>FAQs</li>
        </ul>
      </div>

      {/* Contact */}
      <div className=" text-primary col-lg-3 col-md-6 mb-4">
        <h5>Get in Touch</h5>

        <p className="mb-2 text-dark">Email: hello@babybloom.com</p>
        

      </div>

    </div>

    <hr className="border-secondary" />

    <div className="text-center">
      <p className="mb-0 text-secondary">
        © 2026 Baby Bloom. All rights reserved.
      </p>
    </div>

  </div>
</footer>
        </>
    );
 }
  export default App;