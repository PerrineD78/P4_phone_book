import { useContext, useState } from 'react';
import { ContactContext } from '../../ContactContext.jsx'

import './ContactData.css';

function ContactData({id, firstname, lastname, phoneNumber}) {

  const { updateContact, deleteContact } = useContext(ContactContext);

  // gere l'affichage de la modal de modification
  const [isEditing, setIsEditing] = useState(false);

  // gère les données modifiées
  const [updatedContact, setUpdatedContact] = useState({ firstname, lastname, phoneNumber });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedContact({
      ...updatedContact,
      [name]: value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(id, updatedContact);
    setIsEditing(false)
  };

  return (
    <div className="modal_editing_global">
        {/* Modal d'édition */}
        {isEditing ? (
          <div className="modal_editing">
            <form>
              <label htmlFor="firstname">Firstname :</label>
              <input type="text" id="firstname" name="firstname" value={updatedContact.firstname} onChange={handleChange} required />
            
              <label htmlFor="lastname">Lastname :</label>
              <input type="text" id="lastname" name="lastname" value={updatedContact.lastname} onChange={handleChange} required />
            
              <label htmlFor="phoneNumber">Phone Number :</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" size="10" value={updatedContact.phoneNumber} onChange={handleChange} required />
            
              <button type="submit" onClick={handleSubmit}>Valider</button>
              <button type="button" onClick={() => setIsEditing(false)}>Fermer</button>
            </form>
          </div>
          
        ) : 
        <div className="oneContact">
          <h3>{firstname}</h3>    
          <h3>{lastname}</h3>    
          <p>{phoneNumber}</p>
          <button onClick={() => setIsEditing(true)}>Modifier</button>
          <br/>
          <button onClick={() => deleteContact(id)}>Supprimer</button>
        </div>
        }
    </div>
  )
}

export default ContactData;