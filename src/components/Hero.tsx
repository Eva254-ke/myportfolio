import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="relative w-48 h-48 mx-auto mb-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent-light to-accent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="/lovable-uploads/7106c87e-ed95-4ee3-ab3f-a6922e6470a4.png"
              alt="Profile"
              className="relative rounded-full object-cover w-full h-full shadow-lg ring-2 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy mb-4 animate-fade-up bg-gradient-to-r from-navy via-accent to-accent-light bg-clip-text text-transparent">
            Zachariah Evans
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Software Engineer | Building Secure Applications by Breaking Them
          </p>
          
          <div className="flex justify-center space-x-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-light transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;