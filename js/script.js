var ul = document.querySelector('nav ul');

var menuBtnBar = document.querySelector('.menuBar');
var menuBtnClose = document.querySelector('.menuClose');

function menuShow(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open');
        menuBtnBar.classList.add('fa-bars');
        menuBtnBar.classList.remove('fa-close');

    }else{
        ul.classList.add('open');
        menuBtnBar.classList.remove('fa-bars');
        menuBtnBar.classList.add('fa-close');
    }
}