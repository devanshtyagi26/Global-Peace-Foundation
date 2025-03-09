import one from "../assets/Carousel/one.jpg";
import two from "../assets/Carousel/two.jpg";
import three from "../assets/Carousel/three.jpg";

export const Carousel = () => {
  return (
    <>
      <img src={one} className="w-full h-full object-cover" alt="Slide 1" />
      <img
        src="../assets/Carousel/one.jpg"
        className="w-full h-full object-cover"
        alt="Slide 1"
      />
      <div
        data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer",
    "isAutoPlay": true
  }'
        className="relative w-full mt-[2rem] h-fit"
      >
        <div className="hs-carousel relative overflow-hidden w-full h-[35rem] min-h-96 bg-white rounded-lg ">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            <div className="hs-carousel-slide h-full w-full">
              <div className="flex justify-center items-center w-full h-full bg-gray-100">
                <img
                  src={one}
                  className="w-full h-full object-cover"
                  alt="Slide 1"
                />
              </div>
            </div>
            <div className="hs-carousel-slide h-full w-full">
              <div className="flex justify-center items-center w-full h-full bg-gray-200">
                <img
                  src={three}
                  className="w-full h-full object-cover"
                  alt="Slide 2"
                />
              </div>
            </div>
            <div className="hs-carousel-slide h-full w-full">
              <div className="flex justify-center items-center w-full h-full bg-gray-300">
                <img
                  src={two}
                  className="w-full h-full object-cover"
                  alt="Slide 3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Previous Button */}
        <button
          type="button"
          className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-s-lg"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>

        {/* Next Button */}
        <button
          type="button"
          className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-e-lg"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>

        {/* Pagination (Optional) */}
        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 flex gap-x-2"></div>
      </div>
    </>
  );
};
