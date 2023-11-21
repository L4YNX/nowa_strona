const infoBox = document.querySelector('.info-box');

// Pobierz element container
const container = document.querySelector('.container');

// Dodaj nasłuchiwanie zakończenia animacji slideLeft z opóźnieniem
container.addEventListener('animationend', function () {
    setTimeout(function () {
        infoBox.classList.add('show');
    }, 1); // Opóźnienie 500ms po zakończeniu animacji slideLeft
});
