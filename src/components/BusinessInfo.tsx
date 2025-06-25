import { FaCircleArrowRight } from "react-icons/fa6";

export const BusinessInfo = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-6xl gap-0.5 my-16 z-20">
      <div className="bg-white p-8 md:max-lg:p-4 w-full shadow flex flex-col justify-between h-52 hover:cursor-pointer max-md:rounded-t-lg md:rounded-l-lg transition-all duration-300 hover:shadow-xl group">
        <h5 className="text-[28px] font-bold ">Where we work</h5>
        <div className="flex gap-4 h-14 items-center">
          <img src="icons/location.svg" className="w-8 -mt-2" />
          {/* <div> */}
          <p className="pr-8 text-sm">
            The Southeast Florida Area. Miami-Dade County | Broward County |
            Palm Beach County
          </p>
          {/* </div> */}
        </div>
      </div>
      <div className="relative bg-white p-8 md:max-lg:p-4 w-full shadow flex flex-col justify-between h-52 hover:cursor-pointer transition-all duration-300 hover:shadow-xl group">
        <div>
          <FaCircleArrowRight className="max-lg:hidden w-6 h-7 absolute right-10 top-9 text-black transition-all duration-300 group-hover:text-primary-500" />
          <h5 className="text-[28px] font-bold leading-tight">
            Working <br className="md:hidden" /> Hours
          </h5>
        </div>
        <div className="flex gap-4 h-14 items-center">
          <img src="icons/clock.svg" className="w-10" />
          <div className="">
            <p className="text-sm">Mon - Sat</p>
            <p className="text-sm font-semibold">8:00 a.m - 9:00 p.m</p>
          </div>
        </div>
      </div>
      <div className="relative bg-white p-8 md:max-lg:p-4 max-md:rounded-b-lg md:rounded-r-lg w-full shadow flex flex-col justify-between h-52 hover:cursor-pointer transition-all duration-300 hover:shadow-xl group">
        <FaCircleArrowRight className="max-lg:hidden w-6 h-7 absolute right-10 top-9 text-black transition-all duration-300 group-hover:text-primary-500" />
        <h5 className="text-[28px] font-bold ">Emergency Service</h5>
        <div className="flex gap-2 h-14 items-center">
          <img src="icons/phone.svg" className="w-9" />
          <div>
            <p className="text-sm font-semibold">24/7 hours</p>
            <p className="text-sm">jdenxsolutions@gmail.com</p>
            <p className="text-sm font-semibold">786-6431006</p>
          </div>
        </div>
      </div>
    </div>
  );
};
