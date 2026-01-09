import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "./icons";



const socialIcons = [
  { Icon: InstagramIcon, alt: 'Instagram' },
  { Icon: FacebookIcon, alt: 'Facebook' },
  { Icon: TwitterIcon, alt: 'Twitter' },
  { Icon: LinkedinIcon, alt: 'LinkedIn' },
];

// Quick Links array
const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Find Chargers', href: '#' },
  { name: 'Become A Host', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Contact Us', href: '#' },
];

// Services array
const services = [
  { name: 'EV Charging', href: '#' },
  { name: 'Host Registration', href: '#' },
  { name: 'Customer Support', href: '#' },
  { name: 'How It Works', href: '#' },
  { name: 'Pricing Plans', href: '#' },
  { name: 'Mobile App', href: '#' },
];

// Contact Info array
const contactInfo = [
  {
    icon: SlLocationPin,
    text: 'Sector 18, Noida, India'
  },
  {
    icon: MdOutlineMailOutline,
    text: 'support@chargeflow.com'
  },
  {
    icon: FiPhone,
    text: '+91-7887209295'
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#ECFFE6] pt-16">
      {/* Top section */}
      <div className="flex flex-col lg:flex-row justify-around gap-10 px-4">

        {/* Desktop View (unchanged) */}
        <div className="hidden lg:flex flex-col lg:flex-row justify-around gap-10 w-full">
          {/* Logo + description */}
          <div className="flex flex-col justify-center items-center lg:items-start">
            <Image
              src="/logo.svg"
              alt="logo"
              width={150}
              height={150}
              className="transform scale-90 hover:scale-100 transition-transform duration-200 ease-in-out"
            />
            <h2 className="mt-4 text-[22px] font-semibold">
              Powering India&apos;s EV Revolution
            </h2>
            <p className="mt-3 text-[16px] text-[#727272] font-[600] leading-relaxed max-w-[320px] px-2 lg:px-0">
              ChargeFlow connects EV owners with charging station hosts across
              India. Find charging points, book slots, and power your journey
              seamlessly.
            </p>
          </div>

          {/* Links and Services */}
          <div className="flex flex-row gap-12">
            {/* Quick Links */}
            <div>
              <h4 className="mb-4 font-semibold text-[24px]">Quick Links</h4>
              <div className="flex flex-col space-y-3 text-[16px] font-[600] text-[#7C7C7C]">
                {quickLinks.map((link, index) => (
                  <a key={index} href={link.href} className="hover:text-[#38EF0A]">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4 font-semibold text-[24px]">Our Services</h4>
              <div className="flex flex-col space-y-3 text-[16px] font-[600] text-[#7C7C7C]">
                {services.map((service, index) => (
                  <a key={index} href={service.href} className="hover:text-[#38EF0A]">
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4 font-semibold text-[24px]">Contact Info</h4>
              <div className="space-y-3 flex flex-col text-[16px] font-[600] text-[#7C7C7C]">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon; // Store component reference
                  return (
                    <p key={index} className="flex items-center gap-3">
                      <IconComponent className="w-5 h-5 text-[#38EF0A]" />
                      {contact.text}
                    </p>
                  );
                })}
              </div>

              {/* Social icons */}
              <div className="mt-5 flex gap-4 text-xl text-gray-600">
                {socialIcons.map(({ Icon, alt }) => (
                  <button key={alt} aria-label={alt} className="cursor-pointer hover:transform hover:scale-110">
                    <Icon />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tablet View (768px - 1023px) */}
        <div className="hidden md:flex lg:hidden flex-col items-center">
          {/* Logo Section - Top */}
          <div className="flex flex-col justify-center items-center mb-10 w-full">
            <Image
              src="/logo.svg"
              alt="logo"
              width={150}
              height={150}
              className="transform scale-90 hover:scale-100 transition-transform duration-200 ease-in-out"
            />
            <h2 className="mt-4 text-[22px] font-semibold text-center">
              Powering India&apos;s EV Revolution
            </h2>
            <p className="mt-3 text-[16px] text-[#727272] font-[600] leading-relaxed max-w-[320px] text-center px-4">
              ChargeFlow connects EV owners with charging station hosts across
              India. Find charging points, book slots, and power your journey
              seamlessly.
            </p>
          </div>

          {/* Services and Links in Row */}
          <div className="flex flex-row justify-center gap-12 mb-10">
            {/* Quick Links */}
            <div>
              <h4 className="mb-4 font-semibold text-[24px] text-center">Quick Links</h4>
              <div className="flex flex-col space-y-3 text-[16px] font-[600] text-[#7C7C7C]">
                {quickLinks.map((link, index) => (
                  <a key={index} href={link.href} className="hover:text-[#38EF0A] text-center">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4 font-semibold text-[24px] text-center">Our Services</h4>
              <div className="flex flex-col space-y-3 text-[16px] font-[600] text-[#7C7C7C]">
                {services.map((service, index) => (
                  <a key={index} href={service.href} className="hover:text-[#38EF0A] text-center">
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info - Below */}
          <div className="flex flex-col items-center">
            <h4 className="mb-4 font-semibold text-[24px]">Contact Info</h4>
            <div className="space-y-3 flex flex-col items-center text-[16px] font-[600] text-[#7C7C7C]">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon; // Store component reference
                return (
                  <p key={index} className="flex items-center gap-3">
                    <IconComponent className="w-5 h-5 text-[#38EF0A]" />
                    {contact.text}
                  </p>
                );
              })}
            </div>

            {/* Social icons */}
            <div className="mt-5 flex gap-4 text-xl text-gray-600">
              {socialIcons.map(({ Icon, alt }) => (
                <button key={alt} aria-label={alt} className="cursor-pointer hover:transform hover:scale-110">
                  <Icon />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View (below 768px) */}
        <div className="flex md:hidden flex-col ml-6">
          {/* Logo Section */}
          <div className="flex flex-col mb-10">
            <Image
              src="/logo.svg"
              alt="logo"
              width={120}
              height={120}
              className="transform scale-90 hover:scale-100 transition-transform duration-200 ease-in-out mb-4"
            />
            <h2 className="text-[20px] font-semibold text-left">
              Powering India&apos;s EV Revolution
            </h2>
            <p className="mt-3 text-[14px] text-[#727272] font-[600] leading-relaxed max-w-[280px] text-left">
              ChargeFlow connects EV owners with charging station hosts across
              India. Find charging points, book slots, and power your journey
              seamlessly.
            </p>
          </div>

          {/* Quick Links - Left aligned */}
          <div className="mb-8">
            <h4 className="mb-4 font-semibold text-[22px]">Quick Links</h4>
            <div className="flex flex-col space-y-3 text-[14px] font-[600] text-[#7C7C7C]">
              {quickLinks.map((link, index) => (
                <a key={index} href={link.href} className="hover:text-[#38EF0A] ml-2">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services - Left aligned */}
          <div className="mb-8">
            <h4 className="mb-4 font-semibold text-[22px]">Our Services</h4>
            <div className="flex flex-col space-y-3 text-[14px] font-[600] text-[#7C7C7C]">
              {services.map((service, index) => (
                <a key={index} href={service.href} className="hover:text-[#38EF0A] ml-2">
                  {service.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info - Left aligned */}
          <div className="mb-8">
            <h4 className="mb-4 font-semibold text-[22px]">Contact Info</h4>
            <div className="space-y-3 flex flex-col text-[14px] font-[600] text-[#7C7C7C]">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon; // Store component reference
                return (
                  <p key={index} className="flex items-center gap-3">
                    <IconComponent className="w-5 h-5 text-[#38EF0A]" />
                    {contact.text}
                  </p>
                );
              })}
            </div>

            {/* Social icons */}
            <div className="mt-5 flex gap-4 text-xl text-gray-600 ml-2">
              {socialIcons.map(({ Icon, alt }) => (
                <button key={alt} aria-label={alt} className="cursor-pointer hover:transform hover:scale-110">
                  <Icon />
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar - Same for all views */}
      <div className="mt-12 border-t border-green-200 py-5 lg:px-10 px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-[20px] text-[#727272] md:flex-row">
          <p className="hover:text-[#38EF0A] text-[#8E8E93] hidden sm:block">
            © 2025 ChargeFlow All Rights Reserved.
          </p>
          <p className="hover:text-[#38EF0A] text-[#8E8E93] block sm:hidden">
            © 2025 All Rights Reserved.
          </p>
          <div className="flex sm:gap-6 gap-3 font-[600]">
            <span className="cursor-pointer hover:text-[#38EF0A] hidden sm:block">
              Terms Of Service
            </span>
            <span className="cursor-pointer hover:text-[#38EF0A] block sm:hidden ">
              Terms 
            </span>
            <span className="block sm:hidden">|</span>
            <span className="cursor-pointer hover:text-[#38EF0A] hidden sm:block">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-[#38EF0A] block sm:hidden ">
              Privacy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}