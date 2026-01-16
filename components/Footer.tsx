import { FC } from "react";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="bg-[#145a82] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">ARYA MADAM</h2>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Professional-grade craft supplies for artisans, designers, and creative professionals.
            </p>

            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-[#4d7a94] hover:bg-[#5d8aa4] p-3 rounded transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "Press", "Contact"].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-200 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SUPPORT</h3>
            <ul className="space-y-3">
              {["FAQs", "Shipping Policy", "Returns & Exchanges", "Terms of Service"].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-200 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT INFO</h3>
            <ul className="space-y-4 text-gray-200">
              <li className="flex gap-3">
                <MapPin className="text-orange-400" />
                Mumbai, Maharashtra 400001
              </li>
              <li className="flex gap-3">
                <Phone className="text-orange-400" />
                +91 98765 43210
              </li>
              <li className="flex gap-3">
                <Mail className="text-orange-400" />
                info@aryamadamcraft.com
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#4d7a94]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 Arya Madam Craft Supplies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Powered by Readdy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
