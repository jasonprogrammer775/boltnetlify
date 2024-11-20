import React from 'React';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-cyan-400">jay</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
            Full Stack Developer crafting beautiful digital experiences
          </p>
          <div className="flex gap-4 mb-12">
            <a href="https://github.com" className="transform hover:scale-110 transition-transform">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="transform hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:contact@example.com" className="transform hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            View My Work
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}