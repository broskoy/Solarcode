import { For } from 'solid-js';
import { A } from '@solidjs/router';


export const categories = [
  {
    title: 'Financial Systems',
    description: 'Tailored financial and retail systems designed for security, compliance, and performance. We develop bespoke solutions ranging from secure payment gateways and custom e-commerce platforms with unique POS integrations to sophisticated trading tools and financial analytics dashboards...',
    icon: '💰',
  },
  {
    title: 'Logistics Automation',
    description: 'Streamline your operations with custom business automation and logistics software. We build tailored solutions to automate unique workflows, develop insightful internal dashboards, integrate disparate systems, optimize supply chains, and modernize legacy applications...',
    icon: '🚚',
  },
  {
    title: 'Educational Technology',
    description: 'Enhance learning and administrative experiences with bespoke educational technology. We partner with institutions and companies to create custom Learning Management Systems (LMS), interactive assessment platforms, student/trainee management tools...',
    icon: '🎓',
  },
  {
    title: 'Internet of Things',
    description: 'Harness the power of connected devices with custom Internet of Things (IoT) solutions. We develop scalable platforms to securely collect, process, and visualize data from your sensors and hardware, build custom control systems and dashboards...',
    icon: '🔗',
  },
  {
    title: 'Other Custom Solutions',
    description: 'Beyond our core focus areas, we tackle unique software challenges across diverse industries. If you have a specific need—from specialized scientific computing to niche market applications—that off-the-shelf solutions can\'t meet...',
    icon: '⚙️',
  },
  {
    title: 'Other Custom Solutions',
    description: 'Beyond our core focus areas, we tackle unique software challenges across diverse industries. If you have a specific need—from specialized scientific computing to niche market applications—that off-the-shelf solutions can\'t meet...',
    icon: '⚙️',
  },
];


function Solutions() {
  return (
    <>
      <h2 class="text-3xl font-bold my-8 text-gray-100">
        Enterprise Solutions
      </h2>

      {/* card grid */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 my-8">
        <For each={categories}>

          {/* card (is a link) */}
          {(category) => (
            <A 
              href="/placeholder" 
              class="block rounded-xl transition-all duration-200 ease-in-out hover:scale-[1.04] focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <div 
                class="h-full p-6 bg-gradient-to-tr from-[#5f236b] to-[#be375f] rounded-xl shadow-md text-left overflow-hidden hover:shadow-lg"
              >
                {/* card title */}
                <h3 class="text-xl font-bold text-gray-100">
                  {category.title}
                </h3>
                
                {/* card description */}
                <p class="mt-2 text-sm text-gray-400 leading-normal">
                  {category.description}
                </p>
              </div>
            </A>
          )}

        </For>
      </div>

    </>
  );
}

export default Solutions;