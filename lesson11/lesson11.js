class Sweeties{
    constructor(weight, price){
        this.weight = weight;
        this.price = price;
    }
}

class Candy extends Sweeties{
    constructor(weight, price, type){
        super(weight, price);
        this.type = type;
    }
}

class Marshmallow extends Sweeties{
    constructor(weight, price){
        super(weight, price);
        
    }
}

class ChocolateCandy extends Candy{
    constructor(weight, price){
        super(weight, price);
        this.type = 'ChocolateCandy'
    }
}

class CaramelCandy extends Candy{
    constructor(weight, price, type){
        super(weight, price, type);
        this.type = 'CaramelCandy'
    }
}

class Lollipop extends Candy{
    constructor(weight, price, type){
        super(weight, price, type);
        this.type = 'Lollipop'
    }
}

class NewYearPresent{
    constructor(){
        this.numberOfSweeties = 0;
        this.price = 0;
        this.weight = 0;
        this.chocolateCandy = new  ChocolateCandy(7, 0.4);
        this.caramelCandy = new CaramelCandy(5, 0.5);
        this.lollipop = new Lollipop(6, 0.3);
        this.marshmallow = new Marshmallow(15, 1);
    }
    addSweet(){
        this.numberOfSweeties++;
    }
    addPrice(sweetiesPrice){
        this.price += sweetiesPrice;
    }
    addWeight(sweetiesWeight){
        this.weight += sweetiesWeight;
    }
    getNumberofSweeties(){
        return this.numberOfSweeties;
    }
    getPrice(){
        return this.price;
    }
    getWeight(){
        return this.weight;
    }
    addCandy(Candy) {
        this.addSweet();
        this.addPrice(this[Candy].price);
        this.addWeight(this[Candy].weight);
        

    }
    
    addMarshmallow() {
        this.addSweet();
        this.addPrice(this.marshmallow.price);
        this.addWeight(this.marshmallow.weight);
                 
    }
}

const gift = new NewYearPresent();
console.log(gift);
gift.addCandy('caramelCandy');
gift.addCandy('chocolateCandy');
gift.addMarshmallow();
console.log(gift);
console.log(gift.getPrice());
console.log(gift.getWeight());

