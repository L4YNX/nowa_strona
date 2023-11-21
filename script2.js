const infoBox = document.querySelector('.info-box');

// Pobierz element container
const container = document.querySelector('.container');

// Dodaj nasłuchiwanie na zakończenie animacji slideRight
container.addEventListener('animationend', function () {
    setTimeout(function () {
        infoBox.classList.add('show');
    }, 1); // Opóźnienie dodania klasy show (1s - czas trwania animacji slideRight)
});

document.getElementById('register').onclick = function(){
    let login = document.getElementById('login').value;
    let password = document.getElementById('pass1').value;
    let password2 = document.getElementById('pass2').value;

    if(password !== password2){
        console.log('wrong password')
    }
};