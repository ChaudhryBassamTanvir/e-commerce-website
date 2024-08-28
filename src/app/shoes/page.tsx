import React from "react";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
const Productdata = [
  {
    img: "/shoes/s1.jpg",
    title: "White Polo Shirt",
    desc: "Black Running Joggers ",
    rating: 4,
    price: "99.0$",
  },
  {
    img: "/shoes/s2.jpg",
    title: "White Polo Shirt",
    desc: "Nike Shoes",
    rating: 4,
    price: "199.0$",
  },
  {
    img: "/shoes/s3.jpg",
    title: "White Polo Shirt",
    desc: "BLOCK HEELS",
    rating: 4,
    price: "249.0$",
  },
  {
    img: "/shoes/s4.jpg",
    title: "White Polo Shirt",
    desc: " STILETTO HEELS",
    rating: 3,
    price: "79.0$",
  },
  {
    img: "/shoes/s5.jpg",
    title: "White Polo Shirt",
    desc: "Red Nike Snikkers",
    rating: 5,
    price: "179.0$",
  },
  {
    img: "/shoes/s6.jpg",
    title: "White Polo Shirt",
    desc: "Military Shoes",
    rating: 4,
    price: "299.0$",
  },
  //   {
  //     img: "/shoes/s7.jpg",
  //     title: "White Polo Shirt",
  //     desc: "Nike Trainers ",
  //     rating: 4,
  //     price: "200.0$",
  //   },
  {
    img: "/shoes/s8.jpg",
    title: "White Polo Shirt",
    desc: "STILETTO",
    rating: 4,
    price: "129.0$",
  },
  {
    img: "/shoes/s9.jpg",
    title: "White Polo Shirt",
    desc: "TRAINER SHOES",
    rating: 4,
    price: "99.0$",
  },
  {
    img: "/shoes/s10.jpg",
    title: "White Polo Shirt",
    desc: " LOAFERS AND BOATFLORENCE MAXI",
    rating: 5,
    price: "199.0$",
  },
  {
    img: "/shoes/s11.jpg",
    title: "White Polo Shirt",
    desc: "KHADDI PENCIL HEALS",
    rating: 4,
    price: "159.0$",
  },
];

const page = () => {
  return (
    <>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">SHOES</h2>
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
