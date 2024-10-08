// le type module permet de faire un import express
import express from 'express';
import { initDB } from './utils/db.js';
import contactRoutes from "./routes/contactRoutes.js"


const app = express();
// grace à process.env.PORT je peux déclarer une variable d'environnement sans avoir besoin de déclarer ttes les variables dans un fichier .env. Les variables d'environnement seront ensuite ttes déclarées lors du déploiement
const PORT = process.env.PORT || 5000;

// comme j'ai transmis les caractéristiques d'express à app, je peux utiliser la fonctionnalité express .use avec la variable app.
app.use(express.json());
app.use("/api/contact", contactRoutes)

initDB()

// cela va permettre de lancer le server et de le laisser tourner en continue.
app.listen(PORT, () => {
    // le clg m'avertira que le serveur à démarré
  console.log(`Server is running on port ${PORT}`);
});

// juste avec ça, j'ai déjà un serveur fonctionnel qui ne renvoi rien MAIS il fonctionne