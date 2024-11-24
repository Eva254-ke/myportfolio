import { Shield, Code, Lock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              As a passionate software engineer, I specialize in building and breaking applications
              to ensure their security. My journey in technology is driven by a deep curiosity
              about how systems work and how they can be made more secure.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-[#8B5CF6] hover:text-[#7C3AED] transition-colors flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy">Security First</h3>
                  <p className="text-gray-600">Dedicated to identifying and mitigating security vulnerabilities</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Code className="w-6 h-6 text-[#F97316] hover:text-[#EA580C] transition-colors flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy">Clean Code</h3>
                  <p className="text-gray-600">Writing maintainable and efficient code is my priority</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Lock className="w-6 h-6 text-[#0EA5E9] hover:text-[#0284C7] transition-colors flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy">Innovation</h3>
                  <p className="text-gray-600">Constantly exploring new technologies and security practices</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Coding Environment"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-accent/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;