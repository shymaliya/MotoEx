
// console.log('sdfsdf')



// $('.navbar-links__items').on('mouseenter', function(e){
//     var element = e.target.parentElement.nextElementSibling
//     console.log(element.classList)
//     element.classList.toggle('submenu')
//     console.log(element.classList)

// })


// $('.navbar-links__items').on('mouseout', function(e){
//     e.target.parentElement.nextElementSibling.classList.toggle('submenu')
// })


// Сільськогосподарська техніка

var agricultural = document.querySelector(".navbar-links__items-agricultural");
var subagricultural = document.querySelector(".navbar-links-menu-agricultural");

agricultural.addEventListener('mouseenter', function(){
    subagricultural.style.display = "block";
})
agricultural.addEventListener('mouseleave', function(){
    subagricultural.style.display = "none";
})
subagricultural.addEventListener('mouseenter', function(e){
    subagricultural.style.display = 'block'
})
subagricultural.addEventListener('mouseleave', function(e){
    subagricultural.style.display = 'none';
})


// Мототехніка

var motorcycle = document.querySelector(".navbar-links__items-motorcycle");
var submotorcycle = document.querySelector(".navbar-links-menu-motorcycle");

motorcycle.addEventListener('mouseenter', function(){
    submotorcycle.style.display = "block";
})
motorcycle.addEventListener('mouseleave', function(){
    submotorcycle.style.display = "none";
})
submotorcycle.addEventListener('mouseenter', function(e){
    submotorcycle.style.display = 'block'
})
submotorcycle.addEventListener('mouseleave', function(e){
    submotorcycle.style.display = 'none';
})


// Велосипеди


var bicycle = document.querySelector(".navbar-links__items-bicycle");
var subbicycle = document.querySelector(".navbar-links-menu-bicycle");

bicycle.addEventListener('mouseenter', function(){
    subbicycle.style.display = "block";
})
bicycle.addEventListener('mouseleave', function(){
    subbicycle.style.display = "none";
})
subbicycle.addEventListener('mouseenter', function(e){
    subbicycle.style.display = 'block'
})
subbicycle.addEventListener('mouseleave', function(e){
    subbicycle.style.display = 'none';
})


// Додаткове обладнання


var equipment = document.querySelector(".navbar-links__items-equipment");
var subequipment = document.querySelector(".navbar-links-menu-equipment");

equipment.addEventListener('mouseenter', function(){
    subequipment.style.display = "block";
})
equipment.addEventListener('mouseleave', function(){
    subequipment.style.display = "none";
})
subequipment.addEventListener('mouseenter', function(e){
    subequipment.style.display = 'block'
})
subequipment.addEventListener('mouseleave', function(e){
    subequipment.style.display = 'none';
})


// Додаткове обладнання - запчастини

var spare = document.querySelector(".navbar-links-menu-items__item-spare");
var hide = document.querySelector(".navbar-links-menu-items-hide");

spare.addEventListener('mouseenter', function(){
    hide.style.display = 'block';
})
spare.addEventListener('mouseleave', function(){
    hide.style.display = "none";
})
hide.addEventListener('mouseenter', function(e){
    hide.style.display = 'block'
})
hide.addEventListener('mouseleave', function(e){
    hide.style.display = 'none';
})
