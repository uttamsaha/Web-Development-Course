//create object using literal
const student = { name: 'Shakib Al Hasan', job: 'cricketer'};

//create object using constructor
const person = new Object();
console.log(person);

//
const human = Object.create(null);

//ekhane-> ekta object create hocce humans name e & .create() er moddhe student pass kora hoise. so student ekhane parent object r human child object ekhane inheritance hocce student object k inherit korche humans object that’s why student er sob property humans object access korte parbe.
const humans = Object.create(student);
console.log(student.job);


//class make kore class theke object make kora jai.
class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const peoples = new People('Manus', 12);
console.log(peoples);

//make object using function
function pop(name){
    this.name = name;
}
const man = new pop('Kader');
console.log(man);
