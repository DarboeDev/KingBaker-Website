import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#752428] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Business Hours</h3>
            <p>Monday - Friday: 8AM - 10PM</p>
            <p>Saturday - Sunday: 9AM - 11PM</p>
          </div>

          {/* Contact Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>Address: C749+JVQ, Brufut, Gambia</p>
            <p>Phone: +220 3733094</p>
            <p>Email: kingbakers@yahoo.com</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6 hover:text-[#996829]" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 hover:text-[#996829]" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-6 h-6 hover:text-[#996829]" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>
            &copy; {new Date().getFullYear()} King Bakers. All rights reserved.
          </p>
          <p className="mt-4">
            Developed by{" "}
            <a
              href="https://darboedev.com"
              className="font-bold hover:underline"
            >
              DarboeDev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
