import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FitCoach
            </h3>
            <p className="text-sm text-muted-foreground">
              Transformando vidas através do fitness. Personal trainer especializado em resultados reais.
            </p>
            <div className="flex space-x-3">
              <Button 
                size="icon" 
                variant="outline"
                onClick={() => window.open('https://instagram.com/bruno_ortigosa', '_blank')}
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline"
                onClick={() => window.open('https://wa.me/551499903-1513', '_blank')}
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
              
            </div>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h4 className="font-semibold">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Treino Personalizado</li>
              <li>Consultoria Online</li>
              <li>Acompanhamento Nutricional</li>
              <li>Avaliação Física</li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div className="space-y-4">
            <h4 className="font-semibold">Links Úteis</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => window.open('/politica-privacidade', '_blank')} className="hover:text-primary cursor-pointer">Política de Privacidade</button></li>
              <li><button onClick={() => window.open('/termos-uso', '_blank')} className="hover:text-primary cursor-pointer">Termos de Uso</button></li>
              <li><button onClick={() => navigate('/services#faq')} className="hover:text-primary cursor-pointer">FAQ</button></li>
              <li><button onClick={() => navigate('/results')} className="hover:text-primary cursor-pointer">Depoimentos</button></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(14) 99903-1513</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>brunobaptistaortigosa@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Tupã, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 FitCoach. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;