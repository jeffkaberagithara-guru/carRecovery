import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaBriefcase,
  FaPhoneAlt,
  FaLink,
} from "react-icons/fa";

import { FcServices } from "react-icons/fc";

function Footer() {
  return (
    <footer className=" text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <div className="flex justify-between mb-5">
          <div className="flex flex-wrap items-baseline space-x-3  mx-20">
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide cursor-pointer">
              ResQAuto
            </h1>
          </div>
          <div className="flex justify-center space-x-6 my-4 mx-10 text-xl text-gray-600">
            <FaFacebookF className="cursor-pointer hover:text-cyan-600 hover:scale-110 transition-transform duration-300" />
            <FaTwitter className="cursor-pointer hover:text-cyan-600 hover:scale-110 transition-transform duration-300" />
            <FaInstagram className="cursor-pointer hover:text-cyan-600 hover:scale-110 transition-transform duration-300" />
            <FaLinkedinIn className="cursor-pointer hover:text-cyan-600 hover:scale-110 transition-transform duration-300" />
            <FaGithub className="cursor-pointer hover:text-cyan-600 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
        <hr className="border-t-2  mx-auto border-white my-5" />

        <div className="flex justify-around text-left  flex-col-2 md:flex-row mt-10">
          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <FcServices className="text-2xl" /> Our Services
            </h2>
            <ul>
              <li className="my-2 cursor-pointer hover:text-cyan-500 hover:-translate-y-1 hover:scale-105">
                Emergency Assistance
              </li>
              <li className="my-2 cursor-pointer hover:text-cyan-500 hover:-translate-y-1 hover:scale-105">
                Rescue & Recovery
              </li>
              <li className="my-2 cursor-pointer hover:text-cyan-500 hover:-translate-y-1 hover:scale-105">
                Maintenance & Inspection
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <FaBriefcase className="text-cyan-600 text-xl" /> Company
            </h2>
            <ul>
              <li className="my-2 cursor-pointer hover:text-cyan-500 hover:-translate-y-1 hover:scale-105">
                Careers
              </li>
              <li className="my-2 cursor-pointer hover:text-cyan-500 hover:-translate-y-1 hover:scale-105">
                Privacy Policy
              </li>
              <li className="my-2 cursor-pointer hover:text-cyan-500 hover:-translate-y-1 hover:scale-105">
                About Us
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <FaPhoneAlt className="text-cyan-600 text-xl" />
              Contact Us
            </h2>
            <ul>
              <li className="my-2 cursor-pointer hover:text-cyan-500 hover:-translate-y-1 hover:scale-105">
                Phone
              </li>
              <li className="my-2 cursor-pointer hover:text-cyan-500 hover:-translate-y-1 hover:scale-105">
                E-mail
              </li>
              <li className="my-2 cursor-pointer hover:text-cyan-500 hover:-translate-y-1 hover:scale-105">
                Location
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold flex items-center">
              <FaLink className="text-cyan-600 text-xl" />
              Quick Links
            </h2>
            <ul>
              <li className="my-2 cursor-pointer hover:text-cyan-500 hover:-translate-y-1 hover:scale-105">
                FAQ
              </li>
              <li className="my-2 cursor-pointer hover:text-cyan-500 hover:-translate-y-1 hover:scale-105">
                Help Center
              </li>
              <li className="my-2 cursor-pointer hover:text-cyan-500 hover:-translate-y-1 hover:scale-105">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-sm">
          &copy; {new Date().getFullYear()} ResqAuto - All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
