import React from "react";
import Logo from "../assets/logo.jpg";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInfoCircle,
  FaNewspaper,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-5">
        <div className="container mx-auto py-5 flex justify-between flex-col md:flex-row gap-6">
          {/* Left Section: Logo + Contact Info */}
          <div className="space-y-3 md:w-2/3">
            <img
              src={Logo}
              alt="Banking Khabar Logo"
              className="w-[300px] mb-4"
            />

            <p className="flex items-start gap-2">
              <FaInfoCircle className="mt-1" />
              सूचना विभाग दर्ता नं : २९१/०७३-७४66
            </p>
            <p className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1" />
              फोन नं : 9851215417, 9851215418
            </p>
            <p className="flex items-start gap-2">
              <FaEnvelope className="mt-1" />
              समाचार : bankingkhabar72@gmail.com
            </p>
            <p className="flex items-start gap-2">
              <FaNewspaper className="mt-1" />
              विज्ञापन : bankingkhabaradv@gmail.com
            </p>
          </div>

          {/* Right Section: Editor Info */}
          <div className="space-y-2 md:text-right">
            <p>
              <strong>Chief Editor</strong>
              <br />
              Madhav Nirdosh
            </p>
            <p>
              <strong>Coordinator</strong>
              <br />
              Sandip B. K
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
