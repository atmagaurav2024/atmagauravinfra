import { useState, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API}/projects`);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20" data-testid="projects-page">
      <section className="py-24 px-6 lg:px-12 bg-white" data-testid="projects-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs tracking-[0.2em] uppercase font-semibold text-amber-600 mb-4" data-testid="projects-overline">
            OUR PORTFOLIO
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter font-black uppercase mb-8" data-testid="projects-title">
            PROJECTS
          </h1>
          <p className="text-xl leading-relaxed text-zinc-600 max-w-4xl" data-testid="projects-intro">
            Explore our portfolio of completed and ongoing infrastructure projects that showcase our commitment to excellence and innovation.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-[#F4F4F5] border-t border-zinc-200" data-testid="projects-gallery">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20" data-testid="projects-loading">
              <p className="text-zinc-500 text-lg">Loading projects...</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-20" data-testid="projects-empty">
              <p className="text-zinc-500 text-lg mb-4">No projects available at the moment.</p>
              <p className="text-zinc-400">Check back soon for updates on our latest work.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-zinc-200" data-testid="projects-grid">
              {projects.map((project, index) => {
                const gridClass = index % 7 === 0 || index % 7 === 4 ? 'md:col-span-2' : '';
                
                return (
                  <div
                    key={project.id}
                    className={`bg-white border border-zinc-200 overflow-hidden group ${gridClass}`}
                    data-testid={`project-card-${index}`}
                  >
                    <div className="relative h-64 bg-zinc-200 overflow-hidden">
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-testid={`project-${index}-image`}
                      />
                      <div className="absolute top-4 left-4 bg-amber-500 text-zinc-950 px-4 py-1 text-xs tracking-[0.2em] uppercase font-semibold">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
                        <span data-testid={`project-${index}-location`}>{project.location}</span>
                        <span>•</span>
                        <span data-testid={`project-${index}-year`}>{project.year}</span>
                      </div>
                      <h3 className="text-2xl tracking-tight font-semibold uppercase mb-3 group-hover:text-amber-500 transition-colors" data-testid={`project-${index}-title`}>
                        {project.title}
                      </h3>
                      <p className="text-base leading-relaxed text-zinc-600" data-testid={`project-${index}-description`}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;