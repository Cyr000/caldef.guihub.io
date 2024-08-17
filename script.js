// scripts.js
const challenges = {
    1: "Écrire une lettre d'amour et la lire à haute voix.",
    2: "Organiser un pique-nique dans un parc.",
    3: "Faire une playlist des chansons qui vous rappellent de bons souvenirs.",
    4: "Préparer un dîner ensemble et déguster à la lueur des bougies.",
    5: "Planifier une soirée cinéma à la maison avec vos films préférés.",
    6: "Faire un album photo en ligne avec vos photos préférées.",
    7: "Échanger des massages pendant 30 minutes.",
    8: "Passer la journée sans téléphone et se concentrer l'un sur l'autre.",
    9: "Faire une promenade romantique au coucher du soleil.",
    10: "Créer ensemble un cocktail spécial en son honneur.",
    11: "Dessiner un portrait de l'autre, même si c'est un simple croquis.",
    12: "Passer la soirée à discuter de vos rêves et aspirations.",
    13: "Faire une chasse au trésor romantique avec des indices cachés.",
    14: "Prendre un bain moussant ensemble.",
    15: "Préparer un petit-déjeuner surprise au lit.",
    16: "Écrire un poème pour exprimer ce que vous ressentez.",
    17: "Se donner des défis personnels pour la semaine à venir.",
    18: "Faire une séance photo en couple avec un thème amusant.",
    19: "Se remémorer ensemble vos premiers souvenirs.",
    20: "Laisser des petits mots doux partout dans la maison.",
    21: "Cuisiner un plat exotique que vous n'avez jamais essayé.",
    22: "Planifier un week-end surprise ensemble.",
    23: "Jouer à un jeu de société ou à un jeu vidéo ensemble.",
    24: "Écrire une liste de 10 raisons pour lesquelles vous l'aimez.",
    25: "Faire du bénévolat ensemble pour une cause qui vous tient à cœur.",
    26: "Créer un tableau de vision ensemble pour votre avenir.",
    27: "Passer la journée à se faire plaisir mutuellement.",
    28: "Prendre une journée de repos pour se détendre ensemble.",
    29: "Faire un pique-nique nocturne sous les étoiles.",
    30: "Planifier un rendez-vous surprise."
};

const modal = document.getElementById("modal");
const modalContent = document.getElementById("challenge-text");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".day").forEach(day => {
    day.addEventListener("click", () => {
        const dayNumber = day.getAttribute("data-day");
        modalContent.innerText = challenges[dayNumber];
        modal.style.display = "block";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});
