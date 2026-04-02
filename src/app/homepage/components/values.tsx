import Image from "next/image";

const FeatureCard = ({  title, description, imgUrl }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center mx-auto">
        <Image
          className="absolute w-20 h-20"
          src={imgUrl}
          alt={title}
          width={100}
          height={100}
        />
      </div>
      <h3 className="mt-14 text-3xl  text-black">{title}</h3>
      <p className="mt-4 text-sm text-gray-600">{description}</p>
    </div>
  );
};

const Values = () => {
  const features = [
    {
      title: "Culture",
      description:
        "Rooted in Faena’s dedication to artistic excellence, residents are immersed in a curated selection of art, music, and design, making cultural experiences a part of daily life. Site specific artworks elevate every space, ensuring that beauty and creativity are ever-present",
      imgUrl:
        "https://cdn.prod.website-files.com/67a24bae4b2f487fcce5db59/67a27386353f4d1c4c1a4d4d_66b51b22120c288af35213c8_culture_icon.svg",
    },
    {
      title: "Creativity",
      description:
        "From meticulously crafted interiors to immersive cultural experiences, Faena Residences nurtures an environment that fosters creativity and exploration. Every detail is designed to inspire, encouraging residents to live an enriched and dynamic lifestyle.",
      imgUrl:
        "https://cdn.prod.website-files.com/67a24bae4b2f487fcce5db59/67a27386c5976a8e26123aac_66b51b22120c288af35213cb_creativity_icon.svg",
    },
    {
      title: "Wellness",
      description:
        "Spaces thoughtfully designed to nurture mind, body, and soul. Faena Residences’ wellness offerings feature cutting-edge fitness facilities, holistic wellness treatments, and curated programs designed to enhance balance and rejuvenation.",
      imgUrl:
        "https://cdn.prod.website-files.com/67a24bae4b2f487fcce5db59/67a27386478087d2e18739dd_66b51b22120c288af35213c7_wellness_icon.svg",
    },
  ];

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-24">
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
