import { CheckCircle } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "C", "Java"],
    },
    {
      category: "Security Tools",
      items: ["API Testing", "Vulnerability Assessment", "Security Scanning"],
    },
    {
      category: "Development",
      items: ["Git", "REST APIs", "Database Management"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-navy mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center space-x-2 text-gray-600"
                  >
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;