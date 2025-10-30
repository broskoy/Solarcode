import { A } from '@solidjs/router';
import logoIcon from './assets/logo/solar_transparent.png';
import logoName from './assets/logo/name_transparent.png';
import './Navbar.css';




function Navbar() {
  return (
    <nav class="navbar">
      {/* Logo Section (Left) */}
      <A href="/" class="nav-logo-link">
        <img 
          src={logoIcon} 
          alt="SolarCode Icon" 
          class="nav-logo-icon" 
        />
        <img 
          src={logoName} 
          alt="SolarCode Name" 
          class="nav-logo-name" 
        />
      </A>

      {/* Navigation Links (Right) */}
      <ul class="nav-links">
        <li><A href="/" class="nav-link">Home</A></li>
        <li><A href="/about" class="nav-link">About</A></li>
        <li><A href="/support" class="nav-link">Support</A></li>
      </ul>
    </nav>
  );
}

export default Navbar;