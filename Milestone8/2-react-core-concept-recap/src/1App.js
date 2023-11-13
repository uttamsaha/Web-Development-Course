import logo from './logo.svg';
import './App.css';

const products = [
  {name: 'Watch', price: 200},
  {name: 'Apple TV', price: 300},
  {name: 'Lg TV', price: 300},
  {name: 'Samsung TV', price: 300}
]
function App() {
  return (
    <div className="App">
     <Product name="Laptop" price="200"></Product>
     <h4>New products</h4>
     {
       products.map(product => <Product name={product.name} price = {product.price}></Product>)
     }
    </div>
  );
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name:{props.name} </h3>
      <p>Price:{props.price} </p>
    </div>
  )
}

export default App;
