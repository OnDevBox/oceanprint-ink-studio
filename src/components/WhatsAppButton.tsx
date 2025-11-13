import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/552137869168', '_blank');
  };

  return (
    <Button
      onClick={openWhatsApp}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-ocean bg-gradient-to-r from-ocean-deep to-primary hover:opacity-90 p-0"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppButton;
