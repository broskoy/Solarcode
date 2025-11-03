import { For, type Component, type ComponentProps } from "solid-js";

import {
  Package,
  Globe,
  Shield,
  ChartNoAxesColumnIncreasing,
  Cpu,
  LayoutDashboard,
} from "lucide-solid";

interface Feature {
  id: number;
  icon: Component<ComponentProps<"svg">>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: Package,
    title: "Rapid Deployment",
    description: "Launch your projects in minutes with blazing-fast setup.",
  },
  {
    id: 2,
    icon: Globe,
    title: "Global Infrastructure",
    description:
      "Access servers in datacenters as you grow, with zero downtime.",
  },
  {
    id: 3,
    icon: Shield,
    title: "Ironclad Security",
    description: "Advanced data centers worldwide for low latency routing.",
  },
  {
    id: 4,
    icon: ChartNoAxesColumnIncreasing,
    title: "Limitless Scalability",
    description: "Seamlessly scale your resources up or down as needed.",
  },
  {
    id: 5,
    icon: Cpu,
    title: "Peak Performance",
    description: "Advanced CPUs and 24/7 monitoring for your services.",
  },
  {
    id: 6,
    icon: LayoutDashboard,
    title: "Intuitive Dashboard",
    description: "Effortless management of all services from a single console.",
  },
];

function WhyChooseUs() {
  return (
    <section class="py-16 bg-[#222]">
      {/* Section Title */}
      <h2 class="text-3xl font-extrabold mb-12 text-center">
        Why Choose SolarCode
      </h2>

      {/* Grid Container */}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <For each={features}>
          {(feature) => (
            <div
              class="rounded-2xl p-[2px]
                            bg-gradient-to-r from-[#f5eb6d] to-[#ed8554]"
            >
              <div
                class="flex flex-col items-center p-8 rounded-[calc(1rem-2px)]
                            bg-[#222222]
                            text-center h-full"
              >
                {/* Icon */}
                <div class="mb-4 text-white">
                  <feature.icon class="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 class="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p class="text-gray-200 text-sm">{feature.description}</p>
              </div>
            </div>
          )}
        </For>
      </div>
    </section>
  );
}

export default WhyChooseUs;
