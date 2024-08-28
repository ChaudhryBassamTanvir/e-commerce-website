import React from "react";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
const Productdata = [
  {
    img: "/books/nv1.webp",
    title: "N",
    desc: "Namal ",
    rating: 5,
    price: "99.0$",
  },
  {
    img: "/books/nv2.webp",
    title: "N",
    desc: "Maala ",
    rating: 4,
    price: "89.0$",
  },
  {
    img: "/books/nv3.webp",
    title: "N",
    desc: "Mushaf ",
    rating: 4,
    price: "69.0$",
  },
  {
    img: "/books/nv4.webp",
    title: "N",
    desc: "Mein Anmol ",
    rating: 4,
    price: "49.0$",
  },
  {
    img: "/books/nv5.webp",
    title: "N",
    desc: "Haalim ",
    rating: 5,
    price: "99.0$",
  },
];

const page = () => {
  return (
    <>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">BOOKs & NOVELS</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-item-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {Productdata.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default page;
