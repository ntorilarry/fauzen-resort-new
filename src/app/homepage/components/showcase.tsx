"use client";

import Image from "next/image";

const Showcase = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src="https://cdn.prod.website-files.com/67a24bae4b2f487fcce5db59/699b7b70db0af633bc5e29b1_Faena%20Residences%20Miami_Pistil-p-2000.jpg"
            alt="Image-1"
            width={1000}
            height={1000}
          />
        </div>

        <div className=" ">
          <Image
            className="w-full h-full rounded-lg object-cover object-top"
            src="https://cdn.prod.website-files.com/67a24bae4b2f487fcce5db59/68222acffed1e779141d165e_dining%20outside.webp"
            alt="Image-1"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex flex-row md:flex-col gap-6">
          <Image
            className="w-full h-full rounded-lg object-cover object-top"
            src="https://cdn.prod.website-files.com/67a24bae4b2f487fcce5db59/68222989f82ce19cc03b1a8b_68138165f2c28efe0f4614cf_Res%20Features%20Kitchen.avif"
            alt="Image-1"
            width={1000}
            height={1000}
          />
          <Image
            className="w-full h-full rounded-lg object-cover object-top"
            src="https://cdn.prod.website-files.com/67a24bae4b2f487fcce5db59/6979327a6fa99c6276b84126_Faena%20Residences%20Miami_East%20Collection%20III%20Residence%2001%20Primary%20Bedroom-p-2000.jpg"
            alt="Image-1"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
