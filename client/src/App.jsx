import { useState } from 'react';
// import axios from 'axios';

import contacts from "./contacts.json";
import ContactData from "./components/ContactData/ContactData.jsx";
import Plus from "./assets/plus-circle-svgrepo-com.svg";

import './App.css'
import AddContact from "./components/ModalAddContact/AddContact.jsx";

function App() {

//   const [ContactData, setContactData] = useState([])

//   const getContactData = () => {
//     axios
//     .get('http://localhost:5000/api/contact')
//     .then((response) => {
//       setContactData(response.data);
//     })
//     .catch((err) => {
//       SpeechSynthesisErrorEvent('Erreur lors de la récupération des contacts');
//       console.error("Erreur:", err);
//     });
//   };

// useEffect(() => {
//   getContactData();
// }, []);

  const [modal, setModal] = useState(false);
  
  const handleModal = () => {
      setModal(!modal);
  }

  return (
    <div className="div_globale">
      <h1>REPERTOIRE</h1>

      <section className="title">
      <h2>Ici devrait normalement s'afficher la liste de mes contacts</h2>
      <img
        src={Plus}
        alt="plus"
        onClick={handleModal}
        />
      </section>

      <section className="listing">
          {contacts.map((contact) => (
            <ContactData 
              key={contact.id}
              firstname={contact.firstname}
              lastname={contact.lastname}
              phoneNumber={contact.phoneNumber}
            />
          ))}
      </section>
      {modal && <AddContact onClose={handleModal} />}
    </div>
  )
}

export default App
