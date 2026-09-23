import image from './assets/image.png'
import p1 from './assets/p1.png'
import p2 from './assets/p2.png'
import p3 from './assets/p3.png'
import p4 from './assets/p4.png'
import bundle from './assets/bundle.png'
import Brush from './assets/Brush.png'
import bloom from './assets/bloom.png'
import Hero from './assets/Hero.png'
 function App () {
    return (
        <>
        <nav class ="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand text-primary" href="#" >Baby Bloom</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Baby Tips</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About us</a>
        </li>
      </ul>
      <span class="navbar-text">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button"> WHERE TO BUY </button>
  
</div>
      </span>
    </div>
  </div>
</nav>
{/* <img
  src={bloom}
  class="img-fluid d-block"
  alt="Baby Bloom product collection"
  style={{ width: '100%', height: '75vh', objectFit: 'cover', objectPosition: 'center' }}
></img> */}

<div className="mx-3 my-4">
  <div id="carouselExampleIndicators" className="carousel slide">

    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src= {bloom} className="d-block w-100" alt="..." />
      </div>

      <div className="carousel-item">
        <img src={Hero} className="d-block w-100" alt="..." />
      </div>

      
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>

    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>

  </div>
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
            <a href="#" className="text-dark text-decoration-none">
              Home
            </a>
          </li>

          <li className="mb-2">
            <a href="#" className="text-dark text-decoration-none">
              Products
            </a>
          </li>

          <li className="mb-2">
            <a href="#" className="text-dark text-decoration-none">
              Baby Tips
            </a>
          </li>

          <li>
            <a href="#" className="text-dark text-decoration-none">
              About Us
            </a>
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