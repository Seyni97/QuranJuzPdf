const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'static')));

// Servir les fichiers PDF dynamiquement
const pdfPath = path.join(__dirname, 'CoranJuzpdf');
console.log("Les fichiers PDF sont servis depuis :", pdfPath);
app.use('/pdfs', express.static(pdfPath));


app.get('/pdfs/:filename', (req, res) => {
    const filename = decodeURIComponent(req.params.filename); // Décode les espaces (%20)
    const filePath = path.join(__dirname, 'CoranJuzpdf', filename);
    
    console.log("Chemin du fichier :", filePath); // Débogage

    res.sendFile(filePath, (err) => {
        if (err) {
            console.error("Erreur lors de l'envoi du fichier :", err);
            res.status(404).send("Fichier introuvable");
        }
    });
});

// Lancer le serveur
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Serveur en ligne sur http://192.168.1.55:${PORT}`);
});


