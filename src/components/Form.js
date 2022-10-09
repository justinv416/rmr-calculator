import React from 'react'

const Form = (props) => {
  return (
    <div className='form-container'>
        <form className='input-form' action="" onSubmit={props.handleSubmit}>
            <label htmlFor="wight-input">Weight(KG):</label>
            <input 
              className="input" 
              id='weight-input' 
              type="text" 
              value={props.inputWeight} 
              onChange={props.handleWeightInput} 
            />
            <label htmlFor="height-input">Height(CM):</label>
            <input 
              className="input" 
              id='height-input' 
              type="text" 
              value={props.inputHeight} 
              onChange={props.handleHeightInput} 
            />
            <label htmlFor="age-input">Age(in Years):</label>
            <input 
              className="input" 
              id='age-input' 
              type="text" 
              value={props.inputAge} 
              onChange={props.handleAgeInput} 
            />
            <button className="button" type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form