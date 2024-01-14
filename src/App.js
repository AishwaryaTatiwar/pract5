import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
// This is assignment
function App() {
  const[weight,setWeight]=useState(0);
  const[height,setHeight]=useState(0);
  const[bmi,setBmi]=useState('');
  const[message,setMessage]=useState('');
  
  let calculateBmi=(event)=>{
    event.preventDefault();
    if(weight==0||height==0){
      alert("invalid input");
    }
    else{
      let bmi=(weight/(height/100)**2);
      setBmi(bmi.toFixed(2))

      if(bmi<18.5){
        setMessage("You are underweight")
      }else if(bmi>=18.5 && bmi<=24.9){
        setMessage("You are healthy.")
      }else if(bmi>=25 && bmi<=29.9){
        setMessage("You are Overweight")
      }else{
        setMessage("You are obese")
      }
    }
   
  }
  return (
    <div className="App">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calculateBmi}>
          <div>
            <label>Weight(Kg)</label>
            <input value={weight} onChange={(e)=> setWeight(e.target.value)}></input>
          </div>
          <div>
            <label>Height(cm)</label>
            <input value={height} onChange={(e)=> setHeight(e.target.value)}></input>
          </div>
          <button className='btn' type="submit">Submit</button>
          <button className='btn' type="submit">Calculate</button>
        </form>
        <div className="center"><h3>Your BMI is: {bmi}</h3></div>
        <div className="m"><h4>{message}</h4></div>
      </div>
    </div>
  );
}

export default App;
