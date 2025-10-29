import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import heroImage from '@/assets/hero-printing.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    'Impressão Digital e Offset',
    'Entrega Rápida',
    'Qualidade Profissional',
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80 z-10" />
        <img
          src={heroImage}
          alt="Impressão Profissional"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transforme suas ideias em{' '}
            <span className="bg-gradient-to-r from-ocean-deep to-primary bg-clip-text text-transparent">
              impressões de qualidade
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Há 11 anos no mercado, oferecemos soluções completas em impressão digital, 
            offset e grande formato. Da criação à entrega, cuidamos de cada detalhe do seu projeto.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle2 className="text-primary h-5 w-5" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-ocean-deep to-primary hover:opacity-90 shadow-ocean"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://meucomercio.com.br/oceanprint', '_blank')}
            >
              Ver Catálogo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
