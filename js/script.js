// Toogle 
const navbarNav = document.querySelector ('.navbar-nav');

// ketika menu di click
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};
// Toogle 
const navbarNavdollar = document.querySelector ('.dollar-cart');

// ketika menu di click
document.querySelector('#shop').onclick = () => {
    navbarNavdollar.classList.toggle('active');
};

//Klike di luar sidebar menu 
const Menu = document.querySelector ('#menu');
const sb = document.querySelector ('#search');
const sc = document.querySelector ('#shop');


document.addEventListener('click', function (e) {
    if(!Menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
    if(!sb.contains(e.target) && !navbarNavsearch.contains(e.target)){
        navbarNavsearch.classList.remove('active')
    }
    if(!sc.contains(e.target) && !navbarNavdollar.contains(e.target)){
        navbarNavdollar.classList.remove('active')
    }
});

// Toogle 
const navbarNavsearch = document.querySelector ('.search-form');

// ketika search form di click
document.querySelector('#search').onclick = () => {
    navbarNavsearch.classList.toggle('active');
};

// Modal Box 

const itemdetailmodal = document.querySelector('#item-detail-modal')
const itemdetailbuttons = document.querySelectorAll('.item-detail-button')

itemdetailbuttons.forEach((btn) => {
    btn.onclick = (e) => {
        itemdetailmodal.style.display = 'flex';
        e.preventDefault ();
    }
});

itemdetailbuttons.onclick =(e)=> {
    itemdetailmodal.style.display = 'flex';
    e.preventDefault()
};

// Klik tombol close 

document.querySelector('.modal .close-icon').onclick = (e) => {
    itemdetailmodal.style.display = 'none';
     e.preventDefault();
}

// Close Modal 

const modal = document.querySelector('#item-detail-modal')
window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}