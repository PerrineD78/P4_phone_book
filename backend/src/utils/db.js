// permet d'avoir un petite bdd légère et simple à lire
import sqlite3 from "sqlite3";

// fonctionnalité propre à sqlite3 qui permet de de mieux verbaliser les erreurs
sqlite3.verbose()

// Le type module permet tjs de faire des import/export
export const db = new sqlite3.Database('./src/utils/contact.sqlite')

export const initDB = () => {
    const sqlContent = `CREATE TABLE IF NOT EXISTS contact (
      id INTEGER PRIMARY KEY,
      firstname TEXT,
      lastname TEXT,
      phoneNumber TEXT
    )`;

// execute la commande SQL pour créer une table contacts si elle n'existe pas déjà
    db.exec(sqlContent, (err) => {
        if (err) {
            console.log(`Failed to load SQL query: ${err}`);
        } else {
            console.log(`SQL content loaded`);
        }
    });
};