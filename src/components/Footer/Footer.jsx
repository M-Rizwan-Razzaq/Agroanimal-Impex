import React from "react";
import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h1 className="text-xl font-bold">AgroAnimal Impex</h1>
          <h2 className="mt-4 font-semibold">Contact</h2>
          <address className="mt-2 text-sm">
            Lhr More- Kabirwala Road. near Ahmad Flour Mill Khanewal
            <br />
            Punjab
          </address>
          <div className="flex gap-4 mt-4">
            <a href="https://wa.me/923067422685" target="_blank" rel="noopener noreferrer">
              <AiOutlineWhatsApp className="text-2xl hover:text-green-500 transition-all duration-300 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/tayyabmindset?igsh=MW5lYmdwOXNxaG05eg==" target="_blank" rel="noopener noreferrer">
              <AiOutlineInstagram className="text-2xl hover:text-pink-500 transition-all duration-300 cursor-pointer" />
            </a>
            <a href="mailto:http://agroanimalimpex@gmail.com">
              <AiOutlineMail className="text-2xl hover:text-red-500 transition-all duration-300 cursor-pointer" />
            </a>
            <a href="https://www.facebook.com/share/1FmkbiKTvt/" target="_blank" rel="noopener noreferrer">
              <AiOutlineFacebook className="text-2xl hover:text-blue-500 transition-all duration-300 cursor-pointer" />
            </a>
            <a href="https://www.linkdin.com" target="_blank" rel="noopener noreferrer">
              <CiLinkedin className="text-2xl hover:text-blue-500 transition-all duration-300 cursor-pointer" />
            </a>
           
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold">AgroAnimal Services</h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#">Animal Nutrition</a></li>
            <li><a href="#">Livestock Management</a></li>
            <li><a href="#">Veterinary Solutions</a></li>
            <li><a href="#">Dairy Farming</a></li>
            <li><a href="#">Animal Health Research</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">About AgroAnimal Implex</h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link to="/faq">Our Mission & Vision</Link></li>
            <li><Link to="/">Expert Veterinarians</Link></li>
            <li><Link to="/contactUs">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-6 text-sm">
        <p>&copy; 2025 AgroAnimal Implex. All rights reserved.</p>
        <p className="mt-2">Dedicated to animal welfare and sustainable livestock management.</p>
      </div>
    </footer>
  );
}
export default Footer;