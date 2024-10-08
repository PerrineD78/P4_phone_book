import { db } from "../utils/db.js";

export const Contact = {
  create : (contact) => {
    const query = "INSERT INTO contact (firstname, lastname, phoneNumber) VALUES (?, ?, ?)";
    const params = [contact.firstname, contact.lastname, contact.phoneNumber];

    return new Promise((resolve, reject) => {
      db.run(query, params, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(contact);
        }
      });
    });
  },

  readAll : () => {
    const query = 'SELECT * FROM contact'

    return new Promise ((resolve, reject) => {
      db.all(query, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      })
    })
  },

  update : (id, contact) => {
    const query = "UPDATE contact SET firstname = ?, lastname = ?, phoneNumber = ? WHERE id = ?";
    const params = [contact.firstname, contact.lastname, contact.phoneNumber, id];

    return new Promise ((resolve, reject) => {
      db.run(query, params, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(contact)
        }
      })
    })
  },

  delete : (id) => {
    const query = "DELETE FROM contact WHERE id = ?";
    const params = [id];

    return new Promise ((resolve, reject) => {
      db.run(query, params, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve()
        }
      })
    })
  }
};
