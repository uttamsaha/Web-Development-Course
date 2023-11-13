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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* My work start  */}
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello dude How are you?</h3>
        </div>

        <div className="music">
          <p>Name: {number}</p>
          <p style={{color:'red', backgroundColor:'yellow'}}>Singer Name: {singer.name}</p>
          <p>Job: {singer.job}</p>
          <p style = {musicSytle}>Singer2: {singer2.name} {singer2.job}</p>
        </div>
      </header>
    </div>
  );
}


export default App;
