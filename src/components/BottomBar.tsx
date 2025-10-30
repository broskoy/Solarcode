import { A } from '@solidjs/router';
import solidLogo from '../assets/frameworks/solid.svg';
import viteLogo from '../assets/frameworks/vite.svg';
import plusImage from '../assets/frameworks/plus.png';




function BottomBar() {
  return (
    /* .bottom-bar */
    <footer class="mt-12 border-t border-[#444] bg-[#222] px-8 py-6">
      
      {/* .footer-content (Added max-w-7xl to align with your App.tsx <main>) */}
      <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        
        {/* .footer-copyright (Replaced vh with text-sm) */}
        <p class="text-sm text-gray-400">
          © {new Date().getFullYear()} SolarCode. All rights reserved.
        </p>

        {/* .footer-links (Replaced vh with gap-6) */}
        <div class="flex gap-6">
          
          {/* .footer-link (Replaced vh with text-sm, added hover from your palette) */}
          <A 
            href="/privacy" 
            class="text-sm text-gray-400 no-underline transition-colors duration-200 ease-in-out hover:text-[#f5eb6d]"
          >
            Privacy Policy
          </A>
          <A 
            href="/terms" 
            class="text-sm text-gray-400 no-underline transition-colors duration-200 ease-in-out hover:text-[#f5eb6d]"
          >
            Terms of Service
          </A>
        </div>

        {/* .frameworks (Added items-center) */}
        <div class="flex items-center justify-center">
          
          {/* .logo */}
          <a href="https://vite.dev" target="_blank">
            <img 
              src={viteLogo} 
              class="h-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" 
              alt="Vite logo" 
            />
          </a>

          {/* .separator (Replaced vh units) */}
          <img src={plusImage} class="h-5 mx-2" alt="plus" />

          {/* .logo.solid */}
          <a href="https://solidjs.com" target="_blank">
            <img 
              src={solidLogo} 
              class="h-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]" 
              alt="Solid logo" 
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default BottomBar;