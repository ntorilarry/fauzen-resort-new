const Contact = () => {
  return (
    <div
      className="relative py-24 bg-black bg-cover bg-center mx-3 mb-4"
      style={{
        backgroundImage:
          "linear-gradient(#9c0605ab, #9c0605ab), url(https://cdn.prod.website-files.com/67a24bae4b2f487fcce5db59/67a398a0ee9ebd118f99388d_66b51b22120c288af3521395_roses_bg.jpg)",
        backgroundPosition: "0 0, 50% 0",
        backgroundSize: "auto, cover",
      }}
    >
      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="mt-3 text-5xl text-white font-bold">
              Request Pricing & Availability:
            </h1>

            <button className="bg-gray-50 mt-5 text-[#d6ac63]   hover:bg-gray-100  px-14 py-6 text-sm uppercase font-medium transition-colors ">
              INQUIRE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
