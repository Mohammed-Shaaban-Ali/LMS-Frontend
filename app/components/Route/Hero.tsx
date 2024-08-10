import Image from "next/image";
import HeroImage from "../../../public/Image/banner-img-1.png";

const Hero = () => {
  return (
    <section className="w-full lg:flex min-h-[100vh] items-center gap-60 lg:container lg:mx-auto px-2 mb-8">
      {/* Left */}
      <div className="top-[100px] lg:top-[unset] mt-10 mb-14 lg:w-[600px] lg:h-[600px] h-[50vh] rounded-[50%] hero-animation z-[-1] flex items-center justify-center">
        <Image
          src={HeroImage}
          alt="Hero"
          // loading="lazy"
          priority
          className="object-contain  w-[70%] lg:max-w-[75%] h-auto z-10"
        />
      </div>

      {/* Right */}
      <div className="lg:max-w-[35%] flex flex-col items-start gap-4 lg:gap-8  text-black dark:text-white ">
        <h2 className=" text-[28px] lg:text-[48px] font-bold leading-[48px] font-sans tracking-wider">
          Improve Your Online Learning Experience Better Instantly
        </h2>
        <p className="lg:text-lg text-sm font-semibold font-[system-ui] ">
          We have 40k+ online courses & 500k online registered student. Find
          your desired Courses from them
        </p>
        <div className="relative w-full">
          <input
            type="text"
            id="Search"
            placeholder="Search Courses"
            className="w-full p-2 font-bold text-white dark:text-black  bg-slate-200 dark:bg-gray-700  rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
          />
          <span className="absolute inset-y-0 end-0 grid w-10 bg-cyan-400 rounded place-content-center">
            <button type="button" className="text-white font-bold text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
        <div className=" flex items-center justify-center gap-x-4">
          <div className=" -space-x-2 overflow-hidden">
            <Image
              className="inline-block h-6 w-6 lg:h-8 lg:w-8  rounded-full ring-2 ring-white dark:ring-slate-800"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="avatar"
              width={32}
              height={32}
              priority
            />
            <Image
              className="inline-block  h-6 w-6 lg:h-8 lg:w-8  rounded-full ring-2 ring-white dark:ring-slate-800"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="avatar"
              width={32}
              height={32}
              priority
            />
            <Image
              className="inline-block  h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-white dark:ring-slate-800"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt="avatar"
              width={32}
              height={32}
              priority
            />
          </div>
          <p className="font-semibold text-[10px] lg:text-sm font-sans  ">
            500K+ Pepole already trusted us.
            <span className="text-[#04ca88] text-[12px] lg:text-[16px] ml-1">
              View Courses
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
