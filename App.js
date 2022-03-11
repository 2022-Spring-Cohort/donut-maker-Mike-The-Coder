import {
    Donut
} from "./Donut.js";

let newDonut = new Donut();

console.log(newDonut);
let clickerCount = 0;


const clicker = document.querySelector('.clicker')

const clickerButton = document.querySelector(".clicker");

const buyerButtonAuto = document.querySelector(".buyerButtonAuto");

const buyerButtonMulti = document.querySelector(".buyerButtonMulti");

const numbers = (document.querySelector('.numbers').innerHTML = ('Numbers'));

const resetButton = document.querySelector(".resetButton");

document.getElementById('counter').innerHTML = Math.round(newDonut._donutNumber);
document.getElementById('multiplierNumber').innerHTML = Math.round(newDonut._donutMultiplier);
document.getElementById('autoNumber').innerHTML = newDonut._autoClicker;
document.getElementById('autoCost').innerHTML = newDonut._autoClickerPrice;
document.getElementById('multiCost').innerHTML = newDonut._donutMultiplierPrice;

// let x = 1 * newDonut._donutMultiplier * newDonut._bonus;

resetButton.onclick = function () {
    newDonut.reset();
    console.log("Reset");
    document.getElementById('multiplierNumber').innerHTML = newDonut._donutMultiplier;
    document.getElementById('counter').innerHTML = newDonut._donutNumber;
    document.getElementById('autoCost').innerHTML = Math.round(newDonut._autoClickerPrice);
    document.getElementById('multiCost').innerHTML = Math.round(newDonut._donutMultiplierPrice);
    document.getElementById('autoNumber').innerHTML = newDonut._autoClicker;
}

buyerButtonMulti.onclick = function () {
    if (newDonut._donutNumber >= Math.round(newDonut._donutMultiplierPrice)) {
        newDonut._donutNumber -= Math.round(newDonut._donutMultiplierPrice);
        newDonut.addMultiplier();
        document.getElementById('multiCost').innerHTML = Math.round(newDonut._donutMultiplierPrice);
        console.log("Mulitplier new cost: " + Math.round(newDonut._donutMultiplierPrice));
        console.log("Multiplier= " + newDonut._donutMultiplier);
        document.getElementById('multiplierNumber').innerHTML = Math.round(newDonut._donutMultiplier);
        document.getElementById('counter').innerHTML = Math.round(newDonut._donutNumber);

    }
}

// const updateView = function () {
//     if (newDonut._donutNumber > newDonut._autoClickerPrice) {
//         document.getElementByClass("buyerButtonAuto").className = 'buyerButtonAuto2';}
//     else  {
//         document.getElementByClass("buyerButtonAuto2").className = 'buyerButtonAuto';
//     }
//     if (newDonut._donutNumber > newDonut._donutMultiplierPrice){
//         document.getElementByClass("buyerButtonMulti").className = 'buyerButtonMulti2';}
//     else { document.getElementByClass("buyerButtonMulti2").className = 'buyerButtonMulti';}

//     }




buyerButtonAuto.onclick = function () {
    if (newDonut._donutNumber >= Math.round(newDonut._autoClickerPrice)) {
        newDonut._donutNumber -= Math.round(newDonut._autoClickerPrice);
        newDonut.addAutoClicker();
        console.log("AutoClicker= " + Math.round(newDonut._autoClicker))
        document.getElementById('autoCost').innerHTML = Math.round(newDonut._autoClickerPrice);
        document.getElementById('autoNumber').innerHTML = Math.round(newDonut._autoClicker);
        document.getElementById('counter').innerHTML = Math.round(newDonut._donutNumber);

    }
}


clicker.onclick = function () {
    newDonut._donutNumber += Math.pow(1.2, newDonut._donutMultiplier);
    console.log("Donut Number: " + Math.round(newDonut._donutNumber));
    updateView();
}

clickerButton.addEventListener("click", () => {
    // displays and connects donutCount on page by HTML ID
    document.getElementById('counter').innerHTML = Math.round(newDonut._donutNumber);
    updateView();

});

setInterval(function(){
    newDonut._donutNumber += newDonut._autoClicker * Math.pow(1.2, newDonut._donutMultiplier);
    document.getElementById('counter').innerHTML = Math.round(newDonut._donutNumber);
    updateView();

}, 1000)


