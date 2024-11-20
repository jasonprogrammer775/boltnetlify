import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gray-800" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-gray-300 text-lg mb-6">
                I'm a passionate Full Stack Developer with 5 years of experience in building
                beautiful, functional, and user-centered digital experiences. I am always
                striving to push the boundaries of what's possible on the web.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Code className="w-6 h-6 text-cyan-400" />
                  <div>
                    <h3 className="text-white font-semibold">Frontend Development</h3>
                    <p className="text-gray-400">React, Vue, Angular, TypeScript</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Globe className="w-6 h-6 text-cyan-400" />
                  <div>
                    <h3 className="text-white font-semibold">Backend Development</h3>
                    <p className="text-gray-400">Node.js, Python, Java, AWS</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Palette className="w-6 h-6 text-cyan-400" />
                  <div>
                    <h3 className="text-white font-semibold">UI/UX Design</h3>
                    <p className="text-gray-400">Figma, Adobe XD, Tailwind CSS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}