import Image from "next/image";
import React from "react";

const Lifestyle = () => {
  return (
    <div>
      <section className="py-12 bg-white ">
        <div className="px-4 mx-auto sm:px-6 lg:px-24 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16  gap-y-12">
            <div className="">
              <Image
                className="w-full"
                src="https://cdn.prod.website-files.com/67a24bae4b2f487fcce5db59/6979327a30ea3a52c606eb41_Faena%20Residences%20Miami_Terrace_Day-p-1600.jpg"
                alt=""
                width={1000}
                height={600}
              />
            </div>

            <div className="">
              <div className="max-w-lg lg:max-w-none">
                <h2 className="text-3xl text-center text-gray-900 sm:text-4xl lg:text-5xl">
                  Over 100,000 Square Feet of Lifestyle{" "}
                  <span className="italic"> Amenities</span>
                </h2>

                <blockquote className="mt-4 lg:mt-6">
                  <p className="text-sm font-normal text-center leading-6 text-gray-700">
                    Suspended 700 feet above the Miami River, the Sky Bridge
                    spans three levels and a rooftop, unlocking over 100,000
                    square feet of elevated amenities designed for both serenity
                    and celebration.
                    <br />
                    <br />
                    From rooftop pools and panoramic cabanas to lounges, dining
                    experiences, music, and creative spaces, every detail is
                    curated to bring residents together in unforgettable ways.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="max-w-5xl mt-10 px-4 mx-auto sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-medium text-gray-900">
                Faena Has Been Awarded, Published, And Mentioned By:
              </h2>
            </div>

            <div className="grid items-center grid-cols-2 gap-10 mt-12 md:grid-cols-4 sm:gap-y-16">
              <div>
                <Image
                  className="object-contain w-auto mx-auto h-14"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-1.png"
                  alt=""
                  width={200}
                  height={100}
                />
              </div>

              <div>
                <Image
                  className="object-contain w-auto mx-auto h-14"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-2.png"
                  alt=""
                  width={200}
                  height={100}
                />
              </div>

              <div>
                <Image
                  className="object-contain w-auto h-10 mx-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-3.png"
                  alt=""
                  width={200}
                  height={100}
                />
              </div>

              <div>
                <Image
                  className="object-contain w-auto mx-auto h-14"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-4.png"
                  alt=""
                  width={200}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lifestyle;
