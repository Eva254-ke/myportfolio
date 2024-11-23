import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "API Vulnerability Scanner",
      description: "A tool designed to identify and mitigate security issues in APIs. Features automated testing and comprehensive reporting capabilities.",
      tags: ["Python", "Security", "API Testing"],
      github: "https://github.com/Eva254-ke/api-vulnerabilitiy-scanner",
      demo: "https://apivulndetective.vercel.app/",
    },
    {
      title: "Security Testing Framework",
      description: "Custom framework for conducting security assessments and vulnerability scanning of web applications.",
      tags: ["Java", "Security", "Testing"],
      github: "https://github.com/Eva254-ke/vulnerablast",
      demo: "https://testingframework.vercel.app/",
    },
    {
      title: "Secure Code Analyzer",
      description: "Static code analysis tool that identifies potential security vulnerabilities in source code.",
      tags: ["Python", "Static Analysis", "Security"],
      github: "https://github.com/Eva254-ke/api-vuln-detective",
      demo: "https://securecode.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my notable projects focused on security and vulnerability detection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;