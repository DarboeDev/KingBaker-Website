import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Fatima Jallow",
    review:
      "Absolutely love their cakes! So fresh and delicious. Highly recommended!",
    image: "/customer1.jpg",
    rating: 3,
  },
  {
    name: "Omar Ceesay",
    review:
      "King Bakers is my go-to for fresh bread and pastries. Great quality every time!",
    image: "/customer1.jpg",
    rating: 5,
  },
  {
    name: "Fatima Jallow",
    review:
      "Absolutely love their cakes! So fresh and delicious. Highly recommended!",
    image: "/customer1.jpg",
    rating: 4,
  },
  {
    name: "Omar Ceesay",
    review:
      "King Bakers is my go-to for fresh bread and pastries. Great quality every time!",
    image: "/customer1.jpg",
    rating: 5,
  },
  {
    name: "Fatima Jallow",
    review:
      "Absolutely love their cakes! So fresh and delicious. Highly recommended!",
    image: "/customer1.jpg",
    rating: 4,
  },
  {
    name: "Omar Ceesay",
    review:
      "King Bakers is my go-to for fresh bread and pastries. Great quality every time!",
    image: "/customer1.jpg",
    rating: 5,
  },
  {
    name: "Awa Sanyang",
    review:
      "Amazing service and their café has the best coffee! I visit almost every week.",
    image: "/customer1.jpg",
    rating: 4,
  },
  {
    name: "Sainey Touray",
    review:
      "The best bakery in town! Their bread is always fresh and delicious.",
    image: "/customer1.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 w-full bg-gray-100 overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl max-sm:text-3xl font-bold text-[#752428] mb-8">
          Loved by Thousands of Customers! ❤️
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          See what our happy customers have to say about King Bakers!
        </p>

        {/* Scrolling Wrapper */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-3 max-sm:gap-6 w-max"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 100,
              ease: "easeInOut",
            }}
          >
            {/* Duplicate testimonials for seamless looping */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl custom-shadow flex flex-col items-center text-center max-sm:w-[270px] max-sm:h-[270px] max-w-[350px]"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-[#996829]">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 italic mt-2">
                  &quot;{testimonial.review}&quot;
                </p>
                <div className="flex mt-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-500 fill-current"
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
