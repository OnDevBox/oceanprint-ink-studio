const Footer = () => {
  return (
    <footer className="bg-ocean-deep/30 backdrop-blur-sm border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Ocean Print" className="h-10 w-auto" />
          </div>
          
          <div className="text-center md:text-right text-muted-foreground">
            <p className="text-sm">
              © {new Date().getFullYear()} Ocean Print. Todos os direitos reservados.
            </p>
            <p className="text-sm mt-1">
              Birô de Impressão e Gráfica Rápida desde 2014
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
