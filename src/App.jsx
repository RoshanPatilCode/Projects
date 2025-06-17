import { useState } from 'react'
import "./App.css";
import MainApp from './Components/MainApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <MainApp></MainApp>
    </>
  )
}

export default App
