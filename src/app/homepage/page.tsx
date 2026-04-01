"use client";

import MainLayout from "@/shared/mainLayout";
import Hero from "./components/hero";
import Features from "./components/features";
import Values from "./components/values";

const Homepage = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Values />
    </MainLayout>
  );
};

export default Homepage;
