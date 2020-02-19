var btnFirst = document.querySelector(".shopping-btn__btn");
var btnSecond = document.querySelector(".shopping-second-page-btn__btn");
var btn1 = document.querySelector(".shopping-steps__one");
var btn2 = document.querySelector(".shopping-steps__two");
var btn3 = document.querySelector(".shopping-steps__three");
var page1 = document.querySelector(".shopping-first-page");
var page2 = document.querySelector(".shopping-second-page");
var page3 = document.querySelector(".shopping-third-page");
var visa = document.querySelector(".shopping-visa-card");
var paypal = document.querySelector(".shopping-paypal-card");


btnFirst.addEventListener('click', function(){
    btn1.style.color = "#fff";
    btn1.innerHTML = "&#x2714";
    page1.style.display = "none";
    page3.style.display = "none";
    btn2.style.backgroundColor = "#e04d27";
    btn2.style.color = "#fff";
    page2.style.display = "block";
})

btnSecond.addEventListener('click', function(){
    btn2.style.color = "#fff";
    btn2.innerHTML = "&#x2714";
    page2.style.display = "none";
    btn3.style.color = "#fff";
    btn3.style.backgroundColor = "#e04d27";
    page3.style.display = "block";
})

visa.addEventListener('click', function(){
    visa.style.backgroundColor = "#e5e5e5";
    paypal.style.backgroundColor = "#fff";
})

paypal.addEventListener('click', function(){
    paypal.style.backgroundColor = "#e5e5e5";
    visa.style.backgroundColor = "#fff";
})