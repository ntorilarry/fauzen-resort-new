import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="py-10 ">
      <div className="max-w-8xl px-4 mx-auto sm:px-6 lg:px-24">
        <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
          <div className="relative order-2 bg-[#faf4f0] pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
            <div className="relative max-w-xs mx-auto ">
              <div className="overflow-hidden h-100 lg:h-150 w-full m-5 mx-auto">
                <Image
                  className="object-cover w-full h-full scale-150 "
                  src="https://cdn.prod.website-files.com/67a24bae4b2f487fcce5db59/69a5f44c4612594071b782b5_d60846_93b4a1997582451d838cf6ae2776a3c2~mv2.jpg.avif"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-1 text-center">
            <h2 className="text-3xl font-light text-black sm:text-4xl lg:text-5xl">
              FAENA RESIDENCES
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-red-600 uppercase">
              Exquisite Residences that Redefine the Art of Living
            </p>
            <p className="mt-8 text-base leading-relaxed text-gray-600">
              Discover the elegance of riverfront living. Situated along the
              Miami River, Faena Residences Miami offers a seamless blend of
              urban sophistication & natural beauty.
              <br />
              <br />
              Just steps away from world-class restaurants, shopping, and
              entertainment, this exclusive enclave provides residents with a
              lifestyle of effortless luxury.
            </p>

            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center px-12 py-3 uppercase mt-8 text-base text-white transition-all duration-200 bg-red-600 rounded-md hover:bg-red-700 focus:bg-red-700"
              role="button"
            >
              {" "}
              Inquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
