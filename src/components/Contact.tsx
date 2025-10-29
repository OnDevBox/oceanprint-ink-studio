import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua Doutor Cornélio de Mello Júnior, Rua do Salesiano, 17',
      content2: 'Piratininga, Niterói - RJ, 24350-280',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@oceanprint.com.br',
      link: 'mailto:contato@oceanprint.com.br',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 21 3786-9168',
      link: 'tel:+552137869168',
    },
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/552137869168', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em <span className="bg-gradient-to-r from-ocean-deep to-primary bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você e transformar seus projetos em realidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="hover:shadow-ocean transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-ocean-deep to-primary flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                            {info.content}
                          </a>
                        ) : (
                          <>
                            <p className="text-muted-foreground">{info.content}</p>
                            {info.content2 && <p className="text-muted-foreground">{info.content2}</p>}
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <Card className="bg-gradient-to-r from-ocean-deep to-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <MessageCircle className="h-8 w-8" />
                    <div>
                      <h3 className="text-lg font-bold">WhatsApp</h3>
                      <p className="text-sm opacity-90">Atendimento rápido e direto</p>
                    </div>
                  </div>
                  <Button 
                    onClick={openWhatsApp}
                    variant="secondary"
                    size="lg"
                  >
                    Conversar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="overflow-hidden h-[500px]">
            <CardContent className="p-0 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0537889947394!2d-43.10464!3d-22.90611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5c8e8e8e8e8f%3A0x1234567890abcdef!2sRua%20Doutor%20Corn%C3%A9lio%20de%20Mello%20J%C3%BAnior%2C%2017%20-%20Piratininga%2C%20Niter%C3%B3i%20-%20RJ%2C%2024350-280!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Ocean Print"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
