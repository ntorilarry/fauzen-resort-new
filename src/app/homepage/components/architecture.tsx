import Image from "next/image";
import React from "react";

const Architecture = () => {
  return (
    <div>
      <div className="w-full  mx-auto p-3">
        <div className="aspect-video w-full overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/s32r6g0-ac8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="px-4 mx-auto sm:px-6 lg:px-24 max-w-8xl py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16  gap-y-12 items-center">
          <div className="">
            <Image
              className="w-full"
              src="https://cdn.prod.website-files.com/67a24bae4b2f487fcce5db59/67d9df854d51673971cf703b_faena%20lr.webp"
              alt=""
              width={1000}
              height={600}
            />
          </div>

          <div className="">
            <div className="max-w-lg lg:max-w-none">
              <p className="text-2xl text-center text-gray-900 uppercase">
                The Architecture
              </p>

              <div className="mx-auto my-5 h-48 w-px bg-[#d6ac63]" />

              <h1 className="text-2xl mt-5 font-normal text-center  text-[#d6ac63]">
                “Elegantly framing views of the city, bay, & sky, the building
                will become an iconic part of Miami&apos;s skyline.&quot;
              </h1>
              <p className="text-base mt-5 text-center font-semibold text-gray-900 uppercase">
                rafael viñoly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;
