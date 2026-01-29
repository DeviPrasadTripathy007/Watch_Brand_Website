import { useState } from 'react';
import './App.css';
import RegistrationForm from './register.jsx';
import LoginForm from './login.jsx';
import CollectionPage from './collection.jsx';
import SlidingDashboard from './SlidingDashboard.jsx';

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCollection, setShowCollection] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);

  if (showRegister) {
    return (
      <div>
        <button
          onClick={() => setShowRegister(false)}
          style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1000, padding: '10px' }}
        >
          Back
        </button>
        <RegistrationForm setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
      </div>
    );
  }

  if (showLogin) {
    return (
      <div>
        <button
          onClick={() => setShowLogin(false)}
          style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1000, padding: '10px' }}
        >
          Back
        </button>
        <LoginForm setShowRegister={setShowRegister} setShowLogin={setShowLogin} />
      </div>
    );
  }

  if (showCollection) {
    return (
      <div>
        <button
          onClick={() => setShowCollection(false)}
          style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1000, padding: '10px' }}
        >
          Back
        </button>
        <CollectionPage />
      </div>
    );
  }

  return (
    <div className="App">
      <SlidingDashboard 
        isOpen={dashboardOpen} 
        toggleDashboard={() => setDashboardOpen(!dashboardOpen)}
        onCollectionSelect={(collection) => {
          console.log('Selected collection:', collection);
          setShowCollection(true);
        }}
      />

      <header>
        <div className="nav">
          <button 
            className={`hamburger-btn ${dashboardOpen ? 'active' : ''}`}
            onClick={() => setDashboardOpen(!dashboardOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

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

      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline preload="auto">
          <source src="/Luxury_Watch_Commercial_Video_Creation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <small>THE SIGNATURE COLLECTION</small>
          <h1>Timeless Precision</h1>
          <p>
            CHRONOS represents the pinnacle of watchmaking craftsmanship,
            merging traditional techniques with modern aesthetics.
          </p>
          <button onClick={() => setShowCollection(true)} className="btn">DISCOVER COLLECTION</button>
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
