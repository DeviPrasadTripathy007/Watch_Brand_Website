import { useNavigate } from 'react-router-dom';
import './collection.css';

function CollectionPage() {
  const navigate = useNavigate();
  const collections = [
    {
      id: 1,
      name: 'Classic Series',
      image: 'https://images.unsplash.com/photo-1518544801976-3e159e50e5bb',
      description: 'Minimal elegance crafted for everyday luxury.',
      price: '$2,499'
    },
    {
      id: 2,
      name: 'Explorer Series',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
      description: 'Engineered for adventure and precision.',
      price: '$3,299'
    },
    {
      id: 3,
      name: 'Signature Series',
      image: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f',
      description: 'Our most iconic timepieces.',
      price: '$4,499'
    },
    {
      id: 4,
      name: 'Heritage Edition',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49',
      description: 'Vintage inspired designs with modern craftsmanship.',
      price: '$2,899'
    },
    {
      id: 5,
      name: 'Luxury Collection',
      image: 'https://images.unsplash.com/photo-1459680559556-e37a7f3d7a0b',
      description: 'Premium materials and exclusive designs.',
      price: '$5,999'
    },
    {
      id: 6,
      name: 'Limited Edition',
      image: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a',
      description: 'Rare and exclusive pieces for collectors.',
      price: '$7,299'
    },
  ];

  return (
    <div>
      <button
        onClick={() => navigate('/')}
        style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1000, padding: '10px' }}
      >
        Back
      </button>
      <div className="collection-page-container">
        <div className="collection-header">
          <h1>Our Collections</h1>
          <p>Discover the finest timepieces from CHRONOS</p>
        </div>

        <div className="collection-items">
          {collections.map((item) => (
            <div key={item.id} className="collection-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="item-footer">
                  <span className="price">{item.price}</span>
                  <button className="view-btn">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CollectionPage;
