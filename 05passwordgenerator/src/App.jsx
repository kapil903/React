import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //Ref Hook
  const passwordref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) string += "0123456789"
    if (charactersAllowed) string += "!@#$%^&*()+-_{}"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charactersAllowed, setPassword])

  const copypasswordtoClipboard = useCallback(() => {
    if (passwordref.current) {
      passwordref.current.select();
      passwordref.current.setSelectionRange(0, 999);
    }
    window.navigator.clipboard.writeText(password)
  }, [password]);

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-linear-to-br from-gray-900 via-gray-800 to-gray-700 rounded-xl shadow-lg border border-gray-700 p-6 text-white">
        <h1 className="text-2xl font-semibold text-center mb-3">Password Generator</h1>
        <div className="mb-4 flex flex-row">
          <input
            type="text"
            value={password}
            className="w-full bg-gray-900 text-green-300 font-mono text-lg border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Password"
            readOnly
            ref={passwordref}
          />
          <button
            onClick={copypasswordtoClipboard}
            className='focus:outline-none focus:ring-2 focus:ring-orange-400'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charactersAllowed}
              id='numberInput'
              onChange={() => {
                setCharactersAllowed((prev) => !prev)
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
