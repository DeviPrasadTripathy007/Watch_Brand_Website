import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Star } from 'lucide-react';
import { productsData } from './data/productsData';
import './ProductDetail.css';

function ProductDetail() {
  const { series, productId } = useParams();
  const navigate = useNavigate();

  // Get all products and current product
  const seriesLower = series?.toLowerCase();
  const seriesProducts = productsData[seriesLower] || [];
  
  const product = seriesProducts.find(p => p.id === parseInt(productId));
  
  // Get similar products (same series, excluding current product)
  const similarProducts = seriesProducts.filter(p => p.id !== parseInt(productId));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/collections')}>Back to Collections</button>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <button 
        className="back-btn"
        onClick={() => navigate(`/collections/${series?.toLowerCase()}`)}
      >
        <ArrowLeft size={20} />
        Back to {product.series}
      </button>

      <div className="product-detail-wrapper">
        {/* Left Section - Images & Similar Products */}
        <div className="product-image-section">
          <div className="main-image-container">
            <img src={product.image} alt={product.name} className="main-image" />
          </div>
          <div className="image-info">
            <p className="series-badge">{product.series} Series</p>
            {product.limited && (
              <div className="limited-badge">Limited: {product.limited}</div>
            )}
          </div>

          {/* Similar Products Section */}
          {similarProducts.length > 0 && (
            <div className="similar-products-section">
              <h3>Similar Products</h3>
              <div className="similar-products-grid">
                {similarProducts.slice(0, 4).map((similarProduct) => (
                  <div 
                    key={similarProduct.id} 
                    className="similar-product-card"
                    onClick={() => navigate(`/product/${series}/${similarProduct.id}`)}
                  >
                    <div className="similar-product-image">
                      <img src={similarProduct.image} alt={similarProduct.name} />
                    </div>
                    <h4>{similarProduct.name}</h4>
                    <p className="similar-product-price">{similarProduct.price}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Section - Details */}
        <div className="product-details-section">
          <h1 className="product-name">{product.name}</h1>
          
          <div className="rating-section">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                  fill={i < Math.floor(product.rating) ? '#FFD700' : 'none'}
                />
              ))}
              <span className="rating-value">{product.rating}</span>
            </div>
            <span className="review-count">({product.reviews} reviews)</span>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="price-section">
            <span className="product-price">{product.price}</span>
            {product.inStock ? (
              <span className="in-stock">In Stock</span>
            ) : (
              <span className="out-of-stock">Out of Stock</span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button className="add-to-cart-btn-detail" disabled={!product.inStock}>
            <ShoppingCart size={20} />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>

          {/* Specifications */}
          <div className="specifications-section">
            <h2>Specifications</h2>
            <div className="specs-grid">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <span className="spec-label">{key}</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Warranty Info */}
          <div className="warranty-section">
            <h3>Warranty & Support</h3>
            <p>✓ {product.specifications['Warranty']} Manufacturer Warranty</p>
            <p>✓ Free international shipping on orders above $500</p>
            <p>✓ 30-day money-back guarantee</p>
            <p>✓ Lifetime technical support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
