import { useState } from 'react'
import reactLogo from '/assets/react.svg'
import Calculator from './calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Calculator />  
    </>
  )
}

export default App
