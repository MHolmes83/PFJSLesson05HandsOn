function person(firstName, lastName, age, hobby) 
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.hobby = hobby;
}

let person1 = new person('Oliver', 'Queen', 28, 'Archery');
let person2 = new person('Felicity', 'Smoak', 25, 'Hacktivism');
let person3 = new person('John', 'Diggle', 30, 'Personal Security');

console.log(person1);
console.log(person2);
console.log(person3);


const coder = 
{
    isStudying: false,
    printIntroduction: function () 
    {
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}.`);
    },
};

const me = Object.create(coder);

me.name = "Barry Allen";
me.isStudying = true;
me.printIntroduction();

class Vehicle 
{
    constructor(name, make, model) 
    {
        this.name = name;
        this.make = make;
        this.model = model;
    }
    getDetails() 
    {
        return `The name of this vehicle is ${this.name}.`;
    }
}

let car1 = new Vehicle('Jade', 'Toyota', 'Corolla');
let car2 = new Vehicle('Mona', 'Nissan', 'Sentra');

console.log(car1.name);
console.log(car2.make);
console.log(car1.getDetails());

class CoffeeMachine 
{
    constructor(coffeeStyle, coffeeBeans)
    {
        this.coffeeStyle = coffeeStyle;
        this.coffeeBeans = coffeeBeans;
    }

    brewCoffee(coffeeStyle, amount)
    {
        const coffee = new Coffee();
        console.log(`Making ${amount}oz of coffee in the form of ${coffeeStyle} with ${this.coffeeBeans} beans`);

        return coffee;
    }
}

class CoffeeBean
{
    constructor(name, quantity)
    {
        this.name = name;
        this.quantity = quantity;
    }
}

class Coffee
{
    constructor(style, quantity)
    {
        this.style = style;
        this.quantity = quantity;
    }
}

beans = new CoffeeBean('dark roast', 8);
machine = new CoffeeMachine('latte', beans.quantity);
cupOfCoffee = machine.brewCoffee(machine.coffeeStyle, 4);

var Dog = (function () 
{

    var play = function () 
    {

    };

    var breed = 'Dalmatian';

    var name = 'Rex';

    var makeNoise = function () 
    {
        return 'Bark bark!';
    };

    return {
        makeNoise: makeNoise,
        name: name,
    }
})();


class Animal 
{
    constructor(kindOfClass, species)
    {
        this.kindOfClass = kindOfClass;
        this.species = species;
    }

    description()
    {
        console.log(
            `This animal is of the ${this.kindOfClass} class and is of the ${this.species} species.`
        );
    }
}

class FourLegged extends Animal
{
    constructor(kindOfClass, species, hasFur)
    {
        super(kindOfClass, species);
        this.hasFur = hasFur;
    }

    furOrNoFur()
    {
        console.log(`This animal does ${this.hasFur ? 'have' : 'not have'} fur.`);
    }
}

class Cat extends FourLegged
{
    constructor(kindOfClass, species, hasFur, breed, age, gender)
    {
        super(kindOfClass, species, hasFur);
        this.breed = breed;
        this.age = age;
        this.gender = gender;
    }

    speak()
    {
        console.log('meoooooowww!');
    }
}

function newAnimal() {}
function Dog() {}

newAnimal.prototype.makeNoise = function () {
    console.log('Base noise');
};

newAnimal.prototype.legs = 4;

Dog.prototype = new Animal();

Dog.prototype.makeNoise = function () {
    console.log('Woof woof!');
};

var animal = new newAnimal();
var dog = new Dog();

animal.makeNoise();
dog.makeNoise();
dog.legs;