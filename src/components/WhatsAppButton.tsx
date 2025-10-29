import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5521996362601', '_blank');
  };

  return (
    <Button
      onClick={openWhatsApp}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-vibrant bg-gradient-to-r from-accent-cyan to-accent-purple hover:opacity-90 p-0"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppButton;
