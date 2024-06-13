import React, { useState } from 'react';
import InputOne from './fields/inputOne/inputOne'; // Ensure correct import path

const PartnerTile = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [pictureUrl, setPictureUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const partnerData = {
      name,
      email,
      description,
      isActive,
      pictureUrl,
    };
    console.log("Submitting partner data:", partnerData); // Debug log
    onSubmit(partnerData);
    setName('');
    setEmail('');
    setDescription('');
    setIsActive(false);
    setPictureUrl('');
  };

  return (
    <div className="partner-info-container">
      <img className="partner-thumbnail" src='favicon.ico' alt="Partner Thumbnail" />
      <hr />
      <form onSubmit={handleSubmit}>
        <InputOne heading="Name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        <InputOne heading="Email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputOne heading="Description" placeholder="Enter your description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <InputOne heading="Picture URL" placeholder="Enter picture URL" value={pictureUrl} onChange={(e) => setPictureUrl(e.target.value)} />
        <div className="input-field">
          <label>
            <h3>Active</h3>
            <input type="checkbox" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PartnerTile;
