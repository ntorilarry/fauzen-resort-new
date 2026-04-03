"use client";

import React, { useState, useEffect, startTransition } from "react";

type BackgroundOption = {
  type: "image" | "video";
  src: string;
};

const backgroundOptions: BackgroundOption[] = [
  // { type: "video", src: "https://res.cloudinary.com/djmddrfv2/video/upload/v1774547897/herobg_i0e4vj.webm" },
  {
    type: "image",
    src: "https://cdn.prod.website-files.com/67a24bae4b2f487fcce5db59/67a2867f26f529438bcce47f_671693bd6ade975680cf1c02_faena_residences_skyline.jpg",
  },
];

const Hero = () => {
  const [background, setBackground] = useState<BackgroundOption | null>(null);

  useEffect(() => {
    startTransition(() => {
      const randomIndex = Math.floor(Math.random() * backgroundOptions.length);
      setBackground(backgroundOptions[randomIndex]);
    });
  }, []);

  return (
    <div className="relative isolate m-2 h-[70vh] lg:h-[90vh] overflow-hidden bg-black py-12 sm:py-16 lg:py-20">
      {background && (
        <>
          {background.type === "image" ? (
            <div
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${background.src})` }}
              suppressHydrationWarning
            />
          ) : (
            <video
              className="absolute inset-0 z-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              suppressHydrationWarning
            >
              <source src={background.src} type="video/mp4" />
            </video>
          )}
        </>
      )}
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-gray-900/5"
        aria-hidden
      />

      <div className="relative z-2 mx-auto flex max-w-7xl items-center justify-center lg:justify-end px-4 sm:px-6 lg:px-8">
        <div className=" text-center lg:max-w-xl lg:mb-36">
          <h1 className="text-5xl font-light tracking-wide text-white sm:text-6xl lg:text-7xl ">
            FAENA RESIDENCES
          </h1>
          <p className="max-w-3xl mx-auto my-6 text-2xl lg:text-3xl font-normal leading-7 text-white">
            MIAMI
          </p>
          {/* <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-teal-800 px-8 py-4 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-teal-700"
              role="button"
            >
              Plan your stay
            </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
