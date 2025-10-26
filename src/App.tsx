import { createSignal } from 'solid-js'
import solidLogo from './assets/frameworks/solid.svg'
import viteLogo from './assets/frameworks/vite.svg'
import solarLogo from './assets/logo/solar_transparent.png'; 
import nameLogo from './assets/logo/name_transparent.png';
import './App.css'




function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <div class="image-container">
        <img 
          src={solarLogo} 
          alt="solar" 
          class="logo-solar-image" 
        />
        <img 
          src={nameLogo}
          alt="solarcode" 
          class="logo-text-image" 
        />
      </div>

      <div class="card">
        <button onClick={() => setCount((count) => (count + 1))}>
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
