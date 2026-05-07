import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '919876543210'; // WhatsApp number (without + or spaces)
  const message = 'Hello! I would like to know more about your courses.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} className="text-white" />
      <span className="absolute left-full ml-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
