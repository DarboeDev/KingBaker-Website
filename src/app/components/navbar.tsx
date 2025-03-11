"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar h-[70px] max-sm:h-[50px] max-sm:px-4 max-sm:mb-9 px-12 pt-4 py-3 bg-white fixed w-full z-10 top-0 flex justify-between items-center">
      <button>
        <Image src="/logo.png" alt="Logo" width={90} height={90} />
      </button>
      <ul className="flex justify-center items-center gap-14 text-lg font-medium max-sm:hidden">
        <li>
          <Link href="#home">
            <span className="nav-link relative mb-1">Home</span>
          </Link>
        </li>
        <li className="relative">
          <Link href="#">
            <span className="nav-link relative mb-1">Services</span>
          </Link>
          <ul className="dropdown-menu absolute hidden bg-white shadow-lg mt-1 space-y-2 py-2 px-4">
            <li>
              <Link href="#bakery">
                <span className="nav-link mb-1">Bakery</span>
              </Link>
            </li>
            <li>
              <Link href="#supermarket">
                <span className="nav-link mb-1">Supermarket</span>
              </Link>
            </li>
            <li>
              <Link href="#cafe">
                <span className="nav-link mb-1">Cafe/Restaurant</span>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#about">
            <span className="nav-link relative mb-1">About Us</span>
          </Link>
        </li>
        <li>
          <button className="bg-[#996829] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#7a5520] transition">
            <span className="relative mb-1 text-white">Contact Us</span>
          </button>
        </li>
      </ul>

      <style jsx>{`
        .nav-link {
          text-decoration: none;
          color: #333; /* Keep the text color black */
        }
        .nav-link:hover {
          color: #333; /* Keep the color the same on hover */
        }
        .dropdown-menu {
          display: none;
        }
        .relative:hover .dropdown-menu {
          display: block;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
