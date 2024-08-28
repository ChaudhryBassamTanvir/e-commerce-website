import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <br />
      <div className="border-b border-t border-gray-200 sm:block">
        <div className="container py-4">
          <div className="flex justify-between items-center">
            <div className="flex lg:flex gap-1">
              <div className="icons_wrap">
                <BsFacebook size={24} />
              </div>
              <div className="icons_wrap">
                <BsTwitter size={24} />
              </div>
              <div className="icons_wrap">
                <BsInstagram size={24} />
              </div>
              <div className="icons_wrap">
                <BsLinkedin size={24} />
              </div>
            </div>

            <div className="text-gray-500 text-[12px]">
              <b>Shopping with US </b>Order Now
            </div>
            <div className="flex gap-4">
              <select
                className="text-gray-500 text-[12px] w-[70px]"
                name="Style"
                id="Style"
              >
                <option value="Normal">Normal</option>
                <option value="Heading">Heading</option>
                <option value="Subheading">Subheading</option>
              </select>
              <select
                className="text-gray-500 text-[12px] w-[70px]"
                name="lang"
                id="lang"
              >
                <option value="English">English</option>
                <option value="Urdu">Urdu</option>
                <option value="Turkish">Turkish</option>
                <option value="French">French</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
