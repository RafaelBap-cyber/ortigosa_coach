import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, TrendingUp, Users, Award } from "lucide-react";

const Results = () => {
  const beforeAfterResults = [
    {
      name: "Vinicius Fuzinelli",
      age: 22,
      goal: "Emagrecimento", 
      goal2: "Hipertrofia",
      result: "Perdeu 10kg em 4 meses",
      testimony: "Nunca imaginei que conseguiria! O Bruno me ajudou a mudar completamente minha relação com a comida e exercícios.",
      stats: { weight: "-10kg", bf: "-8%", muscle: "+3kg" }
    },
    {
      name: "Eduardo", 
      age: 17,
      goal: "Hipertrofia",
      goal2: "Emagrecimento",
      result: "Perdeu 7kg em 4 meses",
      testimony: "O treino personalizado fez toda diferença! Em 4 meses perdi mais de 7 kg",
      stats: { weight: "-7kg", bf: "-3%", muscle: "+2kg" }
    },
    {
      name: "João Paulo",
      age: 40,
      goal: "Emagrecimento",
      result: "Melhorou 80% do condicionamento",
      testimony: "Em pouco tempo, consegui perder 4kg e melhorar minha saúde.",
      stats: { weight: "-4kg", bf: "-6%", muscle: "+1kg" }
    }
  ];



  const stats = [
    { icon: Users, value: "50+", label: "Alunos Transformados" },
    { icon: TrendingUp, value: "95%", label: "Taxa de Sucesso" }
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
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
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
                        {result.goal2 && <Badge variant="outline">{result.goal2}</Badge>}
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
            Agende sua avaliação e dê o primeiro passo para seus resultados
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => window.open('https://wa.me/5514999031513?text=Olá,%20Bruno!%20Quero%20me%20transformar%20e%20conhecer%20seus%20serviços.', '_blank')}
          >
            Quero Me Transformar
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Results;