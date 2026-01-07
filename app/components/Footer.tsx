import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";



export default function Footer() {
  return (
    <footer className="bg-[#ECFFE6] pt-16">
      {/* Top section */}
      <div className=" flex justify-around gap-10 px-6">
        {/* Logo + description */}
        <div className="flex flex-col justify-center items-center">
          <Image src="/logo.svg" alt="logo" width={150} height={150} className="transform scale-90 hover:scale-100 transition-transform duration-200 ease-in-out"/>
          <h2 className="mt-4 text-[22px] font-semibold">
            Powering India&apos;s EV Revolution
          </h2>
          <p className="mt-3 text-[16px] text-[#727272] font-[600] leading-relaxed max-w-[320px] px-2">
            ChargeFlow connects EV owners with charging station hosts across
            India. Find charging points, book slots, and power your journey
            seamlessly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 font-semibold text-[24px]">Quick Links</h4>
          <div className="flex flex-col space-y-3 text-[16px] font-[600] text-[#7C7C7C]">
            <a href="#" className="hover:text-[#38EF0A]">Home</a>
            <a href="#" className="hover:text-[#38EF0A]">About Us</a>
            <a href="#" className="hover:text-[#38EF0A]">Find Chargers</a>
            <a href="#" className="hover:text-[#38EF0A]">Become A Host</a>
            <a href="#" className="hover:text-[#38EF0A]">Pricing</a>
            <a href="#" className="hover:text-[#38EF0A]">Contact Us</a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 font-semibold text-[24px]">Our Services</h4>
          <div className="flex flex-col space-y-3 text-[16px] font-[600] text-[#7C7C7C]">
            <a href="#" className="hover:text-[#38EF0A]">EV Charging</a>
            <a href="#" className="hover:text-[#38EF0A]">Host Registration</a>
            <a href="#" className="hover:text-[#38EF0A]">Customer Support</a>
            <a href="#" className="hover:text-[#38EF0A]">How It Works</a>
            <a href="#" className="hover:text-[#38EF0A]">Pricing Plans</a>
            <a href="#" className="hover:text-[#38EF0A]">Mobile App</a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="mb-4 font-semibold text-[24px]">Contact Info</h4>

          <div className="space-y-3 text-[16px] font-[600] text-[#7C7C7C]">
            <p className="flex items-center gap-3">
              <SlLocationPin className="w-5 h-5 text-[#38EF0A]" />
              Sector 18, Noida, India
            </p>

            <p className="flex items-center gap-3">
              <MdOutlineMailOutline className="w-5 h-5 text-[#38EF0A]" />
              support@chargeflow.com
            </p>

            <p className="flex items-center gap-3">
              <FiPhone className="w-5 h-5 text-[#38EF0A]" />
              +91-7887209295
            </p>
          </div>

          {/* Social icons */}
          <div className="mt-5 flex gap-4 text-xl text-gray-600">
            <Image src='/icons/instagram.svg' width={25} height={25} alt="Instagram" className="cursor-pointer hover:transform hover:scale-110" />
            <Image src='/icons/facebook.svg' width={35} height={35} alt="Facebook" className="cursor-pointer hover:transform hover:scale-110" />
            <Image src='/icons/twitter.svg' width={25} height={25} alt="Twitter" className="cursor-pointer hover:transform hover:scale-110" />
            <Image src='/icons/linkedin.svg' width={25} height={25} alt="LinkedIn" className="cursor-pointer hover:transform hover:scale-110" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-green-200 py-5 px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6  text-[20px] text-[#727272] md:flex-row">
          <p className="hover:text-[#38EF0A]">© 2025 ChargeFlow All Rights Reserved.</p>
          <div className="flex gap-6 font-[600] ">
            <span className="cursor-pointer hover:text-[#38EF0A]">
              Terms Of Service
            </span>
            <span className="cursor-pointer hover:text-[#38EF0A]">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
