import Image from "next/image";

const Story = () => {
  return (
    <div className="my-16">
      <div
        className="relative pt-14 pb-72 bg-black bg-cover bg-center mx-3 my-14"
        style={{
          backgroundImage:
            "linear-gradient(#1471bd70, #fff0 33%), url(https://cdn.prod.website-files.com/67a24bae4b2f487fcce5db59/67a3de47b29408fb673d646d_Faena%20copy.webp)",
          backgroundPosition: "0 0, 50% 70%",
          backgroundSize: "auto, cover",
        }}
      >
        <div className="relative">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl text-white font-semibold uppercase">
                The World Is Ready For A{" "}
                <span className="italic text-[#d6ac63]">New </span> Story
              </h1>

              <button className="bg-[#d6ac63] mt-8 text-white  hover:bg-[#d6ac63]/25  px-12 py-4 text-sm uppercase font-medium transition-colors ">
                INQUIRE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto sm:px-6 lg:px-24 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16  gap-y-12">
          <div className="">
            <Image
              className="w-full h-full object-cover"
              src="https://cdn.prod.website-files.com/67a24bae4b2f487fcce5db59/69a5f24465ced5f95675b27e_Screenshot%202026-03-02%20at%203.24.40%E2%80%AFPM-p-800.png"
              alt=""
              width={1000}
              height={600}
            />
          </div>

          <div className="">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <h2 className="text-3xl  text-gray-900 sm:text-4xl lg:text-5xl">
                Where A Brand <br /> Becomes A <br />
                <span className="italic text-center"> District</span>
              </h2>

              <blockquote className="mt-4 lg:mt-6">
                <p className="text-sm font-normal leading-6 text-gray-700">
                  Faena is more than a brand. Wherever Faena builds, entire
                  neighborhoods evolve. What was once an overlooked stretch of
                  Miami Beach is now one of the most prestigious and valuable
                  enclaves in the world, known globally as the Faena District.
                  Through visionary architecture, museum-caliber art,
                  world-class hospitality, and curated cultural programming,
                  Faena doesn’t follow luxury, it creates it.
                  <br />
                  <br />
                  Owning at The Faena means being part of a movement that
                  reshapes communities, elevates value, and leaves a lasting
                  legacy.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
