import './AddContact.css';

function AddContact({ onClose }) {
  return (
    <div className="modal_global">
      <div className="form">
        <form>
          <label htmlFor="firstname">Firstname :</label>
          <input type="text" id="firstname" name="firstname" required />
  
          <label htmlFor="lastname">Lastname :</label>
          <input type="text" id="lastname" name="lastname" required />
  
          <label htmlFor="phoneNumber">Phone Number :</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" size="10" required />

          <button type="reset">Effacer données</button>
          <button type="submit">Valider</button>
          <button type="button" onClick={onClose}>Fermer</button>
        </form>
      </div>
    </div>
  )
}

export default AddContact