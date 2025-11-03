import { A } from "@solidjs/router";
import solidLogo from "../assets/frameworks/solid.svg";
import viteLogo from "../assets/frameworks/vite.svg";
import tailwindLogo from "../assets/frameworks/tailwind.svg";




function BottomBar() {
  return (
    <footer
      class="mt-12 border-t border-[#444] bg-[#222] px-8 py-6 
             mx-auto w-full flex flex-wrap items-center justify-between"
    >
      {/* copyright */}
      <p class="text-sm text-gray-400">
        © {new Date().getFullYear()} SolarCode. All rights reserved.
      </p>

      {/* legal links */}
      <div class="flex gap-10">
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

      {/* .frameworks */}
      <div class="flex items-center justify-center gap-4">
        {/* vite */}
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            class="h-7 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>

        {/* solid */}
        <a href="https://solidjs.com" target="_blank">
          <img
            src={solidLogo}
            class="h-7 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]"
            alt="Solid logo"
          />
        </a>

        {/* tailwind */}
        <a href="https://taiwindcss.com" target="_blank">
          <img
            src={tailwindLogo}
            class="h-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]"
            alt="Tailwind logo"
          />
        </a>
      </div>
    </footer>
  );
}

export default BottomBar;
