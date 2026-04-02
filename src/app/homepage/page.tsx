"use client";

import MainLayout from "@/shared/mainLayout";
import Hero from "./components/hero";
import Features from "./components/features";
import Values from "./components/values";
import Showcase from "./components/showcase";
import CTA from "./components/cta";
import Lifestyle from "./components/lifestyle";

const Homepage = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Values />
      <Showcase />
      <CTA />
      <Lifestyle />
    </MainLayout>
  );
};

export default Homepage;
