import logo from './logo.svg';
import './App.css';


const singers = [
  {name: 'Dr. Mahfuz', job: 'Singer'},
  {name: 'Eva Rahaman', job: 'Singer'},
  {name: 'Komol Saha', job: 'singer'},
  {name: 'Agun', job: 'Singer'}
]
const nayoks = ['Rubel', 'BappaRaz', 'Kuber', 'komol']
function App() {
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }

 <h4>New Component: of singer </h4>
      {
        singers.map(singer => <Friend name={singer.name} job={singer.job}></Friend>)
      }

     

    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
   <div className='person'>
    <h1>{props.name}</h1>
    <p>{props.naika}</p>
   </div>
  );
}


function Friend(props){
  console.log(props)
  return (
    <div className='person'>
      <h3>Name: {props.name}</h3>
      <p>Job: {props.job}</p>
    </div>
  )
}

export default App;
