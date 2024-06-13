import React, { useState, useEffect } from 'react';
import PartnerTile from './PartnerTile'; // Ensure correct import

/*
  The top-level component containing everything relevant to the dashboard,
  including information on each partner
*/
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

  return (
    <div id="main-content">
      <div id="main-partners-grid">
        <PartnerTile onSubmit={handleAddPartner} />
        <div className="partners-list" style={{ marginTop: '20px' }}>
          {partners.length === 0 ? (
            <div>No partners</div>
          ) : (
            partners.map((partner, index) => (
              <div key={index} className="partner-info">
                <h3>{partner.name}</h3>
                <p>Email: {partner.email}</p>
                <p>Description: {partner.description}</p>
                <p>Active: {partner.isActive ? 'Yes' : 'No'}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
