import { A } from '@solidjs/router';
import logoIcon from '../assets/logo/solar_transparent.png';
import logoName from '../assets/logo/name_transparent.png';




function TopBar() {
  return (
    /* .navbar:
      - flex, justify-between, items-center: Direct match
      - h-16: Replaced 'height: 8vh' with a stable 4rem height
      - bg-[#222]: Your dark gray color
      - border-b border-[#444]: Replaced border-bottom
      - shadow-md: Replaced box-shadow
      - px-6: Replaced 'padding: 0' and added horizontal padding
             (replaces the 'vh' margins on the children)
    */
    <nav class="flex items-center justify-between h-16 border-b border-[#444] bg-[#222] px-6 shadow-md">
      
      {/* .nav-logo-link */}
      <A href="/home" class="flex items-center no-underline">
        {/* .nav-logo-icon (Replaced 4vh with h-10 (2.5rem)) */}
        <img 
          src={logoIcon} 
          alt="SolarCode Icon" 
          class="h-10" 
        />
        {/* .nav-logo-name (Replaced 4vh with h-8 (2rem)) */}
        <img 
          src={logoName} 
          alt="SolarCode Name" 
          class="h-8" 
        />
      </A>

      {/* .nav-links (Replaced 3vh gap with gap-8 (2rem)) */}
      <ul class="flex list-none gap-8 p-0">
        <li>
          {/* .nav-link (Using your yellow for hover) */}
          <A 
            href="/home" 
            class="no-underline text-gray-200 font-medium transition-colors duration-200 ease-in-out hover:text-[#f5eb6d]"
          >
            Home
          </A>
        </li>
        <li>
          <A 
            href="/about" 
            class="no-underline text-gray-200 font-medium transition-colors duration-200 ease-in-out hover:text-[#f5eb6d]"
          >
            About
          </A>
        </li>
        <li>
          <A 
            href="/support" 
            class="no-underline text-gray-200 font-medium transition-colors duration-200 ease-in-out hover:text-[#f5eb6d]"
          >
            Support
          </A>
        </li>
      </ul>
    </nav>
  );
}

export default TopBar;