import { createContext , useState , useEffect } from "react";
import axios from "axios";

// Création d'un contexte vide pour les ocntacts
export const ContactContext = createContext()

// Composant Provider pour encapsuler les composants enfants
export const ContactProvider = ({children}) => {
	const [contacts, setContacts] = useState([])

  // Charger les contacts depuis l'API au chargement du composant
	useEffect(() => {
    getContacts()
		},[])

    const getContacts = () => {
   		axios.get("http://localhost:5000/api/contact/")
			.then(response => setContacts(response.data))
			.catch(error => console.error("Failed while retrieving contacts", error))
    }

    const postContact = (contact) => {
      // pour le post on a besoin à la fois d'envoyer l'adresse ET l'objet qu'il contient, donc en 2eme parametre on met contact
      axios.post("http://localhost:5000/api/contact", contact)
      .then(() => {
        getContacts()
      })
      .catch(error => console.error("Failed while update contacts")
      )
    }

    const updateContact = (id, updatedContact) => {
      axios.put(`http://localhost:5000/api/contact/${id}`, updatedContact)
      .then(() => {
        getContacts()
      })
      .catch(error => console.error("Failed while updated contact", error)
      )
    }

    const deleteContact = (id) => {
      axios.delete(`http://localhost:5000/api/contact/${id}`)
      .then(() => {
        getContacts()
      })
      .catch(error => console.error("Failed to delete contact", error)
      )
    }

  return (
    // contacts correspond au state
    <ContactContext.Provider value={{contacts, postContact, updateContact, deleteContact}}>
      {children}
    </ ContactContext.Provider>
  )
}