document.addEventListener("DOMContentLoaded", function () {
    const pdfViewer = document.getElementById("pdf-viewer");
    const pdfList = document.getElementById("pdf-list");

    // Liste des 30 Juz + 1 PDF final "Khatm complet"
    const pdfFiles = [];
    for (let i = 1; i <= 30; i++) {
        pdfFiles.push({ name: `Juz ${i}`, file: `Juz ${i}.pdf` });
    }
    pdfFiles.push({ name: "Khatm Complet", file: "Khatm complet.pdf" });

    // Affichage dynamique de la liste des fichiers PDF
    pdfFiles.forEach(pdf => {
        const listItem = document.createElement("li");
        listItem.textContent = pdf.name;
        listItem.addEventListener("click", () => {
            pdfViewer.src = `http://localhost:5000/pdfs/${encodeURIComponent(pdf.file)}`; // Assurez-vous que ce chemin est correct
            console.log("Chargement de :", pdfViewer.src);
        });
        pdfList.appendChild(listItem);
    });

    // Charger automatiquement le premier PDF (Juz 1)
    pdfViewer.src = `http://localhost:5000/pdfs/${encodeURIComponent(pdfFiles[0].file)}`;


});
