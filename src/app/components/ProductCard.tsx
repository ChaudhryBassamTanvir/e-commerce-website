import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  rating,
  price,
}) => {
  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#f8e263]">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#f8e263]">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#f8e263]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#f8e263]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#f9ad56]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
    }
  };

  return (
    <div className="p-4 border border-gray-200 rounded-xl max-w-full sm:max-w-[400px]">
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <div className="p-4 sm:p-8">
            <img
              className="rounded-t-lg w-full h-[200px] sm:h-[250px] object-cover"
              src={img}
              alt="product image"
            />
          </div>
        </a>
        <div className="px-4 sm:px-5 pb-5">
          <a href="#">
            <h5 className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {desc}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            {generateRating(rating)}
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {price}
            </span>
            <a
              href="#"
              className="text-white bg-[#f65669] hover:bg-black focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-3.5 sm:px-5 py-2 text-center dark:bg-accent dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-4"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
