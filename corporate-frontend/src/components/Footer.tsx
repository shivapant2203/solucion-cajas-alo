import { FaWhatsapp, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaWhatsapp size={20} />,
      url: 'https://wa.me/525512345678', // Replace with your WhatsApp number
      label: 'WhatsApp',
      color: 'hover:text-[#FF813F]', // Orange accent on hover
    },
    {
      icon: <FaLinkedinIn size={20} />,
      url: 'https://linkedin.com/in/yourprofile', // Replace with your LinkedIn URL
      label: 'LinkedIn',
      color: 'hover:text-[#D2B48C]', // Kraft brown light on hover
    },
    {
      icon: <FaFacebookF size={20} />,
      url: 'https://facebook.com/yourpage', // Replace with your Facebook URL
      label: 'Facebook',
      color: 'hover:text-[#F5EEDC]', // Sand/beige accent
    },
    {
      icon: <FaInstagram size={20} />,
      url: 'https://instagram.com/yourprofile', // Replace with your Instagram URL
      label: 'Instagram',
      color: 'hover:text-[#FF813F]', // Orange accent on hover
    },
  ];

  return (
    <footer className="bg-[#795548] text-white pt-10 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        {/* Branding and description */}
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold tracking-wider mb-2">Solucion en Cajas ALO</div>
          <div className="text-center text-sm max-w-2xl mb-6">
            Sustainable packaging solutions for businesses across Mexico. Premium manufacturing, custom branding, fast turnaround.
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-6">
          {socialLinks.map(({ icon, url, label, color }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`text-white transition ${color} hover:scale-110`}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Divider line */}
        <div className="border-t border-[#d2b48c] opacity-40 my-6"></div>

        {/* Copyright */}
        <div className="text-center text-xs text-[#f0ead9] font-medium tracking-wide mt-2">
          © {new Date().getFullYear()} Solucion en Cajas ALO. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
