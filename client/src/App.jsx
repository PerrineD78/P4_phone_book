import { ContactProvider } from "./ContactContext.jsx";

import Listing from './components/ListingContact/listing.jsx';

import './App.css'

function App() {

  return (
  <ContactProvider>
    <Listing />
  </ContactProvider>
  )
}

export default App
