import clientLogo from "@/public/bluePrintLogo.png";
import Image from "next/image";

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

const Header: React.FC = () => {
  return (
    <nav className="flex items-center pl-[5vw] pr-[5vw] justify-between h-16 bg-white border-b border-slate-300 shadow-[rgba(0,_0,_0,_0.2)_0px_10px_40px_-7px]">
      <div className="">
        <Image
          className="rounded-full"
          src={clientLogo}
          alt="Client Logo"
          width={40}
        />
      </div>

      <ul className="flex gap-10 mr-4 h-full items-center">
        {links.map((link) => (
          <li key={link.url}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
