class EspressoMachine{
    constructor(color,make,model,price){
        this.color = color
        this.make = make
        this.model = model
        this.price = price
    }
    turnOn(){
        console.log('Good day, I am now on!')
    }
    steam(){
        console.log('ITTSSS SUMMERRR SALLLEEEE 50%%%%')
    }
    brew(){
        console.log('Good stuff coming your way')
    }
}

let gaggia = new EspressoMachine('red','Gaggia','Classic Pro', 400)