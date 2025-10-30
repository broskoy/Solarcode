

import solarLogo from '../assets/logo/solar_transparent.png'; 
import nameLogo from '../assets/logo/name_transparent.png';

import Solutions from './solutions/Solutions';

import './Home.css'





function Home() {
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

      <Solutions />

      
    </>
  );
}

export default Home
