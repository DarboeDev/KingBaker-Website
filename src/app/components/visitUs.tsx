import React from "react";
import { MapPin, Phone } from "lucide-react";

const VisitUs = () => {
  return (
    <section className="py-20 w-full px-6 bg-[#FFF7F0] text-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-[#752428] mb-6">
          Visit Our Bakery 🍞
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Come experience the warm, inviting aroma of fresh bakes! Find us at:
        </p>

        {/* Map + Info Section */}
        <div className="bg-white rounded-2xl custom-shadow p-6 flex flex-col md:flex-row items-center">
          {/* Google Maps */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126325.44591683704!2d-16.8127332!3d13.4041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQzc0OStKVlEsIEJydWZ1dCwgR2FtYmlh!5e0!3m2!1sen!2s!4v1633070722315!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center">
            <div className="flex items-center mb-3">
              <MapPin className="text-[#996829] w-6 h-6 mr-2" />
              <p className="text-gray-800 font-semibold">
                C749+JVQ, Brufut, Gambia
              </p>
            </div>

            <div className="flex items-center mb-3">
              <Phone className="text-[#996829] w-6 h-6 mr-2" />
              <p className="text-gray-800 font-semibold">+220 3733094</p>
            </div>

            <p className="text-gray-600 mb-4">Open Daily: 8AM - 10PM</p>

            {/* Buttons */}
            <div className="flex space-x-4">
              <a
                href="https://www.google.com/maps/place/C749%2BJVQ,+Brufut,+The+Gambia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#752428] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#5a1e1e] transition"
              >
                Get Directions
              </a>

              <a
                href="tel:+2203733094"
                className="bg-[#996829] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#7a5520] transition"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
