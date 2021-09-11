const elForm = document.querySelector('#form');
const elInput = document.querySelector('#input');
const elBtn = document.querySelector('#btn');
const elWalking = document.querySelector('#time_walk');
const elBicucle = document.querySelector('#time_bicucle');
const elCar = document.querySelector('#time_car');
const elPlane = document.querySelector('#time_plane');
const elResult = document.querySelector('#result')

let walking = 3.6;
let bicucle = 20.1;
let car = 70;
let plane = 800;


elForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let distance = elInput.value -0
    if(!isNaN(distance)){
        elWalking.textContent = (distance / walking).toFixed(1)
        elBicucle.textContent = (distance / bicucle).toFixed(1)
        elCar.textContent = (distance / car).toFixed(1)
        elPlane.textContent = (distance / plane).toFixed(1)
    }else{
        elResult.textContent = 'Raqam kiriting'
    }

    elInput.value = ''
})