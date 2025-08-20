import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/525512345678" // Replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition z-50 fade-slide-up"
      style={{ animationDelay: '0.3s' }}
    >
      <FaWhatsapp size={28} />
    </Link>
  );
}
