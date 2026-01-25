import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tight text-green-800">plook</div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl">
          <div className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-4">
            programmable organic supply
          </div>
          <div className="text-4xl md:text-6xl font-medium leading-tight text-gray-900 mb-8">
            We build a farming platform that turns farms into predictable, consistent quality, reliable organic supply.
          </div>
        </div>
      </main>

      {/* Statistics Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-2">
              <div className="text-5xl font-bold text-green-700">30%</div>
              <div className="text-xl font-medium text-gray-900">of Labor Force</div>
              <div className="text-gray-600">(12 million people)</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-green-700">44%</div>
              <div className="text-xl font-medium text-gray-900">of Thailand’s land</div>
              <div className="text-gray-600">are Agricultural Land</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-green-700">6%</div>
              <div className="text-xl font-medium text-gray-900">of Thailand’s GDP</div>
              <div className="text-gray-600">Agriculture Contribution</div>
            </div>
          </div>
          <div className="mt-12 text-lg text-gray-600 max-w-3xl">
            Despite employing nearly 1/3 of the workforce and using almost half of the country’s land, agriculture contributes less than 10% of Thailand’s GDP.
          </div>
        </div>
      </section>

      {/* Agriculture Industry Challenges Section */}
      <section className="bg-[#F3EFE5] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-3xl md:text-5xl font-medium text-gray-900 mb-12">
            Agriculture Industry Challenges
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
            {/* Left Column - Unpredictable Supply */}
            <div className="lg:col-span-1 relative rounded-3xl overflow-hidden bg-black group h-96 lg:h-auto">
               <div className="absolute inset-0 bg-gray-800/50 mix-blend-multiply z-10" />
               {/* Placeholder for Image: Hand holding tomatoes */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595855709915-d72e73711925?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center" />
               <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
                 <div className="text-2xl md:text-3xl font-semibold mb-4">Unpredictable Supply & Quality</div>
                 <div className="text-gray-200">
                   Without reliable and actionable data, farms cannot guarantee consistent supply, timing, or quality.
                 </div>
               </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 flex flex-col gap-6 h-full">
              {/* Top - 35% Waste */}
              <div className="flex-1 relative rounded-3xl overflow-hidden bg-black group min-h-[280px]">
                <div className="absolute inset-0 bg-gray-800/50 mix-blend-multiply z-10" />
                {/* Placeholder for Image: Vegetable pile */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-20 text-white">
                  <div className="text-6xl md:text-7xl font-bold mb-4">35%</div>
                  <div className="text-xl md:text-2xl font-medium mb-2">of harvested crops do not meet market demand</div>
                  <div className="text-sm md:text-base opacity-90">20% of produce faces price collapse from oversupply</div>
                </div>
              </div>

              {/* Bottom Split */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[280px]">
                {/* Export Rejection */}
                <div className="relative rounded-3xl overflow-hidden bg-black group min-h-[280px]">
                  <div className="absolute inset-0 bg-gray-800/50 mix-blend-multiply z-10" />
                  {/* Placeholder for Image: Crates */}
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-20 text-white">
                    <div className="text-4xl md:text-5xl font-bold mb-2">15-20%</div>
                    <div className="text-lg font-medium">of Export Rejection</div>
                    <div className="text-base">(Chemical / Quality)</div>
                  </div>
                </div>

                {/* Reliability Priority */}
                <div className="relative rounded-3xl overflow-hidden bg-black group min-h-[280px]">
                   <div className="absolute inset-0 bg-gray-800/50 mix-blend-multiply z-10" />
                   {/* Placeholder for Image: Chef plating */}
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center" />
                   <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
                     <div className="text-xl md:text-2xl font-bold mb-2">#1 <br/>Supply reliability</div>
                     <div className="text-lg">is the first priority for B2B buyers</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it's big? Section */}
      <section className="bg-[#F3EFE5] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-3xl md:text-5xl font-medium text-gray-900 mb-12">
            why it’s big?
          </div>

          <div className="space-y-6">
            {/* Card 1 */}
            <div className="bg-[#013522] rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[300px]">
              <div className="p-8 md:p-12 flex flex-col justify-center md:w-1/2">
                <div className="text-2xl md:text-3xl font-bold text-white mb-4">Food Business in Thailand is rapidly growing</div>
                <div className="text-gray-200 text-lg leading-relaxed">
                  Food industry is one of the country’s fastest-growing and increasingly need consistent quality, timing, and supply with good price
                </div>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2874&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#013522] rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[300px]">
              <div className="p-8 md:p-12 flex flex-col justify-center md:w-1/2">
                <div className="text-2xl md:text-3xl font-bold text-white mb-4">Rising Organic & Healthy Lifestyle</div>
                <div className="text-gray-200 text-lg leading-relaxed">
                  Thailand’s urban middle-class and aging society are increasingly health-conscious, preferring chemical-free, traceable food.
                </div>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2874&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#013522] rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[300px]">
              <div className="p-8 md:p-12 flex flex-col justify-center md:w-1/2">
                <div className="text-2xl md:text-3xl font-bold text-white mb-4">Regional Food Supply</div>
                <div className="text-gray-200 text-lg leading-relaxed">
                  Thailand as the kitchen of SE Asia, few regional players can deliver consistent organic supply at scale.
                </div>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605218457336-d446927d3c0f?q=80&w=2787&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="bg-[#013522] py-20 lg:py-32 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-3xl md:text-5xl font-medium mb-8">Our Products</div>
            <div className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-5xl">
              A programmable farming platform that connects existing farms and agritech technologies through agentic AI, using AI-driven insights to predict and optimize yields and transform farms into reliable B2B and B2C food supply sources
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-[#F3EFE5] text-gray-900 rounded-3xl overflow-hidden p-2">
              <div className="h-48 rounded-2xl bg-gray-200 relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2944&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
              <div className="p-6">
                <div className="text-xl font-bold mb-4 text-[#013522]">Agentic AI & IoT sensors</div>
                <div className="text-gray-700 leading-relaxed">
                  Plug into leading agritech startups & existing smart-farm devices, enabling real-time farming data collection
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-[#F3EFE5] text-gray-900 rounded-3xl overflow-hidden p-2">
              <div className="h-48 rounded-2xl bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
              <div className="p-6">
                <div className="text-xl font-bold mb-4 text-[#013522]">plook AI (Local Model)</div>
                <div className="text-gray-700 leading-relaxed">
                  The brain of the farm, predicting yield and harvest timing, optimizing water and fertilizer usage, detecting quality or disease risks
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-[#F3EFE5] text-gray-900 rounded-3xl overflow-hidden p-2">
              <div className="h-48 rounded-2xl bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
              <div className="p-6">
                <div className="text-xl font-bold mb-4 text-[#013522]">plook OS</div>
                <div className="text-gray-700 leading-relaxed">
                  The operating system that connects farms to the market by monitoring and forecasting supply & demand for B2B and B2C
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programmable Farming Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-3xl md:text-5xl font-medium text-gray-900">
              Programmable Farming <br />
              <span className="text-green-700">& Organic Produce</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reliability */}
            <div className="bg-white p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl font-semibold text-gray-900 mb-4">Reliability</div>
              <div className="text-gray-600 leading-relaxed">
                We turn farming from uncertainty into consistent quality and supply control through data and real-time monitoring.
              </div>
            </div>

            {/* Predictability */}
            <div className="bg-white p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl font-semibold text-gray-900 mb-4">Predictability</div>
              <div className="text-gray-600 leading-relaxed">
                We align farms with real market demand, enabling secure planning for B2B and B2C supply with clear volumes and timelines.
              </div>
            </div>

            {/* Efficiency */}
            <div className="bg-white p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl font-semibold text-gray-900 mb-4">Efficiency</div>
              <div className="text-gray-600 leading-relaxed">
                Optimized farming cost, and operations to reduce waste and unlock premium organic margins.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold tracking-tight mb-4 md:mb-0">plook</div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Plook. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
