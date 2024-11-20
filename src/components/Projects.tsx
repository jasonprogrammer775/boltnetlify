import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    github: "#",
    live: "#",
    tags: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat app with AI-powered responses",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=800&q=80",
    github: "#",
    live: "#",
    tags: ["React", "OpenAI", "WebSocket", "Firebase"]
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio with React and Three.js animations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    github: "#",
    live: "#",
    tags: ["React", "Three.js", "Tailwind CSS"]
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="flex gap-4">
                    <a href={project.github} className="text-white hover:text-cyan-400">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href={project.live} className="text-white hover:text-cyan-400">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-gray-700 text-sm text-cyan-400 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}