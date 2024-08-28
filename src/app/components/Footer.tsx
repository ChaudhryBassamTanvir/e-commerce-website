import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="bg-accent w-full h-auto ">
        <br />
        <div className="container ">
          <div className="flex flex-wrap justify-center md:justify-between overflow-x-hidden">
            <div className="w-full pl-80 md:w-1/3 px-4 mb-8 md:mb-0">
              <h5 className="text-white border-l-4 border-gray-200 pl-6 mb-4">
                <b>Quick links</b>
              </h5>
              <ul className="list-disc list-inside text-blackish text-base ">
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:underline hover:text-blackish font-semibold"
                  >
                    <i className="fa fa-angle-double-right"></i> Home
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:underline  hover:text-blackish font-semibold"
                  >
                    <i className="fa fa-angle-double-right"></i> About
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:underline  hover:text-blackish font-semibold"
                  >
                    <i className="fa fa-angle-double-right"></i> FAQ
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:underline hover:text-blackish font-semibold"
                  >
                    <i className="fa fa-angle-double-right"></i> Privacy &
                    Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:underline  hover:text-blackish font-semibold"
                  >
                    <i className="fa fa-angle-double-right"></i> Videos
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="mb-6 md:mb-0 pl-4">
                <a href="#" className="flex items-center">
                  <img
                    src="/FAB.jpg"
                    className="h-24 w-24 rounded-full me-3"
                    alt="FlowBite Logo"
                  />
                  <span className="self-center text-2xl font-serif text-black whitespace-nowrap dark:text-black">
                    <b>FAB</b>
                  </span>
                </a>
              </div>
            </div>

            <div className="w-full pl-20 md:w-1/3 mb-3 md:mb-0">
              <h5 className="text-white border-l-4 border-gray-200 pl-2 mb-4">
                <b>Connect with us</b>
              </h5>
              <ul className="list-unstyled quick-links">
                <li className="mb-2">
                  <a href="#" className="flex items-center hover:underline">
                    <BsFacebook size={28} className="inline-block mr-2" />{" "}
                    Facebook
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="flex items-center hover:underline">
                    <BsTwitter size={28} className="inline-block mr-2" />{" "}
                    Twitter
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="flex items-center hover:underline">
                    <BsInstagram size={28} className="inline-block mr-2" />{" "}
                    Instagram
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="flex items-center hover:underline">
                    <BsLinkedin size={28} className="inline-block mr-2" />{" "}
                    LinkedIn
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="flex items-center hover:underline">
                    <BsGithub size={28} className="inline-block mr-2" /> GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <br />
          <br />

          <div className="w-full px-4 mb-8 md:mb-0 flex justify-center">
            <div className="text-center">
              <h5 className="text-white font-serif  pl-4 md:pl-8 ">
                <b> About FAB :</b>
              </h5>

              <p className="text-white font-serif hover:sans">
                "Be exclusive, be divine, be admirable; ignite your wardrobe
                with us."
              </p>
            </div>
          </div>
          <div className="text-center text-white font-serif">
            <p>
              <u>
                <a href="https://www.nationaltransaction.com/">
                  About a successful store in UK PAK USA
                </a>
              </u>{" "}
              | Start Shopping with us |
            </p>
            <br />
            <p className="text-sm">
              &copy; All right Reversed.{" "}
              <a
                className="text-green ml-2"
                href="https://www.sunlimetech.com"
                target="_blank"
              >
                2024
              </a>
            </p>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Footer;
