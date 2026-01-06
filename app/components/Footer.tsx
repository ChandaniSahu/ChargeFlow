import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-50 pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-4">
        <div>
          <Image src="/logo.svg" alt="logo" width={90} height={90}  />
          <p className="mt-4 text-sm text-gray-600">
            Powering India’s EV Revolution. Find charging points and power your
            journey seamlessly.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Find Chargers</li>
            <li>Become a Host</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Our Services</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>EV Charging</li>
            <li>Host Registration</li>
            <li>Customer Support</li>
            <li>Mobile App</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Contact Info</h4>
          <p className="text-sm text-gray-600">Sector 18, Noida, India</p>
          <p className="text-sm text-gray-600">support@chargeflow.com</p>
          <p className="text-sm text-gray-600">+91 7887209295</p>
        </div>
      </div>

      <div className="mt-10 border-t py-4 text-center text-sm text-gray-500">
        © 2025 ChargeFlow. All Rights Reserved.
      </div>
    </footer>
  );
}
