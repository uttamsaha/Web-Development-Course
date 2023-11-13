//primtive 
let a = 'hello';
let b = a;
a = 'gello';
console.log(a, b);
//primtive data type e kono notun kore assign korle setai thake. jemon ekhane a = 'hello' chilo age then b = a, so b er value hello a er value o hello kintu pore a = 'gello' assign kora holo sekhtree a er value gello hoie gelo.

//non primtive
const x = {job: 'web developer'};
const y = x;
x.job = 'font end web developer';
console.log(x, y);
// Ekhane x er job web developer assign kora holo then y = x so y er value o web developer holo kintu x.job = mane x er job 'font end web developer set kora holo then age j y = x kora hoisilo sekhane y = 'font end web delvoper' hoie jabe. ekhane ekta refference akare change hoi...