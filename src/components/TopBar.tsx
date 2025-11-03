import { A } from "@solidjs/router";
import logoIcon from "../assets/logo/solar_transparent.png";
import logoName from "../assets/logo/name_transparent.png";

function TopBar() {
  return (
    <nav class="flex items-center justify-between h-16 border-b border-[#444] bg-[#222] px-6 shadow-md">
      {/* logo-link */}
      <A href="/home" class="flex items-center no-underline">
        {/* logo-icon */}
        <img src={logoIcon} alt="SolarCode Icon" class="h-10" />
        {/* logo-name */}
        <img src={logoName} alt="SolarCode Name" class="h-20" />
      </A>

      {/* page-links */}
      <ul class="flex list-none gap-8 p-0">
        <li>
          {/* page-link */}
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
