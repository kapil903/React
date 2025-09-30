import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const username = "Kapil"

const reactElement = React.createElement(
  'a',
  {href :"https://www.google.com", target : '_blank'},
  'click to visit google',
  username
)

createRoot(document.getElementById('root')).render
(
  
    reactElement

)
