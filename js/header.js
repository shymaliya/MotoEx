var sign = document.querySelector(".header-btn-sign");
var s = document.querySelector(".modal-sign");
var login = document.querySelector(".header-btn-login");
var l = document.querySelector(".modal-login");
var fade = document.querySelector(".fade");
var closeSign = document.querySelector(".close-sign")
var closeLogin = document.querySelector(".close-login")

sign.addEventListener('click', function(){
    s.style.display = "block";
    fade.style.display = "block";
    
})
login.addEventListener('click', function(){
    l.style.display = "block";
    fade.style.display = "block";
    
})
closeSign.addEventListener('click', function(){
    s.style.display = "none";
    fade.style.display = "none";
})
closeLogin.addEventListener('click', function(){
    l.style.display = "none";
    fade.style.display = "none";
})


