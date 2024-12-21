import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    company: "Major Retail Client",
    role: "Sr. Full Stack Developer",
    description:
      "Led the development of a scalable e-commerce platform handling millions of transactions. Implemented microservices architecture using Spring Boot and Angular.",
    technologies: ["Java", "Spring Boot", "Angular", "AWS", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Banking System",
    company: "Financial Institution",
    role: "Technical Lead",
    description:
      "Developed a secure banking system with real-time transaction processing. Implemented OAuth2 security and handled high-concurrency scenarios.",
    technologies: ["Java", "Spring Security", "React", "AWS Lambda", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "IoT Analytics Platform",
    company: "Tech Startup",
    role: "Sr. Full Stack Developer",
    description:
      "Built an IoT analytics platform processing data from thousands of devices. Implemented real-time data processing using AWS services.",
    technologies: ["Python", "React", "AWS IoT", "Kubernetes", "Elasticsearch"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-navy py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-lightestSlate mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-lightNavy p-6 rounded-lg hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl text-lightestSlate">{project.title}</h3>
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lightSlate hover:text-green transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lightSlate hover:text-green transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <p className="text-green mb-2">{project.role}</p>
              <p className="text-slate mb-4">{project.company}</p>
              <p className="text-lightSlate mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm text-green bg-green/10 px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;