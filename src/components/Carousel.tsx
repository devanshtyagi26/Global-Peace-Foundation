import one from "/Carousel/one.jpg";
import two from "/Carousel/two.jpg";
import three from "/Carousel/three.jpg";
import { useEffect, useState, useRef } from "react";

// Add TypeScript declaration for the Preline carousel
declare global {
  interface Window {
    HSStaticCarousel?: {
      autoInit: () => void;
    };
  }
}

export const Carousel = () => {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [one, three, two]; // Array of slide images
  const autoPlayRef = useRef<number | null>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    // Handle wrapping around
    let newIndex = index;
    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;

    setCurrentSlide(newIndex);

    // Manually scroll the container if ref is available
    if (slidesContainerRef.current) {
      const slideWidth = slidesContainerRef.current.clientWidth;
      slidesContainerRef.current.scrollTo({
        left: slideWidth * newIndex,
        behavior: "smooth",
      });
    }
  };

  // Handle next and previous slide
  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  // Set up auto-play effect
  useEffect(() => {
    // Start autoplay
    autoPlayRef.current = window.setInterval(() => {
      nextSlide();
    }, 4000);

    // Cleanup on unmount
    return () => {
      if (autoPlayRef.current !== null) {
        window.clearInterval(autoPlayRef.current);
      }
    };
  }, [currentSlide]);

  return (
    <div className="w-screen -mx-4 relative overflow-hidden">
      {/* Slides container - Height is more adaptive now */}
      <div
        className="relative"
        style={{
          height: "auto",
          maxHeight: "clamp(300px, 70vh, 650px)",
        }}
      >
        {/* Render all slides absolutely positioned */}
        <div
          ref={slidesContainerRef}
          className="flex w-full h-full snap-x snap-mandatory overflow-x-auto scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-none w-full h-full snap-center flex justify-center items-center"
            >
              <img
                src={slide}
                className="w-full max-h-full object-contain md:object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button - Small and corner-attached on mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-[12px] md:left-4 top-1/2 md:-translate-y-1/2 top-[40%] z-20 bg-black/70 hover:bg-black/90 text-white w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-xl border-2 border-white/30"
        aria-label="Previous slide"
      >
        <svg
          className="size-6 md:size-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
      </button>

      {/* Next Button - Small and corner-attached on mobile */}
      <button
        onClick={nextSlide}
        className="absolute right-0 md:right-4 top-1/2 md:-translate-y-1/2 top-[40%] md:top-1/2 z-20 bg-black/70 hover:bg-black/90 text-white w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-xl border-2 border-white/30"
        aria-label="Next slide"
      >
        <svg
          className="size-6 md:size-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>

      {/* Pagination indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full border-2 border-white/70 ${
              currentSlide === index ? "bg-white" : "bg-black/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
