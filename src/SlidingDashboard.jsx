function SlidingDashboard({ isOpen, toggleDashboard, onCollectionSelect }) {
  const collectionTypes = [
    { id: 1, name: 'Classic Series', icon: '⌚' },
    { id: 2, name: 'Explorer Series', icon: '🧭' },
    { id: 3, name: 'Signature Series', icon: '👑' },
    { id: 4, name: 'Heritage Edition', icon: '📜' },
    { id: 5, name: 'Luxury Collection', icon: '✨' },
    { id: 6, name: 'Limited Edition', icon: '🎯' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="dashboard-overlay" onClick={toggleDashboard}></div>
      )}

      {/* Sliding Dashboard */}
      <div className={`sliding-dashboard ${isOpen ? 'open' : ''}`}>
        <div className="dashboard-header">
          <h2>Collections</h2>
          <button className="close-btn" onClick={toggleDashboard}>✕</button>
        </div>

        <nav className="dashboard-nav">
          {collectionTypes.map((collection) => (
            <button
              key={collection.id}
              className="dashboard-item"
              onClick={() => {
                onCollectionSelect(collection);
                toggleDashboard();
              }}
            >
              <span className="collection-icon">{collection.icon}</span>
              <span className="collection-name">{collection.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}

export default SlidingDashboard;
