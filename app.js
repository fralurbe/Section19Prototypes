class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return (`${this.name} is eating`)
    }
}

class Cat extends Animal {
    constructor (name, age, lives = 7){
        super(name, age);
        this.lives = lives;
    }
    meow() {
        return console.log(`${this.name} says meow!`);
    }   
}

// const body = document.body;
// String.prototype.yell = () => {
//     console.log(this.toUpperCase());
// }

// Array.prototype.pop = function() {console.log('Hola que tal')};
// "rgb(255,0,0)"
// "rgb(255,0,0,138)"
// "#ff0000"
// "hsl(180,50%, 30%)"

// const myObj = () => {}
// function makeColor(r,g,b){
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//         const {r, g , b} = this;
//         return `rgb(${r}, ${g}, ${b}`;
//     }
//     return color;
// }

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;        
        this.name = name;
    }

    rgb = function () {
        return(console.log(`(${this.r}, ${this.g}, ${this.b})`));
    }
}

const c1 = new Color(255, 32, 32, 'tomato');

