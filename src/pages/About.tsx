import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Users, Target, Heart, Zap } from "lucide-react";

const About = () => {
  const certifications = [
    { name: "Educação Física", institution: "Universidade de Marília", year: "Graduando" },
    { name: "Experiência com Atletas", institution: "Treinamento Especializado", year: "Treinador" },
    { name: "Praticante de Musculação", institution: "Experiência Pessoal", year: "10+ Anos" },
  ];

  const achievements = [
    { icon: Award, title: "Atletas Treinados", description: "Mister Olimpia Amador ; Muscle Content" },
    { icon: Target, title: "10+ Anos", description: "Praticando musculação" },
    { icon: BookOpen, title: "Sempre Estudando", description: "Conhecimento atualizado" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Comprometimento",
      description: "Dedicação total aos seus objetivos"
    },
    {
      icon: Zap,
      title: "Resultados",
      description: "Foco em transformações reais"
    },
    {
      icon: BookOpen,
      title: "Conhecimento",
      description: "Sempre atualizado cientificamente"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Conheça minha história
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mim
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Há mais de uma década transformando vidas através do treinamento personalizado. 
            Minha paixão pelo fitness e dedicação aos resultados me levaram a me especializar em musculação e condicionamento físico.
          </p>
        </section>

        {/* Personal Story */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Minha Jornada</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Minha paixão pelo fitness começou ainda na adolescência, quando descobri o poder transformador 
                da musculação. Ao longo de mais de uma década, me dediquei não apenas ao meu próprio desenvolvimento, 
                mas principalmente em aprender as melhores técnicas para ajudar outras pessoas.
              </p>
              <p>
                Atualmente curso Educação Física na Universidade de Marília (Unimar) , sempre buscando aprimorar meu conhecimento 
                científico para oferecer o melhor atendimento aos meus alunos. Combinando experiência prática 
                com embasamento teórico sólido.
              </p>
              <p>
                Tenho experiência no treinamento de atletas e pratico musculação há mais de uma década. 
                Desenvolvi uma metodologia que combina treino personalizado, conhecimento científico 
                e dedicação total aos objetivos de cada pessoa.
              </p>
            </div>
            <Button 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              onClick={() => window.open('https://wa.me/5514999031513?text=Olá,%20Bruno!%20Gostaria%20de%20conversar%20sobre%20treinamento.', '_blank')}
            >
              Fale Comigo
            </Button>
          </div>
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-80 h-80 mx-auto mb-6 overflow-hidden rounded-full shadow-lg">
                    <img 
                      src="/images/Bruno Ft.jpg" 
                      alt="Bruno Ortigosa - Personal Trainer na academia" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Bruno Ortigosa</h3>
                  <p className="text-muted-foreground">Personal Trainer & Coach</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Formação &{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Certificações
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{cert.institution}</p>
                      <Badge variant="outline">{cert.year}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-20 py-16 bg-muted/30 rounded-2xl">
          <div className="max-w-5xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Conquistas &{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Números
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meus{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Valores
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para começar sua transformação?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Vamos conversar sobre seus objetivos e como posso te ajudar
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => window.open('https://wa.me/5514999031513?text=Quero%20agendar%20uma%20conversa%20com%20você!', '_blank')}
          >
            Agendar Conversa
          </Button>
        </section>
      </div>
    </div>
  );
};

export default About;