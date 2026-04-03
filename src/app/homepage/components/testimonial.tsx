import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Rafael Viñoly Architects",
    category: "ARCHITECTURE",
    quote:
      "Celebrated for transformative designs that shape urban environments, Rafael Viñoly’s innovative approach blends form with function to create iconic structures. His work redefines the future of cities, with landmark projects such as Tokyo International Forum and The Walkie-Talkie in London reflecting his visionary impact on modern architecture.",
  },
  {
    id: 2,
    name: "Bryan O’Sullivan Studio",
    category: "INTERIOR DESIGN",
    quote:
      "This globally recognized studio, with headquarters in London and New York, brings an eclectic and elegant European perspective to interior design. Their projects, spanning luxury residences, hospitality, and maritime, showcase refined and livable interiors that balance modernity with warmth.",
  },
  {
    id: 3,
    name: "Sasaki Studio",
    category: "LANDSCAPE ARCHITECTURE",
    quote:
      "Sasaki is a global leader in landscape and urban planning, blending architectural design with natural environments. With offices in Boston, Denver, New York, and Shanghai, their interdisciplinary approach enhances communities worldwide through innovative, sustainable design.",
  },
];

const TestimonialCard = ({ name, category, quote }) => (
  <div className="overflow-hidden bg-white rounded-md">
    <div className="px-5 py-6">
      <div className="flex items-center justify-between">
        <div className="min-w-0 ">
          <p className="text-lg font-medium mb-2 text-black truncate">{name}</p>
          <p className="text-sm  text-[#d6ac63] truncate">{category}</p>
        </div>
      </div>
      <blockquote className="mt-5">
        <p className="text-sm leading-6 text-gray-800">
          {quote}
          <span className="block text-sky-500">{}</span>
        </p>
      </blockquote>
    </div>
  </div>
);

// Section Header Component

// Main Component
const TestimonialsSection = () => {
  return (
    <section className="py-10 bg-[#faf4f0] sm:py-16">
      <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            A Landmark Collaboration
          </h2>
          <p className="text-center font-medium uppercase mx-auto mt-4 text-lg text-gray-600">
            The Collabotary
          </p>
          <p className="max-w-2xl mx-auto mt-4 text-sm leading-relaxed text-gray-600">
            Faena’s first standalone riverfront residence is a masterpiece of
            innovation, blending artistic vision, cultural richness, and luxury
            into a vertical oasis in Miami’s skyline.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0  lg:grid-cols-3 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
