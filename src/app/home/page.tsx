"use client";
import React from "react";
import ServicesCards from "../components/services-cards";
import HeroSlider from "../components/heroslider";
import WhyChooseUs from "../components/whychooseus";
import Testimonials from "../components/testimonial";
import VisitUs from "../components/visitUs";
import SEO from "../components/SEO";

const HomePage = () => {
  return (
    <main className="flex flex-col w-full overflow-auto justify-center items-center mt-14 max-sm:mt-[10rem]">
      <SEO
        title={"King Bakers"}
        description={"Delicious baked goods, groceries, and a cozy cafe."}
        key={"King Bakers"}
      />
      <div className="h-screen flex items-center justify-center">
        <div className="container mx-auto max-sm:flex-col max-sm:mt-9 max-sm:pt-5 px-4 flex items-center justify-between">
          <div className="flex flex-col items-start justify-center">
            <h1 className="home-header text-5xl font-bold mb-4">
              Welcome to King Baker – Taste the Difference!
            </h1>
            <p className="home-text text-xl mb-8">
              Freshly baked goods, a premium supermarket, and a cozy café, all
              under one roof.
            </p>
            <div className="flex gap-4">
              <button className="btn-hero">Visit Us</button>
              <button className="btn-hero">Explore Our Menu</button>
            </div>
          </div>
          <HeroSlider />
        </div>
      </div>
      <div>
        <h1 className="hero-banner w-full text-center">
          🍞 From a small bakery to a household name! King Bakers has been
          serving fresh, high-quality baked goods, groceries, and café delights
          for over a decade. ☕
        </h1>
      </div>
      <ServicesCards />
      <WhyChooseUs />
      <Testimonials />
      <VisitUs />
    </main>
  );
};

export default HomePage;
