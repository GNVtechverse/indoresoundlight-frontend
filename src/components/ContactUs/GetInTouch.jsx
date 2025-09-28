const GetInTouch = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-stretch gap-5 py-10">
          
          {/* Left - Form */}
          <div className="w-full lg:w-1/2 flex">
            <form className="w-full flex flex-col justify-center gap-4">
              {/* First & Last Name */}
              <div className="w-full flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 w-full sm:w-1/2 border border-black/50 rounded transition-all duration-300"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 w-full sm:w-1/2 border border-black/50 rounded transition-all duration-300"
                />
              </div>

              {/* Email & Phone */}
              <div className="w-full flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 w-full sm:w-1/2 border border-black/50 rounded transition-all duration-300"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="p-3 w-full sm:w-1/2 border border-black/50 rounded transition-all duration-300"
                />
              </div>

              {/* Textarea */}
              <textarea
                placeholder="Event Details"
                className="p-3 border border-black/50 rounded transition-all duration-300 h-32"
              />

              {/* Button */}
              <button
                type="submit"
                className="bg-[#E31E24] text-white py-3 px-6 rounded hover:bg-neutral-900 transition-all duration-300"
              >
                Let’s Get Started
              </button>
            </form>
          </div>

          {/* Right - Image + Overlay Text */}
          <div className="w-full lg:w-1/2 relative rounded-xl overflow-hidden">
            {/* Image */}
            <img
              src="/ContactUs/GetInTouch.jpg"
              alt="Contact"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[60vh] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-center px-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
                Get in <span className="text-[#E31E24]">Touch</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-2xl font-medium text-white max-w-sm sm:max-w-md lg:max-w-xl">
                We’re here to help you create memorable experiences.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
