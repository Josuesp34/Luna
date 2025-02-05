const mensajes = [
    "¿Estás segura?",
    "¿Realmente segura??",
    "¿Amor, de verdad estás segura?",
    "Si dices que no, me pondré muy triste...",
    "Me pondré muy triste...",
    "Me pondré muy muy muy triste...",
    "Okey grosera:(",
    "Es broma Amor porfa di que sí :) ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = mensajes[messageIndex];
    messageIndex = (messageIndex + 1) % mensajes.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.54}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
