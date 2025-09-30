import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let value = 0;

const addValue = () =>{
  console.log("Clicked", value);
  value = value + 1
  setCount(value)
}
const removeValue = () =>{
  console.log("Clicked", value)
  value = value - 1
  setCount(value)
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Counter</h1>
      <h2>count: {value}</h2>
      <button onClick={addValue}>
        Add Value
      </button>
      <br />
      <button onClick={removeValue}>
        Remove Valaue
      </button>
    </>
  )
}

export default App
