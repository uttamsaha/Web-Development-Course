//array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

const [x, y] = numbers;
console.log(x, y);


function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}
const result = boxify(1, 2);
console.log(result);


//object destructruing
const {name, age} = {name: 'alu', age:14};
const {salary} = {id:12, name:'Alu', salary:20000, age:15};
console.log(salary);

const employee = {
    ide: 'VS code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'javascript'],
    specification: {
        weight:56,
        address: 'pabna',
        driking: 'water'
    }
}

const{machine, ide} = employee;

const {weight, address} = employee?.specification;
console.log(machine, ide, weight, address);