//recap
//partial vs deep-cloning
//adding a method to an object
let personalInfo = {
    name: 'Daniel',
    age: 30,
    profession: 'Athlet',
    introducePerson(){
        console.log(`My name is ${this.name} I am ${this.age} years old and I am an ${this.profession}`);
    }
};
//console.log(personalInfo);
const newPersonalName = personalInfo.name = 'Mahmoud';
//console.log(newPersonalName);
//console.log(personalInfo);
//console.log(personalInfo.introducePerson());//My name is Mahmoud I am 30 years old and I am an Athlet
//
//Today's class
//i ES6  class based object
//ii ntro to methods inside class based object
//iii, this key word
//iv iterating over an object (loop)

//i class-based object
// class Cars {
//     constructor(model, price, maturity){//constructor, parameter
//         this.model = model;
//         this.price = price;
//         this.maturity = maturity
//     };
// }
//console.log(Cars);//no result showing before instantiating ...

//instantiating the object with values
//const carOne = new Cars('Fiat', '10,000€', 2015);
//console.log(carOne);//Cars { model: 'Fiat', price: '10,000€', maturity: 2015 }
//const carTwo = new Cars('Mercedece', '30,000€', 2020);
//console.log(carTwo);//Cars { model: 'Mercedece', price: '30,000€', maturity: 2020 }
//
//
//ii, create a method called showMaturity that shows the currrent age of the car
class Cars {
    constructor(model, price, maturity){//constructor, parameter
        this.model = model;
        this.price = price;
        this.maturity = maturity
    };
    showMaturity(){
        //let currentAge =  2023- this.maturity;//hard-coaded and not good ...
        let currentAge =  new Date().getFullYear() - this.maturity;
        //console.log or
        return `The current age of my ${this.model} that costs ${this.price} is ${currentAge} years`;
    }
    //create as much methode as desired, they are independent from eachother ...
    calculateNumbers(a, b){
        return a + b;
    }
}
//iii
//a, instantiate the object and b, call the method
let car1 = new Cars('Bougathi', '2,200,000€', 2021);
//console.log(car1);//Cars { model: 'Bugatti', price: '2,200,000€', maturity: 2021 }
//call/get the method 
//console.log(car1.showMaturity());//The current age of my Bougathi that costs 2,200,000€ is 2
//
//
//console.log(car1.price);//2,200,000€
//
//creating another method inside Cars
let car2 = new Cars('Toyota', '10,000€', 2010);
//console.log(car2.calculateNumbers(3,6));//we ll get 9


let currentHour =  new Date().getHours();
//console.log(currentHour)
let currentMinutes = new Date().getMinutes();
//console.log('This time now is = ' + currentHour + ':' + currentMinutes);//This time now is = 11:9

//iv iterating over an object and show keys and values or both ...
//for ... in
//object, JSON
const employees = {
    name: 'Peter',
    age: 30,
    profession: 'Lawyer'
}
for(let employee in employees){
    //console.log(employee);//shows only the key: name age profession
    console.log(employee + ' : ' + employees[employee]);//both key & value = name : Peter age : 30 profession : Lawyer
}
//
//another way of iterating over  ...
const books = {
    author: 'Kaen',
    pageSize: 300,
    publicationYear: 2020,
    price: '15€'
}
let showInfo = Object.entries(books);
//console.log(showInfo);//show result inside an array
console.log(showInfo.toString());//string result

