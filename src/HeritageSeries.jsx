import { useNavigate } from 'react-router-dom';
import './collectionDetail.css';

function HeritageSeries() {
  const navigate = useNavigate();
  
  const watches = [
    { id: 1, name: 'Heritage Classic', image: '/Watch_Png/Heritage Series/Heritage1.png' },
    { id: 2, name: 'Heritage Vintage', image: '/Watch_Png/Heritage Series/Heritage2.png' },
    { id: 3, name: 'Heritage Retro', image: '/Watch_Png/Heritage Series/Heritage3.png' },
    { id: 4, name: 'Heritage Nostalgia', image: '/Watch_Png/Heritage Series/Heritage4.png' },
    { id: 5, name: 'Heritage Timeless', image: '/Watch_Png/Heritage Series/Heritage5.png' },
    { id: 6, name: 'Heritage Heirloom', image: '/Watch_Png/Heritage Series/Heritage6.png' },
  ];

  return (
    <div>
      <button
        onClick={() => navigate('/collections')}
        style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1000, padding: '10px' }}
      >
        Back to Collections
      </button>
      <div className="collection-detail-container">
        <div className="collection-detail-header">
          <h1>Heritage Edition</h1>
          <p>Vintage inspired designs with modern craftsmanship</p>
        </div>

        <div className="watches-grid">
          {watches.map((watch) => (
            <div key={watch.id} className="watch-card">
              <div className="watch-image-placeholder">
                <img src={watch.image || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23e0e0e0" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-size="14"%3EWatch Image%3C/text%3E%3C/svg%3E'} alt={watch.name} />
              </div>
              <h3>{watch.name}</h3>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeritageSeries;
