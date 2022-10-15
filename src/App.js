import './App.css';
import Form from './components/Form';
import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';
import Card from './components/Card';

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
  const [recipes, setRecipes] = useState([]);
  const [showRecipes, setShowRecipes] = useState()
  const reqUrl = `https://api.edamam.com/api/recipes/v2?type=public&calories=300&app_id=3f541443&app_key=dec10585058602ee6f860f4779654260`

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

  const handleFetchRecipes = () => {
    axios.get(reqUrl).then((res) => {
      setRecipes(res.data.hits);
      setShowRecipes(true)
      console.log(recipes)
    })
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="content-container">
          <motion.h1 animate={{y: -10, opacity: 1}} initial={true}>Low-Cal</motion.h1>
          {showStart && <motion.h2 animate={{y: -10}}>Trying to lose weight?</motion.h2>}
          {showStart && <button className="button" onClick={handleShowStart}>Get Started</button>}
          {showGender && 
            <div className='gender-container'>
              <h3>Are you...</h3>
              <button className="button gender-button" onClick={handleShowformMale}>Male</button>
              <button className="button gender-button" onClick={handleShowformFemale}>Female</button>
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
          {showRmr && <button className='button' onClick={handleFetchRecipes}>Get low cal recipes</button>}
          {showRecipes && recipes.map((recipe) => {
              return <Card recipe={recipe} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
