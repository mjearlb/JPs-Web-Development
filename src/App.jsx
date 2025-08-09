import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://jpswineandspirits.com/" target="_blank">
          <img src="/JPs-logo.jpg" className="logo" alt="JPs logo" />
        </a>
        <a href="#" onClick={e => e.preventDefault()}>
          <img src="/JPs-logo.jpg" className="logo" alt="JPs logo" />
        </a>
      </div>
      <h1>JP's Fine Wine and Spirits</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
