import { Cpu, Shield, Code, Globe } from "lucide-react";

const Interests = () => {
  const interests = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Passionate about identifying and mitigating security vulnerabilities in software systems.",
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Creating efficient and secure applications that solve real-world problems.",
    },
    {
      icon: Cpu,
      title: "Emerging Technologies",
      description: "Exploring new technologies and their potential impact on security and development.",
    },
    {
      icon: Globe,
      title: "Scalable Solutions",
      description: "Building solutions that can grow and adapt to changing requirements.",
    },
  ];

  return (
    <section id="interests" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Interests</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">
                  {interest.title}
                </h3>
                <p className="text-gray-600">{interest.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Interests;