import React from 'react'
import ReactDOM from 'react-dom'
import { Main } from './Main'

const domRoot = document.querySelector("#root")
const root = ReactDOM.createRoot(domRoot)
root.render(<React.StrictMode><Main /></React.StrictMode>)