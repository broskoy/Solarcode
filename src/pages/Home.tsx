import solarLogo from '../assets/logo/solar_transparent.png'; 
import nameLogo from '../assets/logo/name_transparent.png';

import Solutions from '../components/Solutions';
import WhyChooseUs from '../components/WhyChooseUs';




function Home() {
  return (
    <>
      {/* - 'flex justify-center items-center': Replaces the display properties.
        - 'mt-8 mb-24': Replaces the 'vh' margins with stable, responsive spacing.
        - 'gap-0': You can remove this, but I'll keep it for a direct translation.
      */}
      <div class="flex justify-center items-center mt-8 mb-24 gap-0">
        <img 
          src={solarLogo} 
          alt="solar"
          class="w-1/3 h-auto" 
        />
        <img 
          src={nameLogo}
          alt="solarcode" 
          // 'w-3/5': This is a Tailwind class for exactly 60%.
          // 'h-auto': Fixes the aspect ratio.
          class="w-3/5 h-auto" 
        />
      </div>

      <Solutions />

      <div class="my-24">
        <WhyChooseUs />
      </div>
    </>
  );
}

export default Home;
