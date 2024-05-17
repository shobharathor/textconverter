import React, { useReducer } from 'react'
import './Body.css';

const Body = ( { darkMode } ) => {

  const reducer = (state,action) => {
    // note: react relies on immutable updates to trigger re-renders 
    switch (action.type) {
      case 'uppercase': {
        return {
          ...state, // Spread the current state to avoid mutation
          inputValue: state.inputValue.toUpperCase() // Update the inputValue property
        };
      }
      case 'lowercase': {
        return {
          ...state,
          inputValue: state.inputValue.toLowerCase()
        };
      }
      case 'clear': {
        return {
          ...state,
          inputValue: ''
        };
      }
      case 'copy': {
        navigator.clipboard.writeText(state.inputValue);
        alert("Text copied to clipboard :)");
        return state;
      }
      case 'remove-extra-spaces': {
        return {
          ...state,
          inputValue: removeExtraSpaces(state.inputValue)
        }
      }
      case 'onChange': {
        return {
          ...state,
          inputValue: action.payload,
          words: countWords(action.payload),
          characters: action.payload.length,
          readingTime: findReadingTime(action.payload)
        }
      }
      default: {
        return state;
      }
    }

  }

  const [state,dispatch] = useReducer(reducer,{inputValue: '', words: 0, characters: 0, readingTime: 0, showAlert: false});

  function removeExtraSpaces (input) {
    const str = input.trim();
    const arr = str.split(' ');
    let newStr = '';
    for (let idx = 0; idx < arr.length; idx++) {
      if (arr[idx] !== '' && idx === arr.length-1) newStr += arr[idx];
      else if (arr[idx] !== '') newStr += arr[idx] + " ";      
    }
    return newStr;
  }

  function countWords (input) {
    const str = removeExtraSpaces(input);
    const arr = str.split(' ');
    const words = arr.length;

    if (arr[0] === '') return 0;
    return words;
  }

  function findReadingTime (input) {
    const words = countWords(input);
    const readingTime = words/200;
    return readingTime;
  }

  return (
    <section className='body' style={darkMode ? {color: "white"} : {color: "black"}}>

      <div className='body-background' style={darkMode ? {backgroundColor: "gray"} : {backgroundColor: "white"}}></div>

      {darkMode && <div className='alert-box'><span>Success:</span> {darkMode ? 'Dark' : 'Light'} mode has been enabled</div>}

      <main>
      
        <h1>TextUtils - Word Counter, Character Counter, Remove Extra Space</h1>
      
        <div className='text-editor'>
          <h3>Enter your text here:</h3>
          <textarea style={darkMode ? {backgroundColor: "#3A3B3C", color: "white"} : {backgroundColor: "white"}} value={state.inputValue} onChange={(e)=>dispatch({type: 'onChange', payload: e.target.value})}></textarea>
          <div className='buttons'>
            <button onClick={()=>dispatch({type: "uppercase"})}>Convert Uppercase</button>
            <button onClick={()=>dispatch({type: 'lowercase'})}>Convert Lowercase</button>
            <button onClick={()=>dispatch({type: 'clear'})} style={{backgroundColor:"red"}}>Clear Text</button>
            <button onClick={()=>dispatch({type: 'copy'})} style={{backgroundColor:"green"}}>Copy To Clipboard</button>
            <button onClick={()=>dispatch({type: 'remove-extra-spaces'})}>Remove Extra Spaces</button>
          </div>
        </div>

        <div className='summary'>
          <h1>Summary Of Your Text</h1>
          <p>Number of words : {state.words}</p>
          <p>Number of characters : {state.characters}</p>
          <p>Reading Time : {state.readingTime} minutes</p>
        </div>
        
        <div className='preview'>
          <h2>Preview Document</h2>
          <textarea style={darkMode ? {backgroundColor: "#3A3B3C", color: "white"} : {backgroundColor: "white"}} value={state.inputValue} readOnly onChange={()=>console.log('typed')}></textarea>
        </div>
      
      </main>

    </section>
  )
}

export default Body;