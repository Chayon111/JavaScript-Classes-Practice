// JavaScript Classes Practice

class Friends{
    constructor(name, age, study) {
        this.name = name;
        this.age = age;
        this.study = study;
    }
    bestF = (color) => {
        console.log(`${this.name} is my best friend. He is ${this.age} years old. And he is complete ${this.study} His color is ${color}`);
    }
    childhooldF = () => {
        console.log(`${this.name} is my childhood friend. He is ${this.age} years old. And he is complete ${this.study}`);
    }
}

const sakib = new Friends("Sakib", 30, "gradguete.");
const rakib = new Friends("Rakib", 25, "HSC.");

sakib.bestF("white.");
rakib.childhooldF();

