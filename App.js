import {
    Donut
} from "./Donut.js";

let newDonut = new Donut();

console.log(newDonut);
let clickerCount = 0;
// const buyerButtonMulti = document.querySelector('.buyerButtonMulti');



const clicker = document.querySelector('.clicker')
clicker.innerText = ('Click Here');


const container = (document.querySelector('.container').innerText =
    'mmmmmmmmm doughnuts.... ahhhhhhh!');

const clickerButton = document.querySelector(".clicker");

const buyerButtonAuto = document.querySelector(".buyerButtonAuto");

const buyerButtonMulti = document.querySelector(".buyerButtonMulti");

const numbers = (document.querySelector('.numbers').innerHTML = ('Numbers'));

document.getElementById('counter').innerHTML = newDonut._donutNumber;
document.getElementById('multiplierNumber').innerHTML = newDonut._donutMultiplier;
document.getElementById('autoNumber').innerHTML = newDonut._autoClicker;
document.getElementById('autoCost').innerHTML = newDonut._autoClickerPrice;
document.getElementById('multiCost').innerHTML = newDonut._donutMultiplierPrice;

let x = 1 * newDonut._donutMultiplier * newDonut._bonus;

buyerButtonMulti.onclick = function () {
    if (newDonut._donutNumber >= newDonut._donutMultiplierPrice) {
        newDonut._donutNumber -= newDonut._donutMultiplierPrice;
        newDonut.addMultiplier();
        document.getElementById('multiCost').innerHTML = newDonut._donutMultiplierPrice;
        console.log("Mulitplier new cost: " + newDonut._donutMultiplierPrice);
        console.log("Multiplier= " + newDonut._donutMultiplier);
        document.getElementById('multiplierNumber').innerHTML = newDonut._donutMultiplier;

    }
}
buyerButtonAuto.onclick = function () {
    if (newDonut._donutNumber >= newDonut._autoClickerPrice) {
        newDonut._donutNumber -= newDonut._autoClickerPrice;
        newDonut.addAutoClicker();
        console.log("AutoClicker= " + newDonut._autoClicker)
        document.getElementById('autoCost').innerHTML = newDonut._autoClickerPrice;
        document.getElementById('autoNumber').innerHTML = newDonut._autoClicker;

    }
}



clicker.onclick = function () {

    newDonut._donutNumber += (1 * newDonut._donutMultiplier);
    console.log("Donut Number: " + newDonut._donutNumber);
}

clickerButton.addEventListener("click", () => {


    // displays and connects donutCount on page by HTML ID
    document.getElementById('counter').innerHTML = newDonut._donutNumber;

});


