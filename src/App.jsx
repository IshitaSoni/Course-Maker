import { useState } from 'react'
import Roadmap from './components/Roadmap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Roadmap!</h1>
      <Roadmap />
    </>
  )
}

export default App
