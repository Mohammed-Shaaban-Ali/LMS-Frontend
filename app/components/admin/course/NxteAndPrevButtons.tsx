import React from "react";

type Props = {
  prevOptions: () => void;
  nextOptions: () => void;
};

function NxteAndPrevButtons({ nextOptions, prevOptions }: Props) {
  return (
    <div className="w-full flex items-center justify-between">
      <button
        onClick={prevOptions}
        className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-[#37a39a] border-2 border-[#37a39a] rounded-2xl hover:text-white group hover:bg-gray-50"
      >
        <span className="absolute left-0 block w-full h-0 transition-all bg-[#37a39a] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute left-4 flex items-center justify-start w-10 h-10 duration-300 transform -translate-x-full group-hover:translate-x-0 ease">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </span>
        <span className="relative">Prev</span>
      </button>

      <button
        onClick={nextOptions}
        className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-[#37a39a] border-2 border-[#37a39a] rounded-2xl hover:text-white group hover:bg-gray-50"
      >
        <span className="absolute left-0 block w-full h-0 transition-all bg-[#37a39a] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
        <span className="relative">Next</span>
      </button>
    </div>
  );
}

export default NxteAndPrevButtons;
