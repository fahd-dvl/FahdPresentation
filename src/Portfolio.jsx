import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce web application with modern technologies. Features product catalog, user authentication, shopping cart, user profiles and admin dashboard",
      tech: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
      demo: "#",
      code: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated background */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black opacity-20"></div>
        <div 
          className="absolute inset-0" 
          style={{ background: 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1), transparent 50%)' }}
        ></div>
        <div 
          className="absolute inset-0" 
          style={{ background: 'radial-gradient(circle at 70% 70%, rgba(147, 51, 234, 0.1), transparent 50%)' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Profile Image Container */}
            <div className="mb-8 flex justify-center">
              <div 
                className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl" 
                style={{ boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)' }}
              >
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for user image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <Code size={64} className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Masroubi Fahd
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
              Software Engineering student at INPT
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              I began my academic journey by earning a Baccalaureate in Mathematical Sciences (option B). Following that, I completed two years of rigorous preparatory classes at Lycée Ibn Taimiya in Marrakech, which led me to integrate the National Institute of Posts and Telecommunications (INPT) as a Software Engineering student. I am deeply fascinated by technology and committed to deepening my understanding of the field every day—whether through academic learning, hands-on development, or personal exploration. Currently, I am focused on working on impactful projects that bring value and innovation, while strengthening my technical and problem-solving skills.

            </p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Project
            </h3>
            
            <div className="flex justify-center">
              <div 
                className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 max-w-2xl hover:border-blue-500 hover:border-opacity-50 transition-all duration-300 hover:shadow-xl" 
                style={{ boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.1)' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-white">{projects[0].title}</h4>
                  <div className="flex gap-3">
                    <a href={projects[0].demo} className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                      <Globe size={20} />
                    </a>
                    <a href={projects[0].code} className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {projects[0].description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {projects[0].tech.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-600 bg-opacity-20 text-blue-300 rounded-full text-sm border border-blue-600 border-opacity-30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Email */}
              <a 
                href="mailto:your.email@gmail.com" 
                className="group bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-red-500 hover:border-opacity-50 transition-all duration-300 hover:shadow-xl" 
                style={{ boxShadow: '0 20px 25px -5px rgba(239, 68, 68, 0.1)' }}
              >
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-red-600 bg-opacity-20 rounded-full mb-4 group-hover:bg-opacity-30 transition-colors">
                    <Mail size={32} className="text-red-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Email</h4>
                  <p className="text-gray-400">masroubifahd@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/fahd-masroubi-98398b327/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500 hover:border-opacity-50 transition-all duration-300 hover:shadow-xl" 
                style={{ boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.1)' }}
              >
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-blue-600 bg-opacity-20 rounded-full mb-4 group-hover:bg-opacity-30 transition-colors">
                    <Linkedin size={32} className="text-blue-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">LinkedIn</h4>
                  <p className="text-gray-400">Connect with me</p>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/fahd-dvl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500 hover:border-opacity-50 transition-all duration-300 hover:shadow-xl" 
                style={{ boxShadow: '0 20px 25px -5px rgba(147, 51, 234, 0.1)' }}
              >
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-purple-600 bg-opacity-20 rounded-full mb-4 group-hover:bg-opacity-30 transition-colors">
                    <Github size={32} className="text-purple-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">GitHub</h4>
                  <p className="text-gray-400">View my code</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400">© 2025 John Doe. Built with React & Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}