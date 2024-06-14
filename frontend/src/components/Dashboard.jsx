import React, { useState, useEffect } from 'react';
import PartnerTile from './PartnerTile'; // Ensure correct import

function Dashboard() {
  const [partners, setPartners] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingPartner, setEditingPartner] = useState(null);

  // Load all partners on initial page load
  useEffect(() => {
    fetch('http://localhost:4000', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setPartners(data);
        } else {
          console.error('Expected an array but received:', data);
          setPartners([]);
        }
      })
      .catch(err => console.error(err));
  }, []);

  const handleAddPartner = (partnerData) => {
    console.log("Adding partner:", partnerData); // Debug log
    setPartners((prevPartners) => [...prevPartners, partnerData]);
  };

  const handleDeletePartner = (index) => {
    setPartners((prevPartners) => prevPartners.filter((_, i) => i !== index));
  };

  const handleEditPartner = (index) => {
    setEditingIndex(index);
    setEditingPartner(partners[index]);
  };

  const handleSavePartner = (index) => {
    const updatedPartners = [...partners];
    updatedPartners[index] = editingPartner;
    setPartners(updatedPartners);
    setEditingIndex(null);
    setEditingPartner(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditingPartner({
      ...editingPartner,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div id="main-content" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
      <div id="main-partners-grid">
        <PartnerTile onSubmit={handleAddPartner} />
        <div className="partners-list" style={{ marginTop: '20px' }}>
          {partners.length === 0 ? (
            <div></div>
          ) : (
            partners.map((partner, index) => (
              <div key={index} className="partner-info" style={{ border: partner.isActive ? '2px solid green' : '2px solid red', padding: '10px', marginBottom: '10px' }}>
                {editingIndex === index ? (
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={editingPartner.name}
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={editingPartner.email}
                      onChange={handleChange}
                    />
                    <textarea
                      name="description"
                      placeholder="Description"
                      value={editingPartner.description}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="pictureUrl"
                      placeholder="Picture URL"
                      value={editingPartner.pictureUrl}
                      onChange={handleChange}
                    />
                    <label>
                      Active:
                      <input
                        type="checkbox"
                        name="isActive"
                        checked={editingPartner.isActive}
                        onChange={handleChange}
                      />
                    </label>
                    <button onClick={() => handleSavePartner(index)}>Save</button>
                  </div>
                ) : (
                  <div>
                    {partner.pictureUrl && <img src={partner.pictureUrl} alt={`${partner.name} logo`} style={{ width: '100px', height: '100px' }} />}
                    <h3>{partner.name}</h3>
                    <p>Email: {partner.email}</p>
                    <p>Description: {partner.description}</p>
                    <p>Active: {partner.isActive ? 'Yes' : 'No'}</p>
                    <button onClick={() => handleEditPartner(index)}>Edit</button>
                    <button onClick={() => handleDeletePartner(index)}>Delete</button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
      {partners.length === 0 && <div style={{ textAlign: 'center', marginTop: '20px' }}>No partners to currently display</div>}
    </div>
  );
}

export default Dashboard;
