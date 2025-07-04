
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatsAppFloat = () => {
  return (
    <Link
      to="/whatsapp"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
    >
      <MessageCircle size={24} />
    </Link>
  );
};

export default WhatsAppFloat;
