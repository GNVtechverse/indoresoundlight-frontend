import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa"; // 👈 icons import

const Footer = () => {
  return (
    <footer className="p-5 bg-neutral-900 text-gray-300">
      {/* 🔹 Main Footer Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Logo / Branding */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4 hover:text-white transition-colors duration-300">
              <span className="text-[#E31E24]">Indore</span> Sound & Light
            </h2>
            <p className="text-sm leading-relaxed text-gray-400 hover:text-white transition-colors duration-300">
              Bringing you the best of events and experiences. We craft moments
              that stay with you forever.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 hover:text-white transition-colors duration-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#E31E24] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutUs"
                  className="hover:text-[#E31E24] transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#E31E24] transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/equipments"
                  className="hover:text-[#E31E24] transition-colors duration-300"
                >
                  Equipments
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-[#E31E24] transition-colors duration-300"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/contactUs"
                  className="hover:text-[#E31E24] transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact / Social */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 hover:text-white transition-colors duration-300">
              Get in Touch
            </h3>
            <p className="mb-2 text-gray-400 hover:text-white transition-colors duration-300">
              Shop No. 5, 3rd Floor, Plot No. 53, Shree Jee Avanue, Scheme No53,
              Vijay Nagar, Indore, 452011
            </p>
            <p className="mb-2 text-gray-400 hover:text-white transition-colors duration-300">
              <span>Phone:</span>
              {" "}
              <a
                href="tel:+919826729589"
                className="hover:text-white transition-colors duration-300"
              >
                +91 9826729589
              </a>
              {" "}
              <a
                href="tel:+919111474449"
                className="hover:text-white transition-colors duration-300"
              >
               +91 9111474449
              </a>
            </p>
            <p className="text-gray-400 hover:text-white transition-colors duration-300">
              <a
                href="mailto:info@mybrand.com"
                className="hover:text-white transition-colors duration-300"
              >
                Email: isl@indoresoundlight.in

              </a>
            </p>

            {/* Socials with Icons */}
            <div className="mt-4 flex space-x-6 text-2xl">
              <a
                href="https://www.instagram.com/indoresoundlight" // insta link
                target="https://www.instagram.com/indoresoundlight/?igsh=djBrejFwaHhvdm9n#"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61572681741669" // FB link
                target="https://www.facebook.com/profile.php?id=61572681741669"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/9826729589" // WhatsApp direct chat link
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* 🔹 Bottom CopyRight */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500 hover:text-white transition-colors duration-300">
          © {new Date().getFullYear()} Indore Sound & Light. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
