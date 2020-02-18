// Загрузити ще

function loading() {
    var items = [
        {
            title:"Farm",
            name:"Magnum 380 Prwstige Traktor",
            price:"29,354.75",
            image:"img/sellings/14905.png",
        },
        {
            title:"Farm",
            name:"Magnum 380 Prwstige Traktor",
            price:"29,354.75",
            image:"img/sellings/14905.png",
        },
        {
            title:"Farm",
            name:"Magnum 380 Prwstige Traktor",
            price:"29,354.75",
            image:"img/sellings/14905.png",
        },
    ]

    items.forEach(function(item) {
        box.innerHTML += `
            <div class="shop-card">
                <div>
                    <img class="shop-card-img" src="${item.image}" alt="">
                </div>
                <div class="shop-card-text">
                    <p class="shop-card-title">${item.title}</p>
                    <p class="shop-card-name">${item.name}</p>
                    <p class="shop-card-price">${item.price}</p>
                </div>
            </div>
        `
    })


}

var box = document.querySelector(".shop-cards-content") 

var btn = document.querySelector(".shop-btn-more")
btn.addEventListener('click', loading);


// Кнопка +

document.querySelectorAll('.shop-btn-plus').forEach(function(button) {
    button.addEventListener('click', function(e) {
        if(e.target.innerHTML == '+'){
            e.target.innerHTML = '-'
        }
        else if(e.target.innerHTML == '-'){
            e.target.innerHTML = '+';
        }
        e.target.nextElementSibling.firstElementChild.classList.toggle('klass');
    })
})






