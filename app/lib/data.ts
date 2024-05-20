//Data for the website, switch out for different companies
//Pages customer wants
import { MdCleaningServices } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdMedicalServices } from "react-icons/md";

export const links = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Services", url: "/services" },
  { name: "Contact", url: "/contact" },
];

//Hero Image for business and the text that goes with it
export const heroImage = {
  src: "/TBI-40yr.jpg",
  alt: "Hero Image",
};

export const heroText =
  "lorem ipsum dolor sit amet, consectetur adipiscing elit. ";

//About Us information
//What the title should be, the description, the owner name, and the image of the owner
export const aboutUs = {
  title: "Who We Are...",
  companyName: "The Business Inc.",
  established: "1981",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque modi perferendis molestiae, repellat ullam error aliquam odio reprehenderit consequatur, fugit accusantium quia optio dicta ipsa. Commodi amet molestias ullam ducimus?",
  owner: "Jeff Bezos",
  ownerImage: "/christian-buehner-DItYlc26zVI-unsplash.jpg",
};

export const services = [
  {
    title: "Service 1",
    description:
      "Description of service 1. should be two or three lines long. like this describing service.",
    icon: MdCleaningServices,
  },
  {
    title: "Service 2",
    description:
      "Description of service 1. should be two or three lines long. like this describing service.",
    icon: MdOutlineMiscellaneousServices,
  },
  {
    title: "Service 3",
    description:
      "Description of service 1. should be two or three lines long. like this describing service.",
    icon: MdOutlineDesignServices,
  },
  {
    title: "Service 4",
    description:
      "Description of service 1. should be two or three lines long. like this describing service.",
    icon: MdMedicalServices,
  },
  {
    title: "Service 5",
    description:
      "Description of service 1. should be two or three lines long. like this describing service.",
    icon: MdMedicalServices,
  },
];
