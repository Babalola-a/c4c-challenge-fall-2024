import React, { useState, useEffect } from 'react';
import InputOne from './fields/inputOne/inputOne'; 

//component that handles when a user inputs a new partner by pressing the submit button 
const PartnerTile = ({ onSubmit }) => {
  //variables to store the values that are inputted into each of the form components 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [pictureUrl, setPictureUrl] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  //useeffect hook used to validate if any of the fields change and calls validate form 
  useEffect(() => {
    validateForm();
  }, [name, email, description, pictureUrl]);
  //checks that all required fields are filled out and sets isformvalid to the result
  const validateForm = () => {
    const isValid = name !== '' && email !== '' && description !== '' && pictureUrl !== '';
    setIsFormValid(isValid);
  };

  //handles form submission 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      //if the form i svalid meaning that all fields are filled call onSubmit function
      const partnerData = {
        name,
        email,
        description,
        isActive,
        pictureUrl,
      };
      console.log("Submitting partner data:", partnerData); 
      //resets form after submission 
      onSubmit(partnerData);
      setName('');
      setEmail('');
      setDescription('');
      setIsActive(false);
      setPictureUrl('');
    }
  };
//all fields of the fields of the form
  return (
    <div className="partner-info-container">
      <img className="partner-thumbnail" src='favicon.ico' alt="Partner Thumbnail" />
      <span className="header-text">Add in partner info down below! Once information is added, green indicates active while red indicates inactive</span>
      <hr />
      <form onSubmit={handleSubmit}>
        <InputOne heading="Partner name" placeholder="Enter partner name" value={name} onChange={(e) => setName(e.target.value)} />
        <InputOne heading="Partner email" placeholder="Enter partner email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputOne heading="Partner description" placeholder="Enter partner description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <InputOne heading="Logo URL" placeholder="Enter partner logo URL" value={pictureUrl} onChange={(e) => setPictureUrl(e.target.value)} />
        <div className="input-field checkbox-field">
          <label>
            <h3>Active</h3>
            <input type="checkbox" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />
          </label>
        </div>
        <button type="submit" disabled={!isFormValid}>Submit</button>
      </form>
    </div>
  );
}

export default PartnerTile;
