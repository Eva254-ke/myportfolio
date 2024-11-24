import { ArrowRight, Github, Linkedin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="relative w-48 h-48 mx-auto mb-8 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent-light to-accent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <img
          src="https://raw.githubusercontent.com/Eva254-ke/portfolio/main/portfolio.jpg"
          alt="Profile"
          className="relative rounded-full object-cover w-full h-full shadow-lg ring-2 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300"
        />
        <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse" />
      </div>
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy mb-4 animate-fade-up bg-gradient-to-r from-navy via-accent to-accent-light bg-clip-text text-transparent">
        Zachariah Evans
      </h1>
      
      <p className="text-xl sm:text-2xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
        Software Engineer | Building and breaking secure applications to make them more secure
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
        <a
          href="#contact"
          className="inline-flex items-center px-8 py-4 bg-[#9b87f5] text-white rounded-lg hover:bg-[#b8a8f8] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-lg font-semibold w-full sm:w-auto justify-center"
        >
          Get in Touch
          <ArrowRight className="ml-2 h-6 w-6" />
        </a>
        <a
          href="https://drive.google.com/file/d/1rE-CTsY5tY3V2Wcez_X6ZgxantUnyb4-/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto justify-center"
        >
          Download Resume
          <Download className="ml-2 h-5 w-5" />
        </a>
        <a
          href="https://github.com/Eva254-ke"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto justify-center"
        >
          View More on GitHub
          <Github className="ml-2 h-5 w-5" />
        </a>
      </div>

      <div className="flex justify-center space-x-6 mt-8 animate-fade-up" style={{ animationDelay: "600ms" }}>
        <a
          href="https://www.linkedin.com/in/zachariah-evans-6aa862301/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A66C2] hover:text-[#004182] transition-colors"
        >
          <Linkedin className="h-8 w-8" />
        </a>
        <a
          href="https://github.com/Eva254-ke"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-purple-500 transition-colors"
        >
          <Github className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
