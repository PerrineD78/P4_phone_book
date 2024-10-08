import './ContactData.css';

function ContactData({firstname, lastname, phoneNumber}) {
    {console.info(firstname)}

  return (
    <div className="oneContact">
        <h3>{firstname}</h3>    
        <h3>{lastname}</h3>    
        <p>{phoneNumber}</p>
        <button>Modifier</button>
        <br/>
        <button>Supprimer</button>

    </div>
  )
}

export default ContactData