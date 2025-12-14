import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github } from './Icons';

const projects = [
  {
    id: 1,
    title: 'FEDERATED_LEARNING_ENTERPRISE',
    description: 'Production-grade Federated Learning platform with enterprise-level security and observability. Deployed microservices using Docker and Kubernetes with TLS, CA/PKI authentication, and RBAC. Integrated Prometheus and Grafana for metrics and alerting.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzY1MjY1NzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Kubernetes', 'Docker', 'NGINX', 'Prometheus', 'Python', 'PKI'],
    demoUrl: '#',
    githubUrl: 'https://github.com/ganguls/Federated-Learning-for-Secure-Finance-System.git',
  },
  {
    id: 2,
    title: 'MALWARE_CLASSIFICATION_DL',
    description: 'ResNet-based malware detection system trained on MalIMG dataset (9,339 samples, 25 families). Achieved 95%+ accuracy and built a REST-enabled malware analysis web interface for live threat assessment using deep learning.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZW5jcnlwdGlvbnxlbnwxfHx8fDE3NjUzMzEwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Python', 'TensorFlow', 'NumPy', 'Pandas', 'SciPy', 'REST API'],
    demoUrl: '#',
    githubUrl: 'https://github.com/ganguls/Malware-Classification-Using-DL',
  },
];

export function Projects() {
  return (
    <section 
      id="projects" 
      className="py-16 sm:py-20 md:py-24 border-t border-blue-500/20"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 id="projects-heading" className="text-4xl sm:text-5xl md:text-6xl text-center mb-6 text-blue-400 font-mono glitch-effect">
            {'> FEATURED_PROJECTS'}
          </h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-8 sm:mb-12 md:mb-16"></div>
          <p className="text-center text-blue-200 mb-12 sm:mb-16 md:mb-20 max-w-2xl mx-auto font-mono text-base sm:text-lg px-4 leading-relaxed">
            {'>> Security projects and frameworks developed for enterprise security, cloud protection, and threat analysis.'}
          </p>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900/70 backdrop-blur-md border border-blue-500/30 overflow-hidden hover:border-blue-400 transition-all group shadow-lg shadow-blue-500/10 rounded-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-all"></div>
                </div>

                <div className="p-6 sm:p-7 md:p-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-blue-400 font-mono">
                    {'> '}{project.title}
                  </h3>
                  <p className="text-blue-200 mb-3 sm:mb-4 font-mono text-base sm:text-lg leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 text-blue-300 border border-blue-500/30 text-sm sm:text-base font-mono rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                    <a
                      href={project.demoUrl}
                      className="flex items-center gap-2 text-blue-400 hover:text-cyan-300 active:text-cyan-200 transition-colors font-mono text-base sm:text-lg min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-3 py-2"
                      aria-label={`View demo of ${project.title}`}
                    >
                      <ExternalLink size={20} />
                      <span>DEMO</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-300 hover:text-cyan-300 active:text-cyan-200 transition-colors font-mono text-base sm:text-lg min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-3 py-2"
                      aria-label={`View source code of ${project.title} on GitHub`}
                    >
                      <Github size={20} />
                      <span>SOURCE</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
