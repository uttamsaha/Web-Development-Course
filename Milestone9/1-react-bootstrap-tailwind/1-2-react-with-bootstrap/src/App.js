import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import CardGroups from './components/CardGroups/CardGroups';


function App() {
  return (
    <div className="App">
      <Button variant="dark">My button</Button>
      <br></br>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <CardGroups></CardGroups>
    </div>
  );
}

export default App;
