import React from "react";
import ProductCard from "./ProductCard";
const Productdata = [
  {
    img: "/girl.jpg",
    title: "Maching Lengthy Froks",
    desc: "Maching Lengthy Froks",
    rating: 5,
    price: "440.0$",
  },
  {
    img: "/girl2.jpg",
    title: "Yellow Skirt",
    desc: "Yellow Skirt",
    rating: 4,
    price: "190.0$",
  },
  {
    img: "/girl3.jpg",
    title: "Lengthy Frok",
    desc: "Lengthy Frok",
    rating: 5,
    price: "220.0$",
  },
  {
    img: "/man2.jpg",
    title: "",
    desc: "Rough Jeans & Red Shirt",
    rating: 4,
    price: "120.0$",
  },

  {
    img: "/kids3.jpg",
    title: "Kids Wear",
    desc: "Kids Wear ",
    rating: 4,
    price: "130.0$",
  },
  {
    img: "/girl6.jpg",
    title: "Orange Skirt",
    desc: "Orange Skirt",
    rating: 3,
    price: "220.0$",
  },

  {
    img: "/perfume.jpg",
    title: "JOVAN PERFUME",
    desc: "JOVAN PERFUME",
    rating: 5,
    price: "260.0$",
  },
  {
    img: "/watch.avif",
    title: "Digital Armani Watch",
    desc: "Digital Armani Watch",
    rating: 3,
    price: "130.0$",
  },
  {
    img: "/kid.jpg",
    title: "Jeans & Plane Shirt",
    desc: "Jeans & Plane Shirt",
    rating: 3,
    price: "80.0$",
  },
  {
    img: "/7.jpg",
    title: "Red Skirt",
    desc: "Red Skirt Party Wear",
    rating: 4,
    price: "120.0$",
  },
  {
    img: "/2.PNG",
    title: "Mobie ",
    desc: "Mobile",
    rating: 2,
    price: "20.0$",
  },
];

const NewProducts = () => {
  return (
    <div className="container pt-16">
      <h2 className="font-medium text-2xl pb-4">New Products</h2>
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
  );
};

export default NewProducts;
