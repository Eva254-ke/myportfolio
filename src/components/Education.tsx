const Education = () => {
  const education = [
    {
      school: "Mount Kenya University",
      degree: "BSc in Information Technology",
      period: "2023 - Present",
      description: "Currently pursuing Information Technology degree with focus on software development and security.",
    },
    {
      school: "University of the People",
      degree: "BSc in Computer Science",
      period: "2023 - Present",
      description: "Studying Computer Science with emphasis on programming and algorithms.",
    },
    {
      school: "Google Professional Cybersecurity Certificate",
      degree: "Professional Certificate",
      period: "Completed",
      description: "Comprehensive training in cybersecurity principles and practices.",
    },
    {
      school: "Kebirigo Boys High School",
      degree: "Secondary Education",
      period: "2019 - 2021",
      description: "Completed secondary education with focus on sciences and mathematics.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Education</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-accent/20 before:rounded-full"
            >
              <div className="absolute left-0 top-0 w-2 h-2 bg-accent rounded-full transform -translate-x-[3px]"></div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-navy">{edu.school}</h3>
                  <span className="text-sm text-accent font-medium">{edu.period}</span>
                </div>
                <p className="text-lg font-medium text-gray-700 mb-2">{edu.degree}</p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;