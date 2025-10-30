import { A } from '@solidjs/router';
import './BottomBar.css';
import solidLogo from './assets/frameworks/solid.svg'
import viteLogo from './assets/frameworks/vite.svg'
import plusImage from './assets/frameworks/plus.png'

function BottomBar() {
  return (
    <footer class="bottom-bar">
      <div class="footer-content">
        <p class="footer-copyright">
          © {new Date().getFullYear()} SolarCode. All rights reserved.
        </p>
        <div class="footer-links">
          {/* You can add routes for these later */}
          <A href="/privacy" class="footer-link">Privacy Policy</A>
          <A href="/terms" class="footer-link">Terms of Service</A>
        </div>
      </div>

      <div class="frameworks">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>

        <img src={plusImage} class="separator" alt="plus" />

        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
    </footer>
  );
}

export default BottomBar;