var plus = document.querySelector(".page-content-main-btn__plus");
var number = document.querySelector(".page-content-main-btn__number");

plus.addEventListener('click', function(e){
        number.innerHTML = Number(number.innerHTML) + 1;
})

var minus = document.querySelector(".page-content-main-btn__minus");

minus.addEventListener('click', function(e){
    if(number.innerHTML > 0){
        number.innerHTML = Number(number.innerHTML) - 1;
    }
})

