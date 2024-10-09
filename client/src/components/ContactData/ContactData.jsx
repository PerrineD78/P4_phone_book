import { useContext } from 'react';
import { ContactContext } from '../../ContactContext.jsx'

import './ContactData.css';

function ContactData({firstname, lastname, phoneNumber}) {

  const { updateContact, deleteContact } = useContext(ContactContext);

  return (
    <div className="oneContact">
        <h3>{firstname}</h3>    
        <h3>{lastname}</h3>    
        <p>{phoneNumber}</p>
        <button>Modifier</button>
        <br/>
        <button onClick={() => deleteContact(contact.id)}>Supprimer</button>

    </div>
  )
}

export default ContactData;