let formulaire = document.getElementById('form');

document.querySelector('#btnForm').addEventListener('click', function() {
    formulaire.innerHTML = 'Votre demande à bien été envoyée. Nous vous répondrons dans les meilleurs delais.';
    formulaire.classList.add('alert', 'alert-success');
})