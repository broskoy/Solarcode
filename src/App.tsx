import { createSignal } from 'solid-js'
import solidLogo from '/public/frameworks/solid.svg'
import viteLogo from '/public/frameworks/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = createSignal(1);

  return (
    <>
      <div class="image-container">
        <img 
          src="/public/logo/solar_transparent.png" 
          alt="solar" 
          class="logo-solar-image" 
        />
        <img 
          src="/public/logo/name_transparent.png" 
          alt="solarcode" 
          class="logo-text-image" 
        />
      </div>

      <div class="card">
        <button onClick={() => setCount((count) => (2*count))}>
          Clicks: {count()}
        </button>
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
    </>
  );
}

export default App
