import { useState } from 'react' //Importing Hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(14) //Hooks

  const addValue = () => {
    console.log("Clicked", count);
    count = count + 1
    setCount(count)
  }

  const removeValue = () => {
    console.log("Clicked", count)
    count = count - 1
    setCount(count)
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>count: {count}</h2>
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
