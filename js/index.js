const btnMenu = document.getElementById('menu')
const headerMenu = document.getElementById('headerMenu')
const navbar = document.getElementById('navbar')

btnMenu.addEventListener('click', (e) => {
    e.preventDefault();
    navbar.classList.toggle('hidden')
    headerMenu.classList.toggle('py-96')
})
