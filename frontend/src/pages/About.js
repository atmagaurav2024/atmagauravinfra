const About = () => {
  const leadership = [
    { name: 'Kshitij Borkar', role: 'Director', description: 'Strategic vision and operational excellence' },
    { name: 'Gajanan Borkar', role: 'Director', description: 'Technical expertise and project management' },
    { name: 'Shankar Borkar', role: 'Project Coordinator', description: 'On-ground execution and quality assurance' }
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="about-page">
      <section className="py-24 px-6 lg:px-12 bg-white" data-testid="about-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs tracking-[0.2em] uppercase font-semibold text-amber-600 mb-4" data-testid="about-overline">
            ABOUT US
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter font-black uppercase mb-8" data-testid="about-title">
            BUILDING TOMORROW'S INFRASTRUCTURE
          </h1>
          <p className="text-xl leading-relaxed text-zinc-600 max-w-4xl" data-testid="about-intro">
            Atmagaurav Infra Private Limited stands at the forefront of India's infrastructure development, delivering exceptional government contracting services with unwavering commitment to quality and innovation.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-[#F4F4F5] border-t border-zinc-200" data-testid="about-overview">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl sm:text-5xl tracking-tight font-bold uppercase mb-8" data-testid="overview-title">
                WHO WE ARE
              </h2>
              <p className="text-base leading-relaxed text-zinc-700 mb-6">
                We are a specialized infrastructure development company focused on delivering world-class solutions for government projects. Our expertise encompasses the entire lifecycle of infrastructure development, from planning and design to construction and maintenance.
              </p>
              <p className="text-base leading-relaxed text-zinc-700 mb-6">
                Our work primarily focuses on critical transportation infrastructure including highways, bridges, and road safety systems. We pride ourselves on our technical capabilities, modern equipment, and highly skilled workforce.
              </p>
              <p className="text-base leading-relaxed text-zinc-700">
                Every project we undertake reflects our dedication to excellence, safety, and sustainable development practices that benefit communities across India.
              </p>
            </div>
            <div className="h-full min-h-[400px] bg-zinc-200 border border-zinc-300 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8961031/pexels-photo-8961031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Team at work"
                className="w-full h-full object-cover"
                data-testid="overview-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-white border-t border-zinc-200" data-testid="vision-mission">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-zinc-200">
            <div className="bg-white p-12 border border-zinc-200" data-testid="vision-card">
              <div className="text-xs tracking-[0.2em] uppercase font-semibold text-amber-600 mb-4">OUR VISION</div>
              <h3 className="text-3xl sm:text-4xl tracking-tight font-bold uppercase mb-6">SHAPING THE FUTURE</h3>
              <p className="text-base leading-relaxed text-zinc-700">
                To be India's most trusted and innovative infrastructure development company, setting new benchmarks in quality, safety, and sustainability while contributing to the nation's growth through exceptional engineering excellence.
              </p>
            </div>
            <div className="bg-zinc-950 text-white p-12 border border-zinc-800" data-testid="mission-card">
              <div className="text-xs tracking-[0.2em] uppercase font-semibold text-amber-500 mb-4">OUR MISSION</div>
              <h3 className="text-3xl sm:text-4xl tracking-tight font-bold uppercase mb-6">DELIVERING EXCELLENCE</h3>
              <p className="text-base leading-relaxed text-zinc-300">
                To deliver world-class infrastructure solutions through cutting-edge technology, skilled workforce, and unwavering commitment to quality. We strive to exceed client expectations while maintaining the highest standards of safety and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-[#F4F4F5] border-t border-zinc-200" data-testid="leadership-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.2em] uppercase font-semibold text-amber-600 mb-4" data-testid="leadership-overline">
              LEADERSHIP TEAM
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight font-bold uppercase" data-testid="leadership-title">
              MEET OUR LEADERS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-zinc-200">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white p-12 border border-zinc-200 text-center hover:bg-amber-500 hover:text-zinc-950 transition-all duration-300"
                data-testid={`leader-card-${index}`}
              >
                <div className="w-24 h-24 bg-zinc-200 rounded-none mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-black text-zinc-400">{leader.name.charAt(0)}</span>
                </div>
                <h3 className="text-2xl tracking-tight font-semibold uppercase mb-2">
                  {leader.name}
                </h3>
                <div className="text-sm tracking-[0.2em] uppercase font-semibold mb-4 opacity-70">
                  {leader.role}
                </div>
                <p className="text-sm leading-relaxed opacity-80">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;