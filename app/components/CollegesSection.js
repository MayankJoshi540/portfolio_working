const CollegesSection = () => {
  const colleges = [
    {
      name: "Indian Institute of Technology",
      shortName: "IIT",
      location: "Multiple Locations",
      established: "1951",
      type: "Engineering & Technology",
      image: "/colleges/iit.jpg", // Replace with actual image path
      description: "Premier institutes for engineering and technology education in India.",
      highlights: ["Top Engineering Programs", "Research Excellence", "Industry Connections"]
    },
    {
      name: "Indian Institute of Management",
      shortName: "IIM",
      location: "Multiple Locations", 
      established: "1961",
      type: "Management",
      image: "/colleges/iim.jpg",
      description: "Leading business schools offering world-class management education.",
      highlights: ["MBA Programs", "Executive Education", "Global Rankings"]
    },
    {
      name: "National Institute of Technology",
      shortName: "NIT",
      location: "Multiple Locations",
      established: "1960",
      type: "Engineering & Technology",
      image: "/colleges/nit.jpg",
      description: "Prestigious technical institutes known for quality engineering education.",
      highlights: ["B.Tech Programs", "M.Tech Programs", "Research Facilities"]
    },
    {
      name: "All India Institute of Medical Sciences",
      shortName: "AIIMS",
      location: "Multiple Locations",
      established: "1956",
      type: "Medical",
      image: "/colleges/aiims.jpg",
      description: "Premier medical institutions providing excellent healthcare education.",
      highlights: ["MBBS Programs", "Medical Research", "Healthcare Excellence"]
    },
    {
      name: "Delhi University",
      shortName: "DU",
      location: "New Delhi",
      established: "1922",
      type: "Multi-disciplinary",
      image: "/colleges/du.jpg",
      description: "One of India's largest and most prestigious universities.",
      highlights: ["Diverse Programs", "Research Opportunities", "Cultural Activities"]
    },
    {
      name: "Jawaharlal Nehru University",
      shortName: "JNU",
      location: "New Delhi",
      established: "1969",
      type: "Research University",
      image: "/colleges/jnu.jpg",
      description: "Leading research university known for academic excellence.",
      highlights: ["Social Sciences", "International Studies", "Research Programs"]
    },
    {
      name: "Indian Statistical Institute",
      shortName: "ISI",
      location: "Kolkata",
      established: "1931",
      type: "Statistics & Mathematics",
      image: "/colleges/isi.jpg",
      description: "Premier institute for statistical and mathematical sciences.",
      highlights: ["Statistics Programs", "Data Science", "Mathematical Research"]
    },
    {
      name: "Banaras Hindu University",
      shortName: "BHU",
      location: "Varanasi",
      established: "1916",
      type: "Central University",
      image: "/colleges/bhu.jpg",
      description: "One of the largest residential universities in Asia.",
      highlights: ["Comprehensive Programs", "Cultural Heritage", "Research Excellence"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Colleges We{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover top-tier educational institutions across India. From prestigious IITs to renowned medical colleges, 
            find the perfect match for your academic journey.
          </p>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {colleges.map((college, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* College Image */}
              <div className="relative h-48 rounded-t-xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-600">
                {/* Placeholder - Replace with actual images */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-slate-900">{college.shortName}</span>
                    </div>
                    <p className="text-slate-400 text-sm">College Image</p>
                  </div>
                </div>
                
                {/* Uncomment when you have images */}
                {/* 
                <Image
                  src={college.image}
                  alt={college.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                */}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                
                {/* College Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-emerald-500/90 text-white text-sm font-medium rounded-full">
                    {college.type}
                  </span>
                </div>
              </div>

              {/* College Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-2">
                    {college.name}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-slate-400 mb-3">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {college.location}
                    </span>
                    <span>Est. {college.established}</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {college.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-emerald-400">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300">
            View All Colleges
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollegesSection;