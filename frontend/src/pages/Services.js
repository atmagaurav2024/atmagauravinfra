const Services = () => {
  const services = [
    {
      title: 'Highway Construction',
      image: 'https://images.unsplash.com/photo-1758551470883-af58f1556bfa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBoaWdod2F5JTIwY29uc3RydWN0aW9uJTIwYWVyaWFsfGVufDB8fHx8MTc3NTkzMDUwMXww&ixlib=rb-4.1.0&q=85',
      description: 'Expert construction of national and state highways using cutting-edge technology and modern construction methodologies.',
      features: [
        'National Highway Development',
        'State Highway Construction',
        'Express Highway Projects',
        'Road Widening & Upgradation'
      ]
    },
    {
      title: 'Highway Maintenance',
      image: 'https://images.unsplash.com/photo-1758551470883-af58f1556bfa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBoaWdod2F5JTIwY29uc3RydWN0aW9uJTIwYWVyaWFsfGVufDB8fHx8MTc3NTkzMDUwMXww&ixlib=rb-4.1.0&q=85',
      description: 'Comprehensive maintenance and rehabilitation services ensuring optimal road conditions and extended infrastructure lifespan.',
      features: [
        'Preventive Maintenance',
        'Pothole Repair & Resurfacing',
        'Drainage System Management',
        'Regular Inspection Services'
      ]
    },
    {
      title: 'Bridge Construction & Maintenance',
      image: 'https://images.unsplash.com/photo-1568671566370-49b36c5c7805?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxoaWdod2F5JTIwYnJpZGdlJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTc3NTkzMDQ4OXww&ixlib=rb-4.1.0&q=85',
      description: 'Specialized engineering and construction of bridges with focus on structural integrity, safety, and longevity.',
      features: [
        'Flyover Construction',
        'Railway Over-bridges',
        'Pedestrian Bridges',
        'Bridge Strengthening & Repair'
      ]
    },
    {
      title: 'Road Safety Work',
      image: 'https://images.unsplash.com/photo-1763569026025-17f15c1012a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwyfHxyb2FkJTIwc2FmZXR5JTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTc3NTkzMDQ4OXww&ixlib=rb-4.1.0&q=85',
      description: 'Implementation of advanced road safety measures and systems to protect road users and minimize accidents.',
      features: [
        'Traffic Management Systems',
        'Road Signage & Markings',
        'Safety Barriers & Guardrails',
        'Street Lighting Solutions'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="services-page">
      <section className="py-24 px-6 lg:px-12 bg-zinc-950 text-white" data-testid="services-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs tracking-[0.2em] uppercase font-semibold text-amber-500 mb-4" data-testid="services-overline">
            WHAT WE DO
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter font-black uppercase mb-8" data-testid="services-title">
            OUR SERVICES
          </h1>
          <p className="text-xl leading-relaxed text-zinc-300 max-w-4xl" data-testid="services-intro">
            Comprehensive infrastructure solutions tailored for government projects. From highways to bridges, we deliver excellence at every stage.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-white" data-testid="services-list">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
              data-testid={`service-detail-${index}`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="text-xs tracking-[0.2em] uppercase font-semibold text-amber-600 mb-4">
                  SERVICE {String(index + 1).padStart(2, '0')}
                </div>
                <h2 className="text-4xl sm:text-5xl tracking-tight font-bold uppercase mb-6">
                  {service.title}
                </h2>
                <p className="text-base leading-relaxed text-zinc-700 mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start" data-testid={`service-${index}-feature-${idx}`}>
                      <span className="text-amber-500 mr-3 mt-1">▪</span>
                      <span className="text-zinc-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`h-96 bg-zinc-200 border border-zinc-300 overflow-hidden ${
                index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
              }`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  data-testid={`service-${index}-image`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-amber-500 border-t border-amber-600" data-testid="services-cta">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl tracking-tight font-bold uppercase mb-6 text-zinc-950" data-testid="services-cta-title">
            NEED A CUSTOM SOLUTION?
          </h2>
          <p className="text-lg leading-relaxed text-zinc-800 mb-12" data-testid="services-cta-description">
            Every project is unique. Let's discuss your specific infrastructure requirements.
          </p>
          <a href="/contact" className="btn-outline border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-white" data-testid="services-cta-button">
            CONTACT US TODAY
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;