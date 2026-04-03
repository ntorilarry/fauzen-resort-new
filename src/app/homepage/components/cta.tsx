const CTA = () => {
  return (
    <div
      className="relative py-36 bg-black bg-cover bg-center mx-2 my-14"
      style={{
        backgroundImage:
          "linear-gradient(#21362bb3, #21362bb3), url(https://cdn.prod.website-files.com/67a24bae4b2f487fcce5db59/67a272adef8af4e05239afa0_66b51b22120c288af3521394_faena_background.jpg)",
        backgroundPosition: "0 0, 50% 0",
        backgroundSize: "auto, cover",
      }}
    >
      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <p className="mt-5  text-lg font-semibold text-white text-opacity-70">
              THE NEIGHBORHOOD
            </p>
            <h1 className="mt-3 text-4xl text-white font-medium">
              Life by the Miami River
            </h1>
            <p className="mt-5  text-sm leading-6 font-normal text-white text-opacity-70">
              Enjoy serene waterfront living with private boat rides and curated
              shopping experiences, offering seamless access and allure of
              Brickell City Centre. In a city embracing evolution, Faena
              Residences Miami provides an iconic destination to relax, connect,
              and experience.
            </p>
            <button className="bg-[#d6ac63] mt-5 text-white  hover:bg-[#d6ac63]/25  px-12 py-4 text-sm uppercase font-medium transition-colors ">
              INQUIRE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CTA;
