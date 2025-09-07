const PYQSection = () => {
  const boards = [
    {
      name: "CBSE Board",
      fullName: "Central Board of Secondary Education",
      description: "Access previous year question papers for CBSE board examinations from Class 10 to Class 12",
      icon: "📚",
      classes: [
        {
          class: "Class 10",
          subjects: ["Mathematics", "Science", "English", "Hindi", "Social Science"],
          years: ["2024", "2023", "2022", "2021", "2020"],
          papersCount: "150+ Papers"
        },
        {
          class: "Class 12",
          subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Hindi"],
          years: ["2024", "2023", "2022", "2021", "2020"],
          papersCount: "200+ Papers"
        }
      ]
    },
    {
      name: "Uttarakhand Board",
      fullName: "Uttarakhand Board of School Education",
      description: "Complete collection of previous year papers for UK Board examinations",
      icon: "🏔️",
      classes: [
        {
          class: "Class 10",
          subjects: ["Mathematics", "Science", "English", "Hindi", "Social Science", "Sanskrit"],
          years: ["2024", "2023", "2022", "2021", "2020"],
          papersCount: "120+ Papers"
        },
        {
          class: "Class 12",
          subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Hindi", "Commerce"],
          years: ["2024", "2023", "2022", "2021", "2020"],
          papersCount: "180+ Papers"
        }
      ]
    }
  ];

  const features = [
    {
      icon: "📝",
      title: "Latest Papers",
      description: "Updated with 2024 question papers"
    },
    {
      icon: "💡",
      title: "Solutions Included",
      description: "Detailed answers and explanations"
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Access papers on any device"
    },
    {
      icon: "⚡",
      title: "Quick Download",
      description: "PDF format for easy printing"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Previous Year{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Access comprehensive collection of previous year question papers from CBSE and Uttarakhand Board. 
            Perfect for exam preparation and practice.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-emerald-400/50 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Boards Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {boards.map((board, boardIndex) => (
            <div
              key={boardIndex}
              className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl border border-slate-600 hover:border-emerald-400/30 transition-all duration-300 overflow-hidden"
            >
              {/* Board Header */}
              <div className="p-8 border-b border-slate-600">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{board.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{board.name}</h3>
                    <p className="text-emerald-400 font-medium">{board.fullName}</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">{board.description}</p>
              </div>

              {/* Classes */}
              <div className="p-8 space-y-8">
                {board.classes.map((classData, classIndex) => (
                  <div key={classIndex} className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold text-emerald-400">{classData.class}</h4>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                        {classData.papersCount}
                      </span>
                    </div>

                    {/* Subjects */}
                    <div className="space-y-3">
                      <h5 className="text-white font-semibold">Available Subjects:</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {classData.subjects.map((subject, subIndex) => (
                          <div
                            key={subIndex}
                            className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors duration-200 cursor-pointer group"
                          >
                            <span className="text-slate-300 group-hover:text-white transition-colors">
                              {subject}
                            </span>
                            <svg className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Years */}
                    <div className="space-y-3">
                      <h5 className="text-white font-semibold">Available Years:</h5>
                      <div className="flex flex-wrap gap-2">
                        {classData.years.map((year, yearIndex) => (
                          <button
                            key={yearIndex}
                            className="px-4 py-2 bg-slate-600 text-slate-300 rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 font-medium"
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Board CTA */}
                <div className="pt-6 border-t border-slate-600">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
                    Browse All {board.name} Papers
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
       
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">500+</div>
            <div className="text-slate-400">Question Papers</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">2</div>
            <div className="text-slate-400">Education Boards</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">15+</div>
            <div className="text-slate-400">Subjects Covered</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">5</div>
            <div className="text-slate-400">Years Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PYQSection;