import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Dumbbell, Apple, Smartphone, Calendar, Target, Zap } from "lucide-react";

const Services = () => {


  const personalTrainerServices = [
    {
      icon: Dumbbell,
      title: "Personal Trainer Presencial",
      description: "Treinos personalizados com acompanhamento direto",
      features: [
        "Avaliação física completa",
        "Treinos para hipertrofia",
        "Programas de emagrecimento", 
        "Treinos funcionais",
        "Acompanhamento presencial",
        "Ajustes semanais",
        "Treinos para atletas",
        "Supervisão durante o treino"
      ],
      plans: [
        { name: "3 X Semana", price: "R$ 240", sessions: "+ 12 sessões mensais" },
        { name: "4 X Semana", price: "R$ 300", sessions: "+ 16 sessões mensais", popular: true },
        { name: "5 x Semana", price: "R$ 360", sessions: "+ 20 sessões mensais" }
      ],
      color: "from-primary to-primary-glow"
    }
  ];

  const onlineServices = [
    {
      icon: Smartphone,
      title: "Consultoria Online",
      description: "Acompanhamento remoto com resultados garantidos",
      features: [
        "Treinos via app",
        "Vídeos explicativos",
        "Feedback semanal",
        "Chat direto comigo",
        "Avaliações por foto/vídeo",
        "Flexibilidade total",
        "Treinos personalizados",
        "Acompanhamento nutricional"
      ],
      plans: [
        { name: "Alimentar", price: "R$ 140", sessions: "Plano Alimentar" },
        { name: "Treinamento", price: "R$ 140", sessions: "Plano de Treino", popular: true },
        { name: "VIP", price: "R$ 220", sessions: "Completo (Alimentar + Treinamento)" }
      ],
      color: "from-accent to-blue-500"
    }
  ];

  const additionalServices = [
    {
      icon: Target,
      title: "Avaliação Física",
      description: "Análise completa do seu corpo e condicionamento",
      price: "R$ 80"
    },
    {
      icon: Calendar,
      title: "Sessão Avulsa",
      description: "Treino individual sem compromisso mensal",
      price: "R$ 60"
    },
    {
      icon: Zap,
      title: "Treino em Dupla",
      description: "Treine com um amigo e economize",
      price: "R$ 40/pessoa"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-20">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Transforme sua vida
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meus{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Serviços
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas para sua transformação física. Escolha o plano ideal para seus objetivos.
          </p>
        </section>

        {/* Personal Trainer Services */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Personal Trainer{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Presencial
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Treinos personalizados com acompanhamento direto
            </p>
          </div>
          <div className="space-y-20">
            {personalTrainerServices.map((service, index) => (
              <div key={index} className={`relative rounded-3xl overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <Check className="h-5 w-5 text-secondary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className={`bg-gradient-to-r ${service.color} hover:opacity-90`}>
                      Quero Este Serviço
                    </Button>
                  </div>

                  {/* Plans */}
                  <div className="p-8 lg:p-12 bg-muted/30">
                    <h3 className="text-2xl font-bold mb-6">Planos Disponíveis</h3>
                    <div className="space-y-4">
                      {service.plans.map((plan, i) => (
                        <Card key={i} className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                          {plan.popular && (
                            <Badge className="absolute -top-2 left-4 bg-primary">
                              Mais Popular
                            </Badge>
                          )}
                          <CardContent className="p-6">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-semibold">{plan.name}</h4>
                              <span className="text-2xl font-bold text-primary">{plan.price}</span>
                            </div>
                            <p className="text-muted-foreground">{plan.sessions}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Online Services */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Consultoria{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Acompanhamento remoto com flexibilidade total
            </p>
          </div>
          <div className="space-y-20">
            {onlineServices.map((service, index) => (
              <div key={index} className={`relative rounded-3xl overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <Check className="h-5 w-5 text-secondary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className={`bg-gradient-to-r ${service.color} hover:opacity-90`}>
                      Quero Este Serviço
                    </Button>
                  </div>

                  {/* Plans */}
                  <div className="p-8 lg:p-12 bg-muted/30">
                    <h3 className="text-2xl font-bold mb-6">Planos Disponíveis</h3>
                    <div className="space-y-4">
                      {service.plans.map((plan, i) => (
                        <Card key={i} className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                          {plan.popular && (
                            <Badge className="absolute -top-2 left-4 bg-primary">
                              Mais Popular
                            </Badge>
                          )}
                          <CardContent className="p-6">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-semibold">{plan.name}</h4>
                              <span className="text-2xl font-bold text-primary">{plan.price}</span>
                            </div>
                            <p className="text-muted-foreground">{plan.sessions}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Serviços{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Adicionais
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <p className="text-2xl font-bold text-primary">{service.price}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button variant="outline" className="w-full mt-4">
                    Agendar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Qual a duração de cada sessão de treino?",
                answer: "Cada sessão tem duração de 1 hora, incluindo aquecimento, treino e alongamento."
              },
              {
                question: "Posso cancelar ou reagendar um treino?",
                answer: "Sim, com 24h de antecedência você pode reagendar sem problemas."
              },
              {
                question: "Os planos incluem acompanhamento nutricional?",
                answer: "Apenas os planos Premium incluem. Para os demais, oferecemos como serviço adicional."
              },
              {
                question: "Como funciona a consultoria online?",
                answer: "Você recebe treinos pelo app, envia feedback e tem acompanhamento semanal comigo."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Agende sua avaliação gratuita e vamos definir o melhor plano para você
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.open('https://wa.me/5514999031513?text=Olá,%20Bruno!%20Gostaria%20de%20agendar%20uma%20avaliação%20gratuita.', '_blank')}
            >
              Agendar Avaliação Gratuita
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.open('https://wa.me/5514999031513?text=Olá,%20Bruno!%20Gostaria%20de%20conversar%20sobre%20seus%20serviços.', '_blank')}
            >
              Falar no WhatsApp
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;