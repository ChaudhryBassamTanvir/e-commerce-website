import React from "react";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const MainSection = () => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container mx-auto sm:flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="font-bold text-2xl sm:text-4xl text-center sm:text-left pb-4 sm:pb-0 text-blackish">
          <img
            className="h-14 w-14 mx-auto sm:mx-0"
            src="/logo.jpg"
            alt="Logo"
          />
        </div>
        <div className="w-full sm:w-[50%] md:w-[70%] relative mt-4 sm:mt-0">
          <input
            className="border-gray-200 border p-2 px-6 rounded-lg w-full pl-10"
            type="text"
            placeholder="Search Your Product"
          />
          <BsSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px] relative mt-4 sm:mt-0">
          <BiUser />
          <div className="relative">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          <div className="relative">
            <HiOutlineShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
