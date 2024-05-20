import OwnerImage from "@/public/christian-buehner-DItYlc26zVI-unsplash.jpg";
import Image from "next/image";

interface AboutUsProps {
  aboutUsData: {
    title: string;
    companyName: string;
    established: string;
    description: string;
    owner: string;
    ownerImage: string;
  };
}

const AboutUs: React.FC<AboutUsProps> = ({ aboutUsData }) => {
  const {
    title,
    companyName,
    established,
    description,
    owner,
    ownerImage,
  } = aboutUsData;
  return (
    <section className=" max-w-[80vw] m-auto mt-10 ">
      <h2 className="text-center text-[62px] font-light text-gray-700 mb-10">
        {title}
      </h2>
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr,1fr] items-center justify-center ">
        <div>
          <div className="leading-loose text-balance text-center text-[1.2rem]">
            <h4 className="text-3xl font-semibold mb-5 text-gray-700">
              {companyName} since {established}
            </h4>
            <p className=" text-gray-600">{description}.</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={ownerImage}
            alt="Owner"
            className="rounded-lg shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
            width={500}
            height={500}
            style={{ width: "auto", height: "auto" }}
          />
          <p className="text-center text-gray-600 mt-2">
            {owner}
            {"("}owner{")"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
