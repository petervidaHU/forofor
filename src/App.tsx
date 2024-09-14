import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import * as x from '@stylexjs/stylex';

const s = x.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'red',
  },
  logo: {
    height: '6em',
    padding: '1.5em',
    willChange: 'filter',
    transition: 'filter 300ms',
  },
  logoHover: {
    filter: 'drop-shadow(0 0 2em #646cffaa)',
  }
});


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div {...x.props(s.container)}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
         fffffff count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
