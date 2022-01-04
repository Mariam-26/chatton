let formulaire = document.getElementById('form');

document.querySelector('#btnForm').addEventListener('click', function() {
    formulaire.innerHTML = 'Votre demande à bien été envoyée. Nous vous répondrons dans les meilleurs delais.';
    formulaire.classList.add('alert', 'alert-success');
})

// JS pour la tete de chat

let teteDeChat = document.querySelector('#teteDeChat');

teteDeChat.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#061339';

    teteDeChat.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#7885A5';
    })
})