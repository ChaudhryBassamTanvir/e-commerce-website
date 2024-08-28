import React from "react";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
const Productdata = [
  {
    img: "/menwear/mwear4.jpg",
    title: "White Polo Shirt",
    desc: "White Polo Shirt",
    rating: 4,
    price: "211.0$",
  },
  {
    img: "/menwear/mwear13.jpg",
    title: "Cardigan",
    desc: "Cardigan",
    rating: 4,
    price: "120.0$",
  },
  {
    img: "/menwear/mwear14.jpg",
    title: "White Ferrari Shirt",
    desc: "Rough Jeans & Red Check Shirt",
    rating: 5,
    price: "249.0$",
  },
  {
    img: "/menwear/mwear12.jpg",
    title: "Black Tiger Cuts Over Coat",
    desc: "Black Tiger Cuts Over Coat",
    rating: 3,
    price: "90.0$",
  },
  {
    img: "/menwear/mwear3.jpg",
    title: "Men Shorts",
    desc: "Men Shorts & T-Shirt",
    rating: 5,
    price: "75.0$",
  },
  {
    img: "/menwear/mwear11.jpg",
    title: "White Ferrari Shirt",
    desc: "Trench Coat",
    rating: 3,
    price: "122.0$",
  },
  {
    img: "/menwear/mwear10.jpeg",
    title: "White Ferrari Shirt",
    desc: "Men Regular Fit",
    rating: 5,
    price: "115.0$",
  },
  {
    img: "/menwear/mwear6.jpeg",
    title: "White Ferrari Shirt",
    desc: "Get Set Wear Hoddies",
    rating: 5,
    price: "312.0$",
  },
  {
    img: "/menwear/mwear8.webp",
    title: "White Ferrari Shirt",
    desc: "Men Slim Fit Solid Formal ",
    rating: 4,
    price: "149.0$",
  },
  {
    img: "/menwear/mwear9.webp",
    title: "White Ferrari Shirt",
    desc: "Peter England Shirt & Trouser",
    rating: 4,
    price: "69.0$",
  },
  {
    img: "/menwear/mwear1.jpg",
    title: "White Ferrari Shirt",
    desc: "Boys Casual T-shirt Pant  (Multicolor)",
    rating: 3,
    price: "299.0$",
  },
];

const page = () => {
  return (
    <>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">MEN'S WEAR</h2>
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
