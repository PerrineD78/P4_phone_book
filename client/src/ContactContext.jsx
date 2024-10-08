// import { createContext, useState, useEffect } from "react";
// import axios from 'axios';

// export const ContactContext = createContext()

// export const ContactProvider = ({children}) => {
//     const [contact, setContact] = useState([])

//     useEffect(() => {
//       axios.get("http://localhost:5000/api/contacts/")
//       .then(response => setContact(response.data))
//       .catch(error) => console.error("erreur lors de la récupération des contacts", error)
//     }, [])
// }