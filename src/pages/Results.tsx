import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, TrendingUp, Users, Award } from "lucide-react";

const Results = () => {
  const beforeAfterResults = [
    {
      name: "Maria Silva",
      age: 32,
      goal: "Emagrecimento",
      result: "Perdeu 15kg em 4 meses",
      testimony: "Nunca imaginei que conseguiria! O Bruno me ajudou a mudar completamente minha relação com a comida e exercícios.",
      stats: { weight: "-15kg", bf: "-8%", muscle: "+2kg" }
    },
    {
      name: "João Santos", 
      age: 28,
      goal: "Hipertrofia",
      result: "Ganhou 8kg de massa muscular",
      testimony: "O treino personalizado fez toda diferença. Em 6 meses ganhei mais massa do que em 2 anos treinando sozinho.",
      stats: { weight: "+8kg", bf: "-3%", muscle: "+8kg" }
    },
    {
      name: "Ana Costa",
      age: 45,
      goal: "Condicionamento",
      result: "Melhorou 80% do condicionamento",
      testimony: "Voltei a me sentir jovem! Subo escadas sem cansar e tenho muito mais energia no dia a dia.",
      stats: { weight: "-5kg", bf: "-6%", muscle: "+3kg" }
    }
  ];

  const testimonials = [
    {
      name: "Carlos Roberto",
      role: "Empresário",
      content: "O Bruno transformou minha vida. Perdi 20kg e ganhei saúde, disposição e autoestima. Recomendo de olhos fechados!",
      rating: 5,
      result: "20kg perdidos"
    },
    {
      name: "Fernanda Lima",
      role: "Médica",
      content: "Profissional excepcional! Consegui conciliar a correria da medicina com exercícios eficientes. Resultado surpreendente!",
      rating: 5,
      result: "12kg perdidos"
    },
    {
      name: "Roberto Silva",
      role: "Aposentado",
      content: "Aos 60 anos achei que era tarde demais. O Bruno me provou o contrário! Hoje me sinto 20 anos mais jovem.",
      rating: 5,
      result: "Melhor qualidade de vida"
    },
    {
      name: "Juliana Souza",
      role: "Professora",
      content: "Depois da gravidez estava com baixa autoestima. O Bruno me ajudou a recuperar minha forma e confiança!",
      rating: 5,
      result: "Forma pré-gravidez"
    },
    {
      name: "Diego Martins",
      role: "Advogado",
      content: "Treino online perfeito para minha agenda corrida. Resultados incríveis mesmo treinando em casa!",
      rating: 5,
      result: "8kg de músculo"
    },
    {
      name: "Patricia Oliveira",
      role: "Dentista",
      content: "O acompanhamento nutricional foi fundamental. Aprendi a comer melhor e os resultados apareceram rapidamente!",
      rating: 5,
      result: "18kg perdidos"
    }
  ];

  const stats = [
    { icon: Users, value: "100+", label: "Alunos Transformados" },
    { icon: TrendingUp, value: "95%", label: "Taxa de Sucesso" },
    { icon: Award, value: "10", label: "Na musculação" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-20">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Transformações reais
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Resultados &{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Depoimentos
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja as transformações reais dos meus alunos. Cada resultado é fruto de dedicação, 
            método comprovado e acompanhamento personalizado.
          </p>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Before/After Results */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Transformações{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Destacadas
            </span>
          </h2>
          <div className="space-y-12">
            {beforeAfterResults.map((result, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Before/After Images */}
                    <div className="relative bg-gradient-to-br from-muted/50 to-muted/80 p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-background rounded-lg p-4 border-2 border-dashed border-border">
                            <div className="h-32 bg-muted rounded flex items-center justify-center">
                              <span className="text-muted-foreground">Antes</span>
                            </div>
                          </div>
                          <div className="bg-background rounded-lg p-4 border-2 border-primary">
                            <div className="h-32 bg-primary/20 rounded flex items-center justify-center">
                              <span className="text-primary font-semibold">Depois</span>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-primary">{result.stats.weight}</div>
                            <div className="text-sm text-muted-foreground">Peso</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-secondary">{result.stats.bf}</div>
                            <div className="text-sm text-muted-foreground">Gordura</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-accent">{result.stats.muscle}</div>
                            <div className="text-sm text-muted-foreground">Músculo</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Story */}
                    <div className="p-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <Badge variant="outline">{result.goal}</Badge>
                        <span className="text-sm text-muted-foreground">{result.age} anos</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{result.name}</h3>
                      <p className="text-lg text-primary font-semibold mb-4">{result.result}</p>
                      <div className="flex items-start space-x-3">
                        <Quote className="h-6 w-6 text-muted-foreground mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground italic">{result.testimony}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que meus{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              alunos dizem
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                    <Badge className="bg-primary/10 text-primary">
                      {testimonial.result}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Factors */}
        <section className="mb-20 bg-muted/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que meus alunos{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              têm sucesso?
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Método Comprovado",
                description: "Baseado em ciência e experiência prática"
              },
              {
                title: "Acompanhamento Próximo",
                description: "Monitoramento constante e ajustes necessários"
              },
              {
                title: "Planos Personalizados",
                description: "Cada treino e dieta adaptados ao indivíduo"
              },
              {
                title: "Suporte Total",
                description: "Apoio motivacional e técnico sempre disponível"
              }
            ].map((factor, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold mb-2">{factor.title}</h3>
                <p className="text-sm text-muted-foreground">{factor.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sua transformação pode ser a próxima!
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Agende sua avaliação gratuita e dê o primeiro passo para seus resultados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.open('https://wa.me/5514999031513?text=Olá,%20Bruno!%20Quero%20me%20transformar%20e%20conhecer%20seus%20serviços.', '_blank')}
            >
              Quero Me Transformar
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              Ver Mais Resultados
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Results;