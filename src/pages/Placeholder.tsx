import { createSignal } from "solid-js";




function Placeholder() {
  const [count, setCount] = createSignal(0);

  return (

    <div class="flex flex-col flex-grow justify-center">

      <h2 class="text-4xl font-bold text-gray-100">
        Placeholder Page
      </h2>

      <p class="mt-4 text-lg text-gray-400">
        Here, have an interactive button
      </p>

      <button 
        onClick={() => setCount((count) => (count + 1))}
        class="mt-6 px-6 py-3
               w-fit mx-auto
               bg-[#333] 
               border border-transparent 
               rounded-lg 
               font-medium text-lg text-gray-100 
               cursor-pointer 
               transition-colors duration-250 
               hover:border-[#f5d248]"
      >
        Clicks: {count()}
      </button>
    </div>
  );
}

export default Placeholder;