// Toogle 
const navbarNav = document.querySelector ('.navbar-nav');

// ketika menu di click
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//Klike di luar sidebar menu 
const Menu = document.querySelector ('#menu');

document.addEventListener('click', function (e) {
    if(!Menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
});

// Toogle 
const navbarNavsearch = document.querySelector ('.search-form');

// ketika search form di click
document.querySelector('#search').onclick = () => {
    navbarNavsearch.classList.toggle('active');
};