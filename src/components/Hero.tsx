import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
              alt="Profile"
              className="rounded-full object-cover w-full h-full shadow-lg"
            />
            <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy mb-4 animate-fade-up">
            Zachariah Evans
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Software Engineer | Building Secure Applications by Breaking Them
          </p>
          
          <div className="flex justify-center space-x-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-light transition-colors"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors"
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