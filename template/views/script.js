var wrapper= document.querySelector('.wrapper');
var loginlink = document.querySelector('.login-link');

var registerlink = document.querySelector('.register-link');

var btnPopup = document.querySelector('.btnLogin-popup');
var iconClose = document.querySelector('.icon-close');


registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});