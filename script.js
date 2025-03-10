document.addEventListener("DOMContentLoaded", function () {
    const pdfViewer = document.getElementById("pdf-viewer");
    const pdfList = document.getElementById("pdf-list");
    const pdfContainer = document.querySelector(".pdf-container");
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.getElementById("close-pdf");

    // Liste des fichiers PDF avec leurs liens Dropbox (convertis en liens directs)
    const pdfFiles = [
        
        { name: "Juz 1", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/ge4g3ryov7xmw6q/Juz%201.pdf"},
        { name: "Juz 2", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/t2da78xitij27yr/Juz%202.pdf" },
        { name: "Juz 3", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/73i25c1uni2ojzk/Juz%203.pdf" },
        { name: "Juz 4", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/hz9txgkyte5y8v9/Juz%204.pdf" },
        { name: "Juz 5", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/372pjj67e0pmxtx/Juz%205.pdf" },
        { name: "Juz 6", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/7jh156tkszv6xk7/Juz%206.pdf" },
        { name: "Juz 7", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/2s2guc8q1ritnr9/Juz%207.pdf" },
        { name: "Juz 8", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/od1bq6h8f1arw7z/Juz%208.pdf" },
        { name: "Juz 9", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/59kwcw4ahdla9lx/Juz%209.pdf"},
        { name: "Juz 10", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/83dr3ujsj10zuqs/Juz%2010.pdf"},
        { name: "Juz 11", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/d7bquzakjjsnvi2/Juz%2011.pdf"},
        { name: "Juz 12", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/4qz6yx67uc18r88/Juz%2012.pdf"},
        { name: "Juz 13", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/vrqpeucyon8pabd/Juz%2013.pdf" },
        { name: "Juz 14", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/445k84kr33wrz17/Juz%2014.pdf" },
        { name: "Juz 15", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/kjr7tw33t6tmkk6/Juz%2015.pdf" },
        { name: "Juz 16", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/g236dxkhsdj5dj7/Juz%2016.pdf" },
        { name: "Juz 17", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/byxyw4oqh5obzeo/Juz%2017.pdf" },
        { name: "Juz 18", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/z8x9828gdmga4ur/Juz%2018.pdf" },
        { name: "Juz 19", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/chxxmg5fgvgwlb7/Juz%2019.pdf" },
        { name: "Juz 20", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/z4fbgk4p0gdzbn6/Juz%2020.pdf" },
        { name: "Juz 21", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/vdgl67hv1bsyf6i/Juz%2021.pdf"},
        { name: "Juz 22", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/6cb0fz7ldkdfatl/Juz%2022.pdf" },
        { name: "Juz 23", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/xv1mei4lh4f6upc/Juz%2023.pdf" },
        { name: "Juz 24", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/eeczc3btubkks0s/Juz%2024.pdf" },
        { name: "Juz 25", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/59vv38nuafqil77/Juz%2025.pdf" },
        { name: "Juz 26", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/mbgcfxqjngyrul4/Juz%2026.pdf" },
        { name: "Juz 27", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/cui1h7uo7388ae7/Juz%2027.pdf" },
        { name: "Juz 28", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/qszjpzbbxvm8znn/Juz%2028.pdf" },
        { name: "Juz 29", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/xeicq7z9gf8gez2/Juz%2029.pdf" },
        { name: "Juz 30", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/59cfv1l5pwnd5w7/Juz%2030.pdf" },
        { name: "Khatm Complet", file: "https://docs.google.com/gview?embedded=true&url=https://dl.dropboxusercontent.com/s/gxa5zdaykbdlowg/khatm%20complet.pdf" }
    ];

 // Affichage dynamique de la liste des fichiers PDF
 pdfFiles.forEach(pdf => {
    const listItem = document.createElement("li");
    listItem.textContent = pdf.name;
    listItem.addEventListener("click", () => {
        pdfViewer.src = pdf.file; // Charger le PDF
        pdfContainer.classList.add("fullscreen"); // Activer le mode plein écran
        sidebar.style.display = "none"; // Cacher la liste
        closeBtn.style.display = "block"; // Montrer le bouton retour
    });
    pdfList.appendChild(listItem);
});

// Gérer la sortie du mode plein écran
closeBtn.addEventListener("click", () => {
    pdfContainer.classList.remove("fullscreen");
    sidebar.style.display = "block";
    closeBtn.style.display = "none";
    pdfViewer.src = ""; // Réinitialiser l'affichage
});
});
