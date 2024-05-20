import React from "react";
import Image from "next/image";
import personImage from "@/public/christian-buehner-DItYlc26zVI-unsplash.jpg";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Contact from "@/components/ContactUs";

const AboutPage: React.FC = () => {
  return (
    <div className="">
      <h3 className=" text-gray-700 text-[72px] mt-10 mb-20 text-center font-light">
        Who We Are
      </h3>
      <div className="grid grid-cols-[2fr,1fr] items-center justify-items-center mb-[7rem] m-auto max-w-[80vw] h-[50vh] gap-10">
        <div className="text-2xl text-gray-800 font-light">
          <p className="text-balance mb-10 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem hic quibusdam, porro quod temporibus, quisquam
            accusamus repellat atque totam quasi laudantium, quos consequuntur
            dicta ab dolore excepturi voluptas adipisci ullam!
          </p>
          <p className="text-balance text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem hic quibusdam, porro quod temporibus, quisquam
            accusamus repellat atque totam quasi laudantium, quos consequuntur
            dicta ab dolore excepturi voluptas adipisci ullam!
          </p>
        </div>
        <Image
          src={personImage}
          alt="person image"
          className="rounded-lg shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        />
      </div>
      <div className="mt-20">
        <Contact />
      </div>
    </div>
  );
};

export default AboutPage;
