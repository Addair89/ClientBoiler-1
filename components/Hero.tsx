import React from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

interface HeroProps {
  imageSrc: string;
  text: string;
  imageAlt: string;
}

const Hero: React.FC<HeroProps> = ({ imageSrc, text, imageAlt }) => {
  return (
    <div className="grid md:grid-cols-[2fr,1fr] justify-center max-w-[90vw] m-auto mt-16 lg:mt-10 gap-5">
      <Image
        className="w-full h-full hidden object-cover md:block rounded-lg lg:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        src={imageSrc}
        alt={imageAlt}
        width={1800}
        height={760}
        style={{ objectFit: "cover", objectPosition: "right" }}
      />
      <div className="text-center h-full flex flex-col justify-center items-center ">
        <h1 className="text-[72px] leading-[1] font-light text-gray-600">
          Company Name
        </h1>
        <h3 className=" relative p-8 text-balance text-center text-gray-600 text-4xl font-semibold">
          {text}
        </h3>
        <button className="flex items-center justify-center gap-2 h-[3rem] w-[12rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65">
          Call To Action
        </button>
      </div>
    </div>
  );
};

export default Hero;
