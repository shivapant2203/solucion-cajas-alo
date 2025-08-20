import Link from 'next/link';

export default function ContactButton() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-20 right-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg transition font-semibold z-50 fade-slide-up"
      style={{ animationDelay: '0.1s' }}
    >
      Contact Us
    </Link>
  );
}
