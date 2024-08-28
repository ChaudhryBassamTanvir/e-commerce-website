import React from "react";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
const Productdata = [
  {
    img: "/women/women1.jpg",
    title: "White Polo Shirt",
    desc: "FLORENCE MAXI",
    rating: 4,
    price: "211.0$",
  },
  {
    img: "/women/women2.jpg",
    title: "White Polo Shirt",
    desc: "Business Wear",
    rating: 5,
    price: "149.0$",
  },
  {
    img: "/women/women3.jpg",
    title: "White Polo Shirt",
    desc: "   Shirtdress",
    rating: 4,
    price: "210.0$",
  },
  {
    img: "/women/women4.jpg",
    title: "White Polo Shirt",
    desc: "Culotte dress",
    rating: 4,
    price: "199.0$",
  },
  {
    img: "/women/women5.jpg",
    title: "White Polo Shirt",
    desc: "Business Wear",
    rating: 5,
    price: "149.0$",
  },
  {
    img: "/women/women6.jpg",
    title: "White Polo Shirt",
    desc: "Tunic dress",
    rating: 4,
    price: "129.0$",
  },
  {
    img: "/women/women7.jpg",
    title: "White Polo Shirt",
    desc: " Smoked/layered dress",
    rating: 4,
    price: "110.0$",
  },
  {
    img: "/women/women8.webp",
    title: "White Polo Shirt",
    desc: "Sheath dress",
    rating: 5,
    price: "119.0$",
  },
  {
    img: "/women/women9.jpg",
    title: "White Polo Shirt",
    desc: "Tutu Maxy",
    rating: 4,
    price: "110.0$",
  },
  {
    img: "/women/women10.jpg",
    title: "White Polo Shirt",
    desc: "Casual Wear",
    rating: 3,
    price: "99.0$",
  },
  {
    img: "/women/women11.jpg",
    title: "White Polo Shirt",
    desc: "Office Wear",
    rating: 3,
    price: "110.0$",
  },
];

const page = () => {
  return (
    <>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">WOMEN WEAR</h2>
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
