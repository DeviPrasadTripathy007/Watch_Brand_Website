import { useNavigate } from 'react-router-dom';
import './collectionDetail.css';

function LimitedSeries() {
  const navigate = useNavigate();
  
  const watches = [
    { id: 1, name: 'Limited Rare', image: '' },
    { id: 2, name: 'Limited Exclusive', image: '' },
    { id: 3, name: 'Limited Collector', image: '' },
    { id: 4, name: 'Limited Edition', image: '' },
    { id: 5, name: 'Limited Premium', image: '' },
    { id: 6, name: 'Limited Heritage', image: '' },
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
          <h1>Limited Edition</h1>
          <p>Rare and exclusive pieces for collectors</p>
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

export default LimitedSeries;
