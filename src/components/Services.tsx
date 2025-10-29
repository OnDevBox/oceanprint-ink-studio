import { Card, CardContent } from '@/components/ui/card';
import { Printer, FileText, Stamp, Package, Palette, Truck } from 'lucide-react';
import bannerImage from '@/assets/banner-service.jpg';
import corporateImage from '@/assets/corporate-service.jpg';
import stampsImage from '@/assets/stamps-service.jpg';

const Services = () => {
  const services = [
    {
      icon: Printer,
      title: 'Impressão Grande Formato',
      description: 'Banner, lona, adesivos em vinil e windbanners para destacar sua marca com impacto visual e durabilidade.',
      image: bannerImage,
    },
    {
      icon: FileText,
      title: 'Material Corporativo',
      description: 'Cartões de visita, folhetos, papel timbrado, blocos receituários e brindes personalizados com acabamento impecável.',
      image: corporateImage,
    },
    {
      icon: Stamp,
      title: 'Confecção de Carimbos',
      description: 'Carimbos automáticos e de madeira com as melhores marcas, garantindo durabilidade e definição perfeita.',
      image: stampsImage,
    },
    {
      icon: Palette,
      title: 'Design Gráfico',
      description: 'Criação de artes modernas e criativas, totalmente alinhadas à identidade visual do seu negócio.',
      image: null,
    },
    {
      icon: Package,
      title: 'Impressão Offset e Digital',
      description: 'Tecnologia de ponta para garantir cores vibrantes e qualidade superior em todos os materiais impressos.',
      image: null,
    },
    {
      icon: Truck,
      title: 'Integração com Correios',
      description: 'Facilidade no envio dos seus materiais para qualquer lugar do Brasil com logística integrada.',
      image: null,
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="bg-gradient-to-r from-ocean-deep to-primary bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em impressão com qualidade, agilidade e atendimento personalizado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-ocean transition-all duration-300 overflow-hidden">
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-ocean-deep to-primary flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
