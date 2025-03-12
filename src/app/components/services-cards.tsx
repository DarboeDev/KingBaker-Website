import React from "react";
import Image from "next/image";
const ServicesCards = () => {
  const services = [
    {
      title: "Bakery",
      description:
        "Enjoy freshly baked bread, cakes, and pastries made daily with the finest ingredients.",
      backDescription: "Experience the best bakery delights in town!",
      image: "/bakery.jpg",
    },
    {
      title: "Supermarket",
      description:
        "Find a wide variety of groceries and household essentials at unbeatable prices.",
      backDescription: "Your one-stop shop for all essentials!",
      image: "/supermarket.jpg",
    },
    {
      title: "Café & Restaurant",
      description:
        "Relax and unwind with our delicious meals, fresh coffee, and cozy ambiance.",
      backDescription: "Savor the taste of fine dining and coffee!",
      image: "/cafe.jpg",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center pt-12">
      <h1 className="home-header text-4xl max-sm:text-3xl font-bold mb-4">
        Our Services
      </h1>
      <div className="px-4 flex max-sm:flex-col items-center gap-7 justify-between">
        {services.map((service, index) => (
          <div key={index} className="card-container">
            <div className="card">
              <div className="card__side card__side--front">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={240}
                  className="w-full h-60 object-cover rounded-t-2xl"
                />
                <div className="flex flex-col items-center justify-center px-4 pb-4 max-sm:pb-6 bg-white rounded-b-2xl shadow-lg w-full h-full">
                  <h2 className="text-2xl font-bold text-[#752428] mt-4">
                    {service.title}
                  </h2>
                  <p className="text-lg font-light text-center mt-2 mb-2 text-gray-700">
                    {service.description}
                  </p>
                  <button className="bg-[#996829] text-2xl px-2 mb-4 py-1 rounded text-white hidden max-sm:block">
                    Explore More
                  </button>
                </div>
              </div>
              <div className={`card__side card__side--back`}>
                <div className="content">
                  <p className="text-lg font-semibold px-6 text-center">
                    {service.backDescription}
                  </p>
                  <button className="explore-button">Explore More</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;
