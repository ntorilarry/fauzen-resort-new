"use client";

import MainLayout from "@/shared/mainLayout";
import Hero from "./components/hero";
import Features from "./components/features";
import Values from "./components/values";
import Showcase from "./components/showcase";
import CTA from "./components/cta";

const Homepage = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Values />
      <Showcase />
      <CTA />
    </MainLayout>
  );
};

export default Homepage;
