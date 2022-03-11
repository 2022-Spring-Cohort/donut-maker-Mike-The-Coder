class Donut{
    constructor(){
        this._donutNumber = 0;
        this._donutMultiplier = 0;
        this._donutMultiplierPrice = 10;
        this._autoClicker = 0;
        this._autoClickerPrice = 100;
        this._bonus = 0;
        this._bonusPrice = 15;

    }
    addAutoClicker(){
        this._autoClicker +=1;
        this._autoClickerPrice *=1.1;
    }
   

    loseAutoClicker(){
        this._autoClicker -=1;
    }



    addMultiplier(){
        this._donutMultiplier +=1;
        Math.round (this._donutMultiplierPrice *= 1.2);
    }
    loseMultiplier(){
        this._donutMultiplier -=1;
        if(this._donutMultiplier<0){
            this._donutMultiplier = 0;
        }
        
    }

    reset(){
        this._donutNumber = 0;
        this._donutMultiplier = 1;
        this._donutMultiplierPrice = 10;
        this._autoClicker = 0;
        this._autoClickerPrice = 100;
        console.log("Reset")
        

    }
   
    get returnDonutNumber(){
        return this._donutNumber;
    }
    get returnDonutMultiplier(){
        return this._donutMultiplier;
    }
    get returnAutoClickerNumber(){
        return this._autoClicker;
        }
    get returnAutoClickerPrice(){
        return this._autoClickerPrice;
    }
    

}
export { Donut }