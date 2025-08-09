import { useState } from 'react'
import jpsLogo from './assets/JPs-logo.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://jpswineandspirits.com/" target="_blank">
          <img src={jpsLogo} className="logo" alt="JPs logo" />
        </a>
        <a href="#" onClick={e => e.preventDefault()}>
          <img src={jpsLogo} className="logo" alt="JPs logo" />
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
        Click on the left JP's logo to access our site!
      </p>
    </>
  )
}

export default App
