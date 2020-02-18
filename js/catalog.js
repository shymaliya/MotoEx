function myFunction(e) {
    var items = [
        {
            title:"Traktor1",
            price:"53,865",
            image:src="img/sellings/14905.png",
        },
        {
            title:"Traktor2",
            price:"153,99",
            image:src="img/sellings/14905.png",
        },
        {
            title:"Traktor4",
            price:"77,908",
            image:src="img/sellings/14905.png",
        },
        {
            title:"Traktor4",
            price:"11,201",
            image:src="img/sellings/14905.png",
        },
    ]

    var box = document.querySelector(".catalog-selling-cards");
    var content = " ";

    items.forEach(function(item){
        content += `
            <div class="catalog-selling-cards__card">
                <img src=${item.image} alt="traktor" class="catalog-selling-cards__card-img">
                <p class="catalog-selling-cards__card-name">${item.title}</p>
                <p class="catalog-selling-cards__card-price">${item.price}</p>
            </div>
        `
    })

    box.innerHTML += content;
}

var btn = document.querySelector(".catalog-selling-cards__btn");
btn.addEventListener('click', myFunction);