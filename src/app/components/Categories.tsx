import Link from "next/link";
import React from "react";
const Categories = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar_link relative" href="/">
            HOME
          </Link>
          {/* <Link className="navbar_link relative" href="#">
            CATEGORIES
          </Link> */}
          <Link className="navbar_link relative" href="./mens">
            MEN'S
          </Link>
          <Link className="navbar_link relative" href="./women">
            WOMEN'S
          </Link>
          <Link className="navbar_link relative" href="./shoes">
            SHOES
          </Link>
          <Link className="navbar_link relative" href="./books">
            BOOKS
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Categories;
