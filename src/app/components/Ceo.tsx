import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="container pt-16 pb-16">
      <h2 className="font-medium font-serif text-2xl pb-4">
        {" "}
        <b>ABOUT US</b>{" "}
      </h2>
      <div className="grid lg:grid-cols-[400px,1fr] gap-4">
        <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0 hover:bg-accent transition-colors duration-300">
          <div className="text-center flex flex-col items-center gap-1">
            <br />
            <Image
              className="rounded-full inline-block"
              src="/"
              width={100}
              height={100}
              alt="dp"
            />
            <p>CEO & Founder Invision</p>
            <Image
              className="inline-block py-2"
              src="/quotess.png"
              width={55}
              height={55}
              alt="quotes"
            />
            <p className="max-w-[300px] text-gray-500">
              FAB has revolutionized our shopping experience. The quality and
              variety of products are unparalleled. We highly recommend FAB to
              everyone.
            </p>
            <h2 className="text-gray-500 font-black text-[20px]">
              Chaudhry Bassam Tanvir
            </h2>
          </div>
        </div>
        <div
          className="h-[500px] rounded-2xl grid place-items-center"
          style={{
            backgroundImage: "url('/1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
            <button className="bg-white bg-opacity-20 text-blackish p-2 rounded-md">
              25% DISCOUNT
            </button>
            <h2 className="font-extrabold text-2xl text-blackish">
              Summer Collection
            </h2>
            <p className="text-blackish text-[20px]">
              Starting @ $20 <b>Shop Now</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
