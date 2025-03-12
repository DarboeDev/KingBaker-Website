import React from "react";
import { Star, ShoppingCart, Coffee } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Freshly Baked Daily",
      description:
        "We use only the finest ingredients for a truly delicious experience.",
      icon: <Star size={40} className="text-[#996829]" />,
    },
    {
      title: "Affordable & High Quality",
      description: "Premium baked goods and groceries at unbeatable prices.",
      icon: <ShoppingCart size={40} className="text-[#996829]" />,
    },
    {
      title: "A Cozy Café Experience",
      description:
        "Relax and enjoy fresh coffee and meals in a warm atmosphere.",
      icon: <Coffee size={40} className="text-[#996829]" />,
    },
  ];

  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bakery-bg.jpg')" }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl max-sm:text-3xl font-bold text-[#752428] mb-8">
          Why Choose King Bakers?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition duration-100 ease-in-out flex flex-col items-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl text-[#752428] font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
