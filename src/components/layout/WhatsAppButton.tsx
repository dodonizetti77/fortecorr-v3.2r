import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/554341415076?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20de%20contato%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 group cursor-pointer"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-semibold hidden md:block">(43) 4141-5076</span>
      
      {/* Pulse animation */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping" />
    </a>
  );
}
