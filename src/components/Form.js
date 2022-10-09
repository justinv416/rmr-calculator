import React from 'react'

const Form = (props) => {
  return (
    <div>
        <form action="" onSubmit={props.handleSubmit}>
            <label htmlFor="wight-input">Weight(KG):</label>
            <input id='weight-input' type="text" value={props.inputWeight} onChange={props.handleWeightInput} />
            <label htmlFor="height-input">Height(CM):</label>
            <input id='height-input' type="text" value={props.inputHeight} onChange={props.handleHeightInput} />
            <label htmlFor="age-input">Age(in Years):</label>
            <input id='age-input' type="text" value={props.inputAge} onChange={props.handleAgeInput} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form