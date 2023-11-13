//1. JSON
const student = {
    name:'salib khan',
    age:32,
    movies: ['King khan', 'Dhakar mastan']
}

//convert objecct to JSON
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

//convert JSON to object
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

//2. fetch
// fetch('url')
// .then(response => response.json())
// .then(data => console.log(data))

//3. kono object theke object er keys nibo. (kyes, values)

const keys = Object.keys(student);
const values = Object.values(student);

//
const products = [
    {name: 'laptop', price:32000, brand:'lenovo', color:'silver' },
    {name: 'phone', price:7000, brand:'Iphone', color:'silver' },
    {name: 'Watch', price:3000, brand:"casio", color:'golden' },
    {name: 'Sunglass', price:300, brand:'ribon', color:'black' },
    {name: 'Camera', price:9000, brand:'Canon', color:'silver' }
];

const newProduct = {name:'WebCam', price: 300, brand: 'lal'};

const newProducts = [...products, newProduct];
console.log(newProducts);


//phone product k bad diye array banabo...//jetar nam phone na phone item bade baki sob nicchi..
const specifiedProduct = products.filter(product => product.name!=='phone');
console.log(specifiedProduct);
