import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div id="home" className="relative bg-indigo-900 pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80"
          alt="Youth gathering"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="mt-10 flex space-x-4">
          <a
            href="#join"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Join Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#events"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
          >
            Upcoming Events
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
