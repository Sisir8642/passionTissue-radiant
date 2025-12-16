import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (

<footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/images/logo.png" alt="logofooter " className="mb-5" />
              <p className="text-gray-400">Nepal&apos; #1 Premium Tissue Brand - Bringing comfort and quality to every home.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-2xl">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bulk Orders</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-2xl">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Face Tissue</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bathroom Tissue</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kitchen Towels</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wet Wipes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-2xl">Contact Us</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+977-XXX-XXXXXX</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>info@passion.com.np</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1" />
                  <span>Kathmandu, Nepal</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Passion. All rights reserved. | Nepal&apos; #1 Premium Tissue Brand</p>
          </div>
        </div>
      </footer>

  );
}