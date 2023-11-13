class Support {
    name;
    role = 'Support Web Dev';
    address;
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'Start a support session');
    }
}

const amir = new Support('Amir', 'BD');
const salman = new Support('Salman', 'UK');
console.log(amir);
console.log(salman);
amir.startSession();