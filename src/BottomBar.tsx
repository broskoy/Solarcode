import { A } from '@solidjs/router';
import './BottomBar.css';

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
    </footer>
  );
}

export default BottomBar;