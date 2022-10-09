import './App.css';
import Form from './components/Form';
import { motion } from 'framer-motion';
import { useState } from 'react';


function App() {
  const [inputWeight, setInputWeight] = useState("");
  const [inputHeight, setInputHeight] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showStart, setShowStart] = useState(true);
  const [maleRmr, setMaleRmr] = useState("");
  const [femaleRmr, setFemaleRmr] = useState("");
  const [showGender, setShowGender] = useState(false);
  const [maleGender, setMaleGender] = useState(false);
  const [femaleGender, setFemaleGender] = useState(false);
  const [showRmr, setShowRmr] = useState(false);

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
    setShowRmr(true);
  }

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

  const handleShowStart = () => {
    setShowGender(true);
    setShowStart(false);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="content-container">
          <motion.h1 animate={{y: -20, opacity: 1}} initial={true}>Low-Cal</motion.h1>
          {showStart && <h2>Trying to lose weight?</h2>}
          {showStart && <button className="button" onClick={handleShowStart}>Get Started</button>}
          {showGender && 
            <div>
              <h3>Are you...</h3>
              <button className="button" onClick={handleShowformMale}>Male</button>
              <button className="button" onClick={handleShowformFemale}>Female</button>
            </div>
          }
          {showForm && <h2>Fill in the form</h2>}
          {showForm && <Form 
            handleWeightInput={handleWeightInput} 
            handleHeightInput={handleHeightInput} 
            handleAgeInput={handleAgeInput} 
            handleSubmit={handleSubmit} 
          />}
          {showRmr && <p>Your resting metabolic rate is:</p>}
          {maleGender ? <p>{maleRmr}</p> : <p>{femaleRmr}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
