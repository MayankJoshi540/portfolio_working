import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Santosh Kumar Joshi
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 font-medium">
                Marketing manager Dev Bhoomi Uttarakhand University
              </p>
              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                MBA Marketing with 8 years experience of academic counselling &
                administration and marketing/promotion, Design, Admission. To
                work in a firm with a professional work driven environment,
                where I can utilize and apply my knowledge and skills, which
                would enable me as a fresher to grow while fulfilling the
                organisational goals.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
                View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 pt-4">
              <a
                href="https://www.facebook.com/santosh.joshi.5851?mibextid=wwXIfr&rdid=RybXXRDiIHwJRkTM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F167CmWuGwF%2F%3Fmibextid%3DwwXIfr#"
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
              >
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/santosh-kumar-joshi-7a140a22b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
              >
                <svg
                          className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Animated Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse opacity-20 scale-110"></div>

              {/* Main Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-gradient-to-r from-emerald-400 to-cyan-400 shadow-2xl shadow-emerald-500/20">
                {/* Replace this div with your actual image */}
                <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center">
                  {/* Placeholder - Replace with your Image component */}
                  
                  {/* Uncomment and use this when you have an image */}

                  <img
                    src="https://media.licdn.com/dms/image/v2/C4D03AQGZCA30SxUBHQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667897871562?e=1759968000&v=beta&t=BxxFY57BxF5XU2NcNasWWr1UVVSra01CDX_BcWyNYa0"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-cyan-400 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
