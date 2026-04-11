import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: 'Highway Construction',
      description: 'Expert construction of national and state highways with modern technology',
      icon: '🛣️'
    },
    {
      title: 'Highway Maintenance',
      description: 'Comprehensive maintenance services ensuring road safety and longevity',
      icon: '🔧'
    },
    {
      title: 'Bridge Construction',
      description: 'Structural engineering excellence in bridge design and construction',
      icon: '🌉'
    },
    {
      title: 'Road Safety Work',
      description: 'Implementation of advanced road safety measures and systems',
      icon: '⚠️'
    }
  ];

  return (
    <div className="min-h-screen" data-testid="home-page">
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1758551470883-af58f1556bfa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBoaWdod2F5JTIwY29uc3RydWN0aW9uJTIwYWVyaWFsfGVufDB8fHx8MTc3NTkzMDUwMXww&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        data-testid="hero-section"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center text-white">
          <div className="text-xs tracking-[0.2em] uppercase font-semibold text-amber-500 mb-6" data-testid="hero-overline">
            INFRASTRUCTURE EXCELLENCE
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter font-black uppercase mb-6" data-testid="hero-title">
            BUILDING INDIA'S FUTURE
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed mb-12 text-zinc-200 max-w-3xl mx-auto" data-testid="hero-description">
            Atmagaurav Infra Private Limited specializes in government infrastructure projects including highway construction, bridge engineering, and road safety works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="btn-primary" data-testid="hero-cta-projects">
              VIEW PROJECTS
            </Link>
            <Link to="/contact" className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-zinc-950" data-testid="hero-cta-contact">
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-white border-t border-zinc-200" data-testid="company-intro">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs tracking-[0.2em] uppercase font-semibold text-amber-600 mb-4" data-testid="intro-overline">
                ABOUT THE COMPANY
              </div>
              <h2 className="text-4xl sm:text-5xl tracking-tight font-bold uppercase mb-6" data-testid="intro-title">
                ENGINEERING EXCELLENCE SINCE DAY ONE
              </h2>
              <p className="text-base leading-relaxed text-zinc-600 mb-6" data-testid="intro-description">
                Atmagaurav Infra Private Limited is a leading infrastructure development company specializing in government contracting. Our expertise spans across highway construction, maintenance, bridge engineering, and comprehensive road safety solutions.
              </p>
              <p className="text-base leading-relaxed text-zinc-600 mb-8">
                With a commitment to quality, innovation, and timely delivery, we have established ourselves as a trusted partner for critical infrastructure projects across India.
              </p>
              <Link to="/about" className="btn-outline" data-testid="intro-cta">
                LEARN MORE
              </Link>
            </div>
            <div className="h-96 bg-zinc-200 border border-zinc-300 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8961031/pexels-photo-8961031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Construction team"
                className="w-full h-full object-cover"
                data-testid="intro-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-[#F4F4F5] border-t border-zinc-200" data-testid="services-overview">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.2em] uppercase font-semibold text-amber-600 mb-4" data-testid="services-overline">
              WHAT WE DO
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight font-bold uppercase" data-testid="services-title">
              OUR SERVICES
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-zinc-200">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-12 border border-zinc-200 hover:bg-zinc-950 hover:text-white transition-all duration-300 group"
                data-testid={`service-card-${index}`}
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-4 group-hover:text-amber-500">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-zinc-600 group-hover:text-zinc-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary" data-testid="services-cta">
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-zinc-950 text-white border-t border-zinc-800" data-testid="cta-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl tracking-tight font-bold uppercase mb-6" data-testid="cta-title">
            READY TO BUILD THE FUTURE?
          </h2>
          <p className="text-lg leading-relaxed text-zinc-400 mb-12" data-testid="cta-description">
            Partner with us for your next infrastructure project. Let's create something remarkable together.
          </p>
          <Link to="/contact" className="btn-primary" data-testid="cta-button">
            START A PROJECT
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;