import solidLogo from '../assets/frameworks/solid.svg'
import viteLogo from '../assets/frameworks/vite.svg'
import plusImage from '../assets/frameworks/plus.png'

import solarLogo from '../assets/logo/solar_transparent.png'; 
import nameLogo from '../assets/logo/name_transparent.png';

import Solutions from './solutions/Solutions';

import './Home.css'
import Navbar from '../Navbar';





function Home() {
  return (
    <>
      <Navbar/>

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

      <Solutions />

      <div class="frameworks">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>

        <img src={plusImage} class="separator" alt="plus" />

        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
    </>
  );
}

export default Home
