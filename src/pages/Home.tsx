import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, Trophy, Target, Zap, Heart, Dumbbell } from "lucide-react";

const Home = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Alunos Transformados" },
    { icon: Trophy, value: "95%", label: "Taxa de Sucesso" },
    { icon: Target, value: "7+", label: "Na musuclação" },
  ];

  const services = [
    {
      icon: Zap,
      title: "Treino Personalizado",
      description: "Treinos adaptados aos seus objetivos e necessidades específicas.",
      color: "bg-primary"
    },
    {
      icon: Heart,
      title: "Acompanhamento Nutricional",
      description: "Orientação alimentar para potencializar seus resultados.",
      color: "bg-secondary"
    },
    {
      icon: Target,
      title: "Consultoria Online",
      description: "Acompanhamento remoto com resultados comprovados.",
      color: "bg-accent"
    },
    {
      icon: Dumbbell,
      title: "Treinamento de Atletas",
      description: "Treinamento físico, Alimentação e Protocolo",
      color: "bg-black"
    },
  ];



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background to-muted/50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/musculacao-hero.jpg" 
            alt="Pessoa fazendo musculação" 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback para uma imagem placeholder se a imagem não existir
              e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' fill='%236b7280'%3EImagem de Muscula%26ccedil;%26atilde;o%3C/text%3E%3C/svg%3E";
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            ✨ Transforme seu corpo em 90 dias
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Transforme seu{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              corpo
            </span>{" "}
            com treino e dieta{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              personalizados
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Personal trainer especializado em resultados reais. Método comprovado para emagrecimento, hipertrofia e melhoria da qualidade de vida.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              onClick={() => window.open('https://wa.me/5514999031513?text=Olá,%20Bruno!%20Gostaria%20de%20conversar%20sobre%20treinamento%20personalizado.', '_blank')}
            >
              Fale Comigo no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meus{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Serviços
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para sua transformação física
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para sua transformação?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Agende sua avaliação gratuita e descubra como posso te ajudar a alcançar seus objetivos
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
            onClick={() => window.open('https://wa.me/5514999031513?text=Quero%20começar%20minha%20transformação%20agora!', '_blank')}
          >
            Quero Começar Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;