"use client";

import Link from "next/link";
import { IoHome } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className=" bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Bottom Section */}
        <div className="py-12 my-2 text-center border-t border-[#d6ac63] ">
          <p className="text-sm text-gray-700">
            444 Brickell Ave., Suite 800 Miami, FL 33131
          </p>
          <p className="text-sm text-gray-700">T: 786-605-9038</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
