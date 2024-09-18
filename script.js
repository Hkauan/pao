document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.querySelector('.envelope');
    const poemContainer = document.querySelector('.poem-container');
    const flap = document.querySelector('.envelope-flap');

    envelope.addEventListener('click', function() {
        envelope.classList.add('open');
        setTimeout(function() {
            poemContainer.style.display = 'block';
        }, 800); // Atraso para dar tempo de abrir o envelope
    });
});
