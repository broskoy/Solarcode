import { onMount, createSignal, For } from "solid-js";
import logoIcon from "../assets/logo/solar_transparent.png";

function Intro() {
  const [isMounted, setIsMounted] = createSignal(false);
  const titleWords = "Bring your ideas to light".split(" ");

  onMount(() => {
    setTimeout(() => setIsMounted(true), 1000);
  });

  return (
    <>
      <div class="flex justify-center items-center mt-0 mb-4 gap-0">
        <img
          src={logoIcon}
          alt="solar"
          class="w-1/2 h-auto transition-all duration-1000 ease-out"
          classList={{
            "opacity-0 scale-125": !isMounted(),
            "opacity-100 scale-100": isMounted(),
          }}
        />
      </div>

      <h2 class="text-3xl font-bold mb-20 text-gray-100">
        <For each={titleWords}>
          {(word, index) => (
            <>
              <span
                class={`inline-block transition-all duration-500 ease-out ${
                  index() === titleWords.length - 1
                    ? "bg-gradient-to-r from-[#ed8554] to-[#f5eb6d] text-transparent bg-clip-text pb-1"
                    : ""
                }`}
                classList={{
                  "opacity-0 translate-y-4": !isMounted(),
                  "opacity-100 translate-y-0": isMounted(),
                }}
                style={{
                  "transition-delay": `${500 + index() * 75}ms`,
                }}
              >
                {word}
              </span>{" "}
            </>
          )}
        </For>
      </h2>
    </>
  );
}

export default Intro;
