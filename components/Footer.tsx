import clientLogo from "@/public/bluePrintLogo.png";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

interface Link {
  url: string;
  name: string;
}

const links: Link[] = [
  { url: "/", name: "Home" },
  { url: "/about", name: "About" },
  { url: "/services", name: "Services" },
  { url: "/contact", name: "Contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative md:min-h-[200px] mt-auto bg-gray-400/50 text-gray-700 flex gap-6 flex-col justify-center items-center md:grid md:grid-cols-3 p-8 md:justify-items-center md:items-start">
      <Image
        src={clientLogo}
        alt="Owner"
        className="rounded-lg shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hidden md:block"
        width={500}
        height={500}
        style={{ width: "auto", height: "auto" }}
      />
      <div className="flex items-start flex-col gap-6">
        <p className="flex items-center gap-2">
          <span>
            <FaPhone />
          </span>
          555-555-5555
        </p>
        <p className="flex items-center gap-2">
          <span>
            <MdEmail />
          </span>{" "}
          Emailexample@gmail.com
        </p>
        <p className="flex items-center gap-2">
          <span>
            <FaLocationDot />
          </span>{" "}
          1234 e Example St
          <br />
          City, State 12345
        </p>
      </div>
      <ul className="flex items-center flex-col gap-3">
        {links.map((link) => (
          <li key={link.url}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
      <p className=" text-gray-700 col-span-3 justify-self-center">
        Created by AddairDesigntm
      </p>
    </footer>
  );
};

export default Footer;
