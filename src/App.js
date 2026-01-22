import { useState } from 'react';
import './App.css';
import RegistrationForm from './register.jsx';

function App() {
  const [showRegister, setShowRegister] = useState(false);

  if (showRegister) {
    return (
      <div>
        <button
          onClick={() => setShowRegister(false)}
          style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1000, padding: '10px' }}
        >
          Back
        </button>
        <RegistrationForm />
      </div>
    );
  }

  return (
    <div className="App">
      <header>
        <div className="nav">
          <div className="logo">CHRONOS</div>

          <nav className="nav-links">
            <a href="#">PRODUCTS</a>
            <a href="#">STORE</a>
            <a href="#">ABOUT</a>
            <a href="#">SUPPORT</a>
          </nav>

          <div className="nav-icons">
            🔍 <span onClick={() => setShowRegister(true)} style={{ cursor: 'pointer' }}>👤</span> 🛒
          </div>
        </div>
      </header>

      <section className="hero" style={{ backgroundColor: 'black' }}>
        <div className="hero-content">
          <small>THE SIGNATURE COLLECTION</small>
          <h1>Timeless Precision</h1>
          <p>
            CHRONOS represents the pinnacle of watchmaking craftsmanship,
            merging traditional techniques with modern aesthetics.
          </p>
          <a href="#" className="btn">DISCOVER COLLECTION</a>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Our Collections</h2>
          <a href="#">View All →</a>
        </div>

        <div className="collection-grid">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1518544801976-3e159e50e5bb" alt="Classic Series" />
            <div className="card-content">
              <h3>Classic Series</h3>
              <p>Minimal elegance crafted for everyday luxury.</p>
            </div>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf" alt="Explorer Series" />
            <div className="card-content">
              <h3>Explorer Series</h3>
              <p>Engineered for adventure and precision.</p>
            </div>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1519744792095-2f2205e87b6f" alt="Signature Series" />
            <div className="card-content">
              <h3>Signature Series</h3>
              <p>Our most iconic timepieces.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div>
            <h4>Products</h4>
            <ul>
              <li>Collections</li>
              <li>New Arrivals</li>
              <li>Compare</li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li>FAQs</li>
              <li>Service Centers</li>
              <li>Warranty</li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>Our Story</li>
              <li>Sustainability</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>Get the latest news and updates.</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 CHRONOS WATCHES. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
