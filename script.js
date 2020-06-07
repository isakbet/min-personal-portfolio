// Mobile Nav
let menu = document.querySelector('.navbar__mobile'),
    { body } = document;

menu.addEventListener('click', function() {
    this.classList.toggle('active')
    this.parentElement.children[1].classList.toggle('active') // This is the navbar__links ul

    this.classList.contains('active') ? body.style.overflow = 'hidden' : body.style.overflow = 'visible';
})

