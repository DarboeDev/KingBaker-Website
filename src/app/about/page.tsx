import React from "react";
// import { motion } from "framer-motion";
import Image from "next/image";
// import { CheckCircle, MapPin, Truck } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-6 bg-[#FFF7F0] text-gray-800">
      {/* <div className="container mx-auto max-w-6xl text-center"> */}
      {/* Hero Section */}
      {/* <motion.h2
          className="text-5xl font-bold text-[#752428] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About King Bakers 🍞
        </motion.h2> */}
      <p className="text-lg text-gray-700 mb-10">
        Freshly baked every day, delivering warmth and taste across The Gambia!
      </p>

      {/* Story Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-left md:flex md:items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Image
            src="/bakery.jpg"
            alt="King Bakers"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h3 className="text-3xl font-semibold text-[#996829] mb-4">
            Our Story
          </h3>
          <p className="text-gray-700 mb-4">
            King Baker Ltd. began operations in The Gambia on July 31st, 2010,
            as part of the Demba Burnafa Group. Our bakery is equipped with
            state-of-the-art Swiss machinery, ensuring every loaf is baked to
            perfection.
          </p>
          <p className="text-gray-700">
            We operate a fleet of delivery vehicles, bringing fresh, delicious
            bread straight to our customers in the Ksmd area.
          </p>
        </div>
      </div>

      {/* Baking Process Section */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-semibold text-[#996829] mb-6">
          Our Baking Process
        </h3>
        {/* <div className="grid md:grid-cols-3 gap-8"> */}
        {/* <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              {/* <CheckCircle className="text-[#752428] w-12 h-12 mx-auto mb-4" /> */}
        <h4 className="text-xl font-medium">State-of-the-Art Equipment</h4>
        <p className="text-gray-600">
          We use high-quality Swiss machines for consistency and perfection.
        </p>
        {/* </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              {/* <Truck className="text-[#752428] w-12 h-12 mx-auto mb-4" /> */}
        <h4 className="text-xl font-medium">Fresh Deliveries</h4>
        <p className="text-gray-600">
          Our fleet delivers fresh bread daily across The Gambia.
        </p>
        {/* </motion.div> */}
        {/* <motion.div */}
        {/* className="bg-white p-6 rounded-lg shadow-md" */}
        {/* whileHover={{ scale: 1.05 }} */}
        {/* > */}
        {/* <MapPin className="text-[#752428] w-12 h-12 mx-auto mb-4" /> */}
        {/* <h4 className="text-xl font-medium">
                Locally Sourced Ingredients
              </h4>
              <p className="text-gray-600">
                We use the finest local ingredients to maintain freshness and
                taste.
              </p>
            // </motion.div>
          </div> 
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-semibold text-[#752428] mb-4">
            Visit Us Today!
          </h3>
          <p className="text-gray-700 mb-6">
            Experience the aroma of freshly baked bread. Drop by or give us a
            call!
          </p>
          <a
            href="/contact"
            className="bg-[#752428] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5a1e1e] transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
