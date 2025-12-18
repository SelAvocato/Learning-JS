/*
const games = ["Mobile Legends", "Minecraft", "Roblox"];
const ratings = [1,2,3];
const squaredRating = ratings.map(squared);

const date = ["2025-Jan-20", "2024-Feb-08", "2023-August-13"]
const outDated = date.filter(checkDate)
const dateFormat = date.map(formatDate)
const formattedDate = outDated.map(formatDate)

games.forEach(display);
console.log(dateFormat);
console.log(outDated);
console.log(formattedDate);

function squared(element){
    return Math.pow(element, 2);
};

function display(element, index){
    console.log(element + " " + squaredRating[index] + "/20");
};

function checkDate(element){
    const parts = element.split("-");
    return Number(parts[0]) < 2025;
}

function formatDate(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
};


const numbers = [1,2,3,4,5,6,7,8,9,10];
const vowels = ["a", "e", "i", "o", "u"];

const squareNum = (number) => {return number * number};
const addSum = (a, b) => {return a + b};
const isNumEven = (num) => {return num %2 === 0};
const firstChar = (str) => {return str.charAt(0)};
const strUpper = (str) => {return str.toUpperCase()};
const lastNum = (numbers) => numbers[numbers.length - 1];
const vowCount = (str) => {
    let count = 0;
    str.toLowerCase().split("").forEach(char => {
        if(vowels.includes(char)) count++
    });
    return count;
}
const evenNum = numbers.filter(num => num % 2 === 0);
const doubleNum = numbers.map(num => num + num)
const findNum = numbers.find(num => num >= 10);
const addNums = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)

//console.log(firstChar("deck"));
//console.log(strUpper("hello, world!"));
console.log(addNums);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const grades = [80, 85, 90, 95, 100]

const maxGrade = grades.reduce((a, e) => Math.max(a, e));
const minGrade = grades.reduce((a, e) => Math.min(a, e))

console.log(minGrade);

const numAdd = num => num + num;

setTimeout( () => console.log(numAdd(3)), 3000);
/////////////////////////////////////////////// OBJECT //////////////////////////////////////////////////////////

let person = {
    firstName: "Braylle",
    lastName: "Soberano",
    age: 20,
    isEmployed: false,
    motto: "It is what it is.",
    eat: () => console.log("eating")
};

const person2 = {
    name: "Kiyotaka",
    surname: "Ayanokouji",
    age: 16,
    greet: function(){console.log(`Hello, I am ${this.name} and I'm ${this.age} years old.`)}
}
const newName = person.firstName = "Jossiel"

console.log(person.firstName);
person.eat();
person2.greet();

function Student(name, age, course){
    this.name = name,
    this.age = age,
    this.course = course,
    this.greet = function(){console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)}
};

const student = new Student("Braylle Jossiel Soberano", 20, "BSIT");
console.log(student.name);
student.greet();

const studNameAge = (Student) => console.log(`I am ${Student.name}, and I am ${Student.age} years old.`);
studNameAge(student)

function objectLoop(Student){
    Object.keys(Student).forEach(key => {
        console.log(`${key} : ${Student[key]}`);
    })
}

objectLoop(student);

class Employee{
    constructor(name, age, remarks){
        this.name = name;
        this.age = age ?? 20;
        this.remarks = remarks; 
    };

    display(){
        console.log(`Name : ${this.name}`);
        console.log(`Age : ${this.age}`);
        console.log(`Remarks : ${this.remarks}`);
    };

    updateAge(){
        console.log(`${this.name}'s age will be ${this.age + 10} years old in ten years.`)
    }
};
const employee = new Employee("Braylle", null, "Hardworking");

employee.updateAge();

/////////////////////////////////////////////////////// STATIC ///////////////////////////////////////////////////////////////////////////

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2
    };

    static getCircumference(radius){
        return 2 * this.PI * radius
    };
};

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));

class User{
    static userCount = 0;
    constructor(username, role){
        this.username = username;
        this.role = role ?? "Guest";
        User.userCount++;
    };

    getUserRole(){
        console.log(`${this.username} is a ${this.role}`);
    };

    static getUserCount(){
        console.log(`Users : ${User.userCount}`);
    }
}

const user = new User("gagopapogs05");
const user2 = new User("Raffle_pie");

user.getUserRole();
User.getUserCount();

////////////////////////////////////////////////////////// INHERITANCE ///////////////////////////////////////////////////////////////////////

class Animal{
    // If I make this static, the children classes wouldn't be able to access it.
    isAlive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    };

    sleep(){
        console.log(`This ${this.name} animal is sleeping`);
    };
};

class Dog extends Animal{
    type = "Dog";

    run(){
        console.log(`This ${this.name} can run.`);
    };
};

class Inu extends Dog{
    name = "inu"
}

class Fish extends Animal{
    type = "Fish";

    swim(){
        console.log(`This ${this.type} can swim.`);
    };
};

class Bird extends Animal{
    type = "Bird"

    fly(){
        console.log(`This ${this.type} can fly.`)
    }
}


const dog = new Dog();
const fish = new Fish();
const bird = new Bird();
const inu = new Inu();

dog.run();
fish.swim();
bird.fly();

/////////////////////////////////////////////////////// SUPER //////////////////////////////////////////////////////////////

class Vehicle{
    constructor(name, made){
        this.name = name;
        this.made = made;
    }

    move(speed){
        console.log(`This ${this.name} moves at ${speed} kmh`)
    }
}

class Car extends Vehicle{
    constructor(name, made, driveSpeed){
        super(name, made);
        this.driveSpeed = driveSpeed;
    }

    drive(){
        console.log(`This ${this.name} can traverse on ground.`);
        super.move(this.driveSpeed);
    }
}

class Plane extends Vehicle{
    constructor(name, made, flySpeed){
        super(name, made);
        this.flySpeed = flySpeed;
    }

    pilot(){
        console.log(`This ${this.name} can travel through the sky`);
        super.move(this.flySpeed);
    }
}

class Boat extends Vehicle{
    constructor(name, made, rowSpeed){
        super(name, made);
        this.rowSpeed = rowSpeed;
    }

    row(){
        console.log(`This ${this.name} can travel on sea.`);
        super.move(this.rowSpeed);
    }
}
const car = new Car("Johnson", 2018, 100);
const plane = new Plane("Decepticon", 2010, 200)
const boat = new Boat("Jetski", 2005, 150)

console.log(plane.name)

car.drive();
plane.pilot();
boat.row();

/////////////////////////////////////////////////////// GETTER AND SETTER ////////////////////////////////////////////////////////////////////

class Square{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth>0){
            this._width = newWidth;
        }
        else{
            return console.error(`Width must be a positive number.`)
        }
    }

    set height(newHeight){
        if(newHeight>0){
            this._height = newHeight;
        }
        else{
            return console.error(`Height must be a positive number.`)
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    get area(){
        return this.width * this.height
    }
}

const square = new Square(3, 5)

console.log(`Width : ${square.width} cm`)
console.log(`Height : ${square.height} cm`)
console.log(`Area : ${square.area} cm^2`)

class Worker{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    };

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            return console.error(`First Name must be a non-empty string`);
        };
    };

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            return this._lastName = newLastName;
        }
        else{
            return console.error("Last Name must be a non-empty string")
        };
    };

    set age(newAge){
        if(typeof newAge === "number" && newAge > 0){
            return this._age = newAge;
        }
        else{
            return console.error("Age must be a number greater than 0")
        };
    };

    get firstName(){
        return this._firstName;
    };

    get lastName(){
        return this._lastName;
    };

    get fullName(){
        return `${this._firstName + " " + this._lastName}`;
    };

    get age(){
        return this._age;
    };
}

const worker = new Worker("Braylle", "Soberano", 20);

console.log(worker.firstName)
console.log(worker.lastName)
console.log(worker.fullName)
console.log(worker.age)

/////////////////////////////////////////////////////// DESTRUCTURING ///////////////////////////////////////////////////////

let a = 1;
let b = 2;

[a, b] = [b, a];
console.log( a, b);

const colors = ["white", "orange", "green", "blue", "red"];

[colors[0], colors[4]] = [ colors[4], colors[0]]

console.log(colors);

const subjects = ["ESP", "Filipino", "Science", "English", "Math"]

const [firstSub, secondSub, thirdSub, ...extraSubs] = subjects;

console.log(firstSub);
console.log(secondSub);
console.log(thirdSub);
console.log(extraSubs);

const me = {
    namer: "Braylle",
    surnamer: "Soberano",
    ager: "20",
    schoolYearr: "3rd"
}

const you = {
    namer: "keng",
    surnamer: "garser",
    ager: 21
}

const {namer, surnamer, ager, schoolYearr="drop out"} = you;

console.log(namer, surnamer, ager, schoolYearr);


const person = {
    name: "Braylle",
    surname: "Soberano",
    age: 20,
    schoolYear: "3rd"
}

const person2 = {
    name: "NotBraylle",
    surname: "NotSoberano",
    age: 25,
}

const display = ({name, surname, age, schoolYear="drop out"}) => {
    console.log(`Name : ${name} ${surname}`);
    console.log(`Age : ${age}`);
    console.log(`School Year : ${schoolYear}`);
}

display(person2);

/////////////////////////////////////////////////////// NESTED OBJECTS ///////////////////////////////////////////////////////
const me = {
    name: "Braylle",
    hobbies: ["Coding", "Sleeping", "Gaming"],
    address: {
        street: "18 Maligaya",
        baranggay: "Gulod",
        city: "Quezon"
    }
};

console.log(me.address.street);

for(const property in me.address){
    console.log(me.address[property]);
};
class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address) 
    }
}

class Address{
    constructor(street, baranggay, city){
        this.street = street;
        this.baranggay = baranggay;
        this.city = city;
    }
}

const me = new Person("Braylle", 20, "18 Maligaya St.", "Gulod", "Quezon City");

const displayPerson = (Person) => {
    console.log(`Name : ${Person.name}\n Age : ${Person.age}\n`)
    for(const property in Person.address){
        console.log(Person.address[property]);
    }
}

displayPerson(me);

/////////////////////////////////////////////////////// PUSH/POP/SPLICE MENTIONEEDD ///////////////////////////////////////////////////////

const cars = [
                {brand: "Toyota", made: 2020, speed: "90pmh"},
                {brand: "Ferrari", made: 2021, speed: "200mph"},
                {brand: "McLarren", made: 2022 , speed:"150mph"},
                {brand: "Lamborghini", made: 2020, speed: "200mph"}
            ]

console.log(cars[2].brand);
cars.push({brand: "Johnson", made: 2024, speed: "190mph"});
cars.pop();
cars.splice(1,2);

/////////////////////////////////////////////////////// FOREACH/MAP/FILTER/REDUCE MENTIONEEDD ///////////////////////////////////////////////////////

cars.forEach(car => console.log(car.brand, car.made, car.speed))

const carBrands = cars.map( car => car.brand)
const carMade = cars.map(car => car.made)
const carSpeed = cars.map(car => car.speed)
console.log(`Brands : ${carBrands}\nSpeed : ${carSpeed} \nMade: ${carMade} `)
const fastestCar = cars.filter(car => car.made === 2020)

const latestMade = cars.reduce((latest, car) => latest.made > car.made ? latest : car)
console.log(latestMade)
/////////////////////////////////////////////////////// SORT //////////////////////////////////////////////////////////////////////////////////////////////////////////////

//cars.sort((latest, car) => latest.made - car.made)
const oldestModel = cars.reduce((oldest, car) => car.made < oldest.made ? car : oldest)
console.log(cars)

const people = [
    {name: "Sel", age: 60, gpa: 1},
    {name: "Soberano", age: 50, gpa: 1.5},
    {name: "Calingasan", age: 40, gpa: 2},
    {name: "Jossiel", age: 30, gpa: 3},
    {name: "Braylle", age: 20, gpa: 4},
]

//people.sort((personA, personB) => personA.age - personB.age)
people.sort((personA, personB) => personA.name.localeCompare(personB.name))
console.log(people)
/////////////////////////////////////////////////////// SHUFFLING ARRAY //////////////////////////////////////////////////////////////////////////////////////////////////////////////

const cards = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

shuffle(cards)

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}

console.log(cards)

/////////////////////////////////////////////////////// DATE //////////////////////////////////////////////////////////////////////////////////////////////////////////////

const date = new Date(2025, 0, 1, 2, 3, 4)
console.log(date)


/////////////////////////////////////////////////////// CLOSURE //////////////////////////////////////////////////////////////////////////////////////////////////////////////

const outer = (name) => {

    const inner = () => console.log(name);

    inner()
}

outer("Braylle")

function Counter(){
    let count = 0; 

    const increment = () => {
        count++;
        console.log(`Count = ${count}`)
        return count
    }

    const currentCount = () => count;

    return {increment, currentCount};
}
const counter = new Counter();

counter.increment();
counter.increment();

console.log(`The current count is ${counter.currentCount()}`);

function Scores(){
    let score = 0;

    const addScore = (points) => {
        score += points;
    }

    const gameOver = () => score = 0;

    const displayScore = () => console.log(`Score: ${score}`)

    return {addScore, gameOver, displayScore}
}

const scores = new Scores();
scores.addScore(10);
scores.addScore(10);
scores.gameOver();
scores.displayScore();

/////////////////////////////////////////////////////// SETTIMEOUT AND CLEARTIMEOUT //////////////////////////////////////////////////////////////////////////////////////////////////////////////


const btn = document.getElementById("clickBtn");
const btnCancel = document.getElementById("cancelBtn")
const value = document.getElementById("count");

function countDown(){
let timeSpan = 3000;
let newValue = Number(value.textContent);
const setTime = () => timeoutId = setTimeout(() => alert("Hi"), timeSpan);
const cancelTime = () => clearTimeout(timeoutId);
const decrement = () => {
        while(newValue>=0){
            value.textContent = newValue;
            console.log(newValue);
            newValue--;
        }
}
return {setTime, cancelTime, decrement}
};
const countdown = new countDown();

btn.addEventListener("click", () => {
    countdown.setTime();
    countdown.decrement();
});

btnCancel.addEventListener("click", () => countdown.cancelTime());
*/