const fish = {id:58, name: 'King Hilsha', price: 9000, phone: '01785858888', address: 'Chandpur', dress:'silver'}

// const name = fish.name;
// const phone = fish.phone;
// const id = fish.id;

const {name, phone, id, dress } = fish;
console.log(name);
console.log(phone);
console.log(id);
console.log(dress);

const company = {name: 'GP',
    ceo: {id: 1, ceoName: 'xyz', favFood: 'Chicken'},
    webDept: {work: 'web dev', employee: 22, framework: 'React'}};

// company er moddhe ceo te jabo & ceo er moddhe ceo er name access korbo.
const ceoNames = company.ceo.ceoName;
console.log(ceoNames);

const {ceoName,favFood} = company.ceo;
console.log(ceoName, favFood);