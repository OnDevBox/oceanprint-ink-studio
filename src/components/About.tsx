import { Card, CardContent } from '@/components/ui/card';
import { Award, Clock, Zap, Workflow } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '11+', label: 'Anos de Experiência' },
    { icon: Clock, value: '2014', label: 'Fundada em' },
    { icon: Zap, value: 'Express', label: 'Gráfica Rápida' },
    { icon: Workflow, value: 'Completo', label: 'Birô de Impressão' },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink bg-clip-text text-transparent">Ocean Print</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Desde 2014, a Ocean Print é referência em soluções gráficas em Niterói e região. 
                Com mais de uma década de experiência, nos consolidamos como um birô de impressão 
                completo e uma gráfica rápida de confiança.
              </p>
              <p>
                Oferecemos tanto impressão offset tradicional quanto tecnologia digital de ponta, 
                garantindo a melhor solução para cada tipo de projeto. Nossa especialidade em 
                confecção de carimbos, aliada a um portfólio completo de serviços gráficos, 
                nos torna o parceiro ideal para empresas e profissionais que buscam qualidade.
              </p>
              <p>
                Com equipamentos modernos e uma equipe experiente, transformamos suas ideias 
                em materiais impressos de alta qualidade, sempre com agilidade e preços competitivos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const gradients = [
                'from-accent-cyan to-accent-purple',
                'from-accent-purple to-accent-pink',
                'from-accent-green to-accent-cyan',
                'from-accent-pink to-accent-cyan'
              ];
              return (
                <Card key={index} className="text-center hover:shadow-vibrant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br ${gradients[index]} flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
