import { A } from "@solidjs/router";
import { createSignal, Show } from "solid-js";
import logoIcon from "../assets/logo/solar_transparent.png";
import logoName from "../assets/logo/name_transparent.png";

function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav class="relative z-20 flex items-center justify-between h-16 border-b border-[#444] bg-[#222] px-4 md:px-6 shadow-md">
      
      {/* logo-link */}
      <A href="/home" class="flex items-center no-underline flex-shrink-0">
        {/* logo-icon */}
        <img src={logoIcon} alt="SolarCode Icon" class="h-10" />
        {/* logo-name */}
        <img src={logoName} alt="SolarCode Name" class="h-10" />
      </A>

      {/* page links */}
      <ul class="hidden md:flex list-none gap-8 p-0">
        <li>
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

      {/* hamburger button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen())}
        class="md:hidden p-2 rounded-md text-gray-200 hover:bg-gray-700 transition-colors"
        aria-label="Toggle menu"
      >
        <Show
          when={isMenuOpen()}
          fallback={
            /* Hamburger Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          }
        >
          {/* Close (X) Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Show>
      </button>

      {/* --- Mobile Menu Overlay --- */}
      <div
        class="absolute top-16 left-0 right-0 bg-[#222] border-b border-[#444] shadow-lg
               md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        classList={{
          "max-h-0 opacity-0": !isMenuOpen(),
          "max-h-60 opacity-100": isMenuOpen(),
        }}
      >
        <ul class="flex flex-col list-none p-4 gap-4">
          <li>
            <A
              href="/home"
              onClick={closeMenu}
              class="block w-full text-center no-underline text-gray-200 font-medium 
                     p-3 rounded-md hover:bg-gray-700 transition-colors duration-200 ease-in-out"
            >
              Home
            </A>
          </li>
          <li>
            <A
              href="/about"
              onClick={closeMenu}
              class="block w-full text-center no-underline text-gray-200 font-medium 
                     p-3 rounded-md hover:bg-gray-700 transition-colors duration-200 ease-in-out"
            >
              About
            </A>
          </li>
          <li>
            <A
              href="/support"
              onClick={closeMenu}
              class="block w-full text-center no-underline text-gray-200 font-medium 
                     p-3 rounded-md hover:bg-gray-700 transition-colors duration-200 ease-in-out"
            >
              Support
            </A>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopBar;