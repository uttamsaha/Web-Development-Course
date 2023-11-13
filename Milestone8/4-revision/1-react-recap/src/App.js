import { useEffect, useState } from 'react';
import './App.css';

const css={
  backgroundColor:'lightblue',
  padding:'10px',
  margin:'10px'
}
function App() {

  return (
    <div className="App">
      <Friends name={'Uttam'} gender={'Male'}></Friends>
      <Friends name={'Komol'} gender={'Male'}></Friends>
      <LoadComments></LoadComments>
    </div>
  );
}

const Friends = (props) => {
  const [power, setPower] = useState(1)
  const IncreasePower = () => setPower(power * 2)

  return (
    <div style={css}>
      <h2>Name: {props.name} </h2>
      <p>Gender: {props.gender} </p>
      <h4>Power: {power}</h4>
      <button onClick={IncreasePower}>Boost Power</button>
    </div>
  )
}

const LoadComments = () => {
  const [comments, setComments] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data))
  },[])

  return (
    <div>
      {
        comments.map(comment => <Comment comments = {comment}></Comment>)
      }
    </div>
  )
}

const Comment = (props) => {
  console.log(props);
  const {name, email, body} = props.comments;
  return (
    <div style={css}>
      <h4>UserName: {name}</h4>
      <h5>Email: {email}</h5>
      <p>{body}</p>
    </div>
  )
}
export default App;
