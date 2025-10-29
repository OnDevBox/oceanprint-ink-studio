import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'catalogo') {
      window.open('https://meucomercio.com.br/oceanprint', '_blank');
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { id: 'home', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'sobre', label: 'Sobre Nós' },
    { id: 'catalogo', label: 'Catálogo', external: true },
    { id: 'contato', label: 'Contato' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md shadow-lg border-b border-border/40"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Ocean Print" className="h-12 w-auto" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => scrollToSection('contato')} className="bg-gradient-to-r from-accent-cyan to-accent-purple hover:opacity-90">
              Solicitar Orçamento
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => scrollToSection('contato')} className="w-full bg-gradient-to-r from-accent-cyan to-accent-purple">
              Solicitar Orçamento
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
