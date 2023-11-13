import logo from './logo.svg';
import './App.css';


const number = 5555;
const singer = {name: 'Dr Fazurl Haque', job:'Singer'};
const singer2 = {name: 'Komol Saha', job:'Singer'};

const musicSytle = {
  color: 'red',
  border: '1px solid green',
  padding: '20px',
  backgroundColor: 'white'
};

function App() {
  return (
    <div className="App">
      <Person name="Uttam Kumar" naika = "suchitra sen"></Person>
      <Person name="BappaRaz" naika ="Ceka"></Person>
      <Person name="kuber majhi" naika="kopila"></Person>
      

      <h4>New Component: </h4>
      <Friend phone="017777"></Friend>
      <Friend phone="019999"></Friend>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
   <div className='person'>
    <h1>{props.name}</h1>
    <p>Naika: {props.naika}</p>
   </div>
  );
}


function Friend(props){
  console.log(props)
  return (
    <div className='person'>
      <h3>Name: Ajay Debgun</h3>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
