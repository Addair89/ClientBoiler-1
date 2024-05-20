import React from "react";
import { IconType } from "react-icons/lib";

interface ServiceProps {
  servicesData: {
    title: string;
    description: string;
    icon: IconType;
  }[];
}

const Services: React.FC<ServiceProps> = ({ servicesData }) => {
  return (
    <section className="relative  mt-[6rem]">
      <div className="bg-[#0001f942] absolute top-[-1rem] -z-10 right-[0] h-[31.25rem] w-[20rem] rounded-full blur-[10rem] sm:w-[20.75rem] "></div>
      <h2 className="text-center text-[62px] font-light text-gray-700 pt-10 lg:pb-10">
        Why Choose Us?
      </h2>
      <div className=" flex flex-col w-fit md:flex-row flex-wrap max-w-[80vw] m-auto gap-5 justify-center items-center">
        {servicesData.map((service, index) => (
          <div
            className=" relative lg:max-w-[20%] hover:scale-105 ease-in-out transition-all  min-h-[300px]  p-4 rounded-xl flex flex-col items-center justify-evenly "
            key={index}
          >
            <h3 className="text-[42px] z-20 text-gray-600">{service.title}</h3>
            <p className="text-center text-balance text-gray-600 z-20">
              {service.description}
            </p>
            {/* <service.icon className="absolute top-3 right-3 lg:top-0 lg:right-0 text-[4rem] sm:text-[5rem] lg:text-[2rem] z-10 text-[#dfe1fd]" /> */}
          </div>
        ))}
        <button className="flex items-center justify-center gap-2 h-[3rem] w-[12rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65">
          See All Services
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Services;
