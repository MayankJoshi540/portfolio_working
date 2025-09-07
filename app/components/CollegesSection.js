const CollegesSection = () => {
  const colleges = [
    {
      name: "School of Engineering and Computing",
      shortName: "SEC",
      location: "Dehradun",
      established: "2005",
      type: "Engineering & Computing",
      image: "/colleges/engineering.jpg",
      description: "Offering cutting-edge programs in engineering and computer science with state-of-the-art facilities.",
      highlights: ["B.Tech Programs", "Computer Science", "Modern Labs"]
    },
    {
      name: "School of Management and Commerce",
      shortName: "SMC",
      location: "Dehradun",
      established: "2006",
      type: "Management",
      image: "/colleges/management.jpg",
      description: "Premier business school focusing on management education and commercial practices.",
      highlights: ["BBA", "MBA", "Commerce Studies"]
    },
    {
      name: "School of Pharmacy and Research",
      shortName: "SPR",
      location: "Dehradun",
      established: "2007",
      type: "Pharmacy",
      image: "/colleges/pharmacy.jpg",
      description: "Advanced pharmaceutical education with research-oriented approach.",
      highlights: ["B.Pharm", "Research Labs", "Industry Projects"]
    },
    {
      name: "School of Hotel Management and Tourism",
      shortName: "SHMT",
      location: "Dehradun",
      established: "2008",
      type: "Hospitality",
      image: "/colleges/hotel.jpg",
      description: "Comprehensive programs in hospitality and tourism management.",
      highlights: ["Hotel Management", "Tourism Studies", "Practical Training"]
    },
    {
      name: "School of Architecture",
      shortName: "SOA",
      location: "Dehradun",
      established: "2009",
      type: "Architecture",
      image: "/colleges/architecture.jpg",
      description: "Creating future architects with innovative design thinking.",
      highlights: ["B.Arch", "Design Studio", "Modern Tools"]
    },
    {
      name: "School of Journalism and Liberal Arts",
      shortName: "SJLA",
      location: "Dehradun",
      established: "2010",
      type: "Liberal Arts",
      image: "/colleges/journalism.jpg",
      description: "Fostering critical thinking through journalism and liberal arts education.",
      highlights: ["Mass Communication", "Liberal Studies", "Media Lab"]
    },
    {
      name: "School of Allied Sciences",
      shortName: "SAS",
      location: "Dehradun",
      established: "2011",
      type: "Allied Sciences",
      image: "/colleges/allied.jpg",
      description: "Comprehensive programs in various allied science disciplines.",
      highlights: ["Health Sciences", "Research Focus", "Modern Facilities"]
    },
    {
      name: "Dev Bhoomi Medical College of Paramedical Sciences",
      shortName: "DBMCPS",
      location: "Dehradun",
      established: "2012",
      type: "Paramedical",
      image: "/colleges/paramedical.jpg",
      description: "Excellence in paramedical education and healthcare training.",
      highlights: ["Paramedical Courses", "Clinical Training", "Healthcare Focus"]
    },
    {
      name: "Dev Bhoomi Institute of Polytechnic",
      shortName: "DBIP",
      location: "Dehradun",
      established: "2013",
      type: "Polytechnic",
      image: "/colleges/polytechnic.jpg",
      description: "Quality technical education through diploma programs.",
      highlights: ["Diploma Programs", "Technical Training", "Skill Development"]
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
                
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
 
      </div>
    </section>
  );
};

export default CollegesSection;