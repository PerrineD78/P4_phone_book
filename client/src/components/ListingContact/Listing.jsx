import { useContext, useState } from 'react';
import { ContactContext } from '../../ContactContext.jsx'

import AddContact from "../ModalAddContact/AddContact.jsx";
import Plus from '../../assets/plus-circle-svgrepo-com.svg';
import ContactData from '../ContactData/ContactData.jsx';

import './Listing.css';

function Listing() {

  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  }

  const { contacts } = useContext(ContactContext)

  return (
    <div className="div_globale">
      <h1>Répertoire</h1>

      <section className="title">
        <h2>Ici devrait normalement s'afficher la liste de mes contacts</h2>
        <img
          src={Plus}
          alt="plus"
          onClick={handleModal}
        />
        {modal && <AddContact onClose={handleModal} />}
      </section>

      <section className="listing">
        {contacts.map((contact) => (
          <ContactData
            key={contact.id}
            id={contact.id}
            firstname={contact.firstname}
            lastname={contact.lastname}
            phoneNumber={contact.phoneNumber}
          />
        ))}
      </section>
    </div> 
  )
}

export default Listing
