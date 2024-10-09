import { useContext, useState } from 'react';
import { ContactContext } from '../../ContactContext.jsx';

import './AddContact.css';

function AddContact({ onClose }) {

  // initialisation de l'état pour gérer la valeur de l'input
  const [formData, setFormData] = useState({ firstname:"", lastname:"", phoneNumber:""})
  const { postContact } = useContext(ContactContext)

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postContact(formData)
    setFormData({ firstname:"", lastname:"", phoneNumber:""})
  }

  return (
    <div className="modal_global">
      <div className="form">
        <form>
          <label htmlFor="firstname">Firstname :</label>
          <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} required />
  
          <label htmlFor="lastname">Lastname :</label>
          <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required />
  
          <label htmlFor="phoneNumber">Phone Number :</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" size="10" value={formData.phoneNumber} onChange={handleChange} required />

          <button type="reset">Effacer données</button>
          <button type="submit" onClick={handleSubmit}>Valider</button>
          <button type="button" onClick={onClose}>Fermer</button>
        </form>
      </div>
    </div>
  )
}

export default AddContact