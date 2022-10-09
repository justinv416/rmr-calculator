import './App.css';
import Form from './components/Form';
import { useState } from 'react';


function App() {
  const [inputWeight, setInputWeight] = useState("");
  const [inputHeight, setInputHeight] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [maleRmr, setMaleRmr] = useState("");
  const [femaleRmr, setFemaleRmr] = useState("");
  const [showGender, setShowGender] = useState(false);
  const [maleGender, setMaleGender] = useState(false);
  const [femaleGender, setFemaleGender] = useState(false);

  const handleWeightInput = (e) => {
    setInputWeight(parseInt(e.target.value));
  }
  
  const handleHeightInput = (e) => {
    setInputHeight(parseInt(e.target.value));
  }

  const handleAgeInput = (e) => {
    setInputAge(parseInt(e.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (maleGender) {
      setMaleRmr((10 * inputWeight) + (6.25 * inputHeight) - (5 * inputAge) + 5) 
    } else if (femaleGender) {
      setFemaleRmr((10 * inputWeight) + (6.25 * inputHeight) - (5 * inputAge) - 161) 
    }
  }

  const handleShowGender = () => setShowGender(true); 

  const handleShowformMale = () => {
    setMaleGender(true);
    setShowGender(false)
    setShowForm(true);
  }

  const handleShowformFemale = () => {
    setFemaleGender(true);
    setShowGender(false);
    setShowForm(true);
  }

  return (
    <div className="App">
      <h1>RMR Calculator</h1>
      <h2>Trying to lose weight?</h2>
      <button onClick={handleShowGender}>Get Started</button>
      {showGender && <div className="">
        <h3>Are you...</h3>
        <button onClick={handleShowformMale}>Male</button>
        <button onClick={handleShowformFemale}>Female</button>
      </div>}
      {showForm && <Form 
        handleWeightInput={handleWeightInput} 
        handleHeightInput={handleHeightInput} 
        handleAgeInput={handleAgeInput} 
        handleSubmit={handleSubmit} 
      />}
      <p>{inputWeight}</p>
      <p>{inputHeight}</p>
      <p>{inputAge}</p>
      <p>Male RMR:{maleRmr}</p>
      <p>Female RMR:{femaleRmr}</p>
    </div>
  );
}

export default App;
