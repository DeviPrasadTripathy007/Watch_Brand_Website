import { useNavigate } from 'react-router-dom';
import './collectionDetail.css';

function LimitedSeries() {
  const navigate = useNavigate();
  
  const watches = [
    { id: 1, name: 'Limited Centurion', image: '/Watch_Png/Limited Series/Limited1.png' },
    { id: 2, name: 'Limited Phoenix', image: '/Watch_Png/Limited Series/Limited2.png' },
    { id: 3, name: 'Limited Dragon', image: '/Watch_Png/Limited Series/Limited3.png' },
    { id: 4, name: 'Limited Eclipse', image: '/Watch_Png/Limited Series/Limited4.png' },
    { id: 5, name: 'Limited Nebula', image: '/Watch_Png/Limited Series/Limited5.png' },
    { id: 6, name: 'Limited Chronos', image: '/Watch_Png/Limited Series/Limited6.png' },
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
            <div key={watch.id} className="watch-card" onClick={() => navigate(`/product/limited/${watch.id}`)}>
              <div className="watch-image-placeholder">
                <img src={watch.image || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23e0e0e0" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-size="14"%3EWatch Image%3C/text%3E%3C/svg%3E'} alt={watch.name} />
              </div>
              <h3>{watch.name}</h3>
              <button className="add-to-cart-btn" onClick={(e) => e.stopPropagation()}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LimitedSeries;
