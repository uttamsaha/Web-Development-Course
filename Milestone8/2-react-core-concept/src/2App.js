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
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>

      <h4>New Component: </h4>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person() {
  return (
   <div className='person'>
    <h1>Shakib Al Hasan</h1>
    <p>Job: Cricketer</p>
   </div>
  );
}


function Friend(){
  return (
    <div className='person'>
      <h3>Name: Ajay Debgun</h3>
      <p>Job: Maramari</p>
    </div>
  )
}

export default App;
