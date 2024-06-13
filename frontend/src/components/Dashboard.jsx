import React, { useState, useEffect } from 'react';
import PartnerTile from './PartnerTile'; // Ensure correct import

function Dashboard() {
  const [partners, setPartners] = useState([]);

  // Load all partners on initial page load
  useEffect(() => {
    fetch('http://localhost:4000', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then(data => setPartners(data))
      .catch(err => console.error(err));
  }, []);

  const handleAddPartner = (partnerData) => {
    setPartners((prevPartners) => [...prevPartners, partnerData]);
  };

  const handleDeletePartner = (index) => {
    setPartners((prevPartners) => prevPartners.filter((_, i) => i !== index));
  };

  return (
    <div id="main-content">
      <div id="main-partners-grid">
        <PartnerTile onSubmit={handleAddPartner} />
        <div className="partners-list" style={{ marginTop: '20px' }}>
          {partners.length === 0 ? (
            <div>No partners</div>
          ) : (
            partners.map((partner, index) => (
              <div key={index} className="partner-info" style={{ border: partner.isActive ? '2px solid green' : '2px solid red', padding: '10px', marginBottom: '10px' }}>
                <h3>{partner.name}</h3>
                <p>Email: {partner.email}</p>
                <p>Description: {partner.description}</p>
                <p>Active: {partner.isActive ? 'Yes' : 'No'}</p>
                <button onClick={() => handleDeletePartner(index)}>Delete</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
