import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, TrendingUp, Users, Award, Target, Zap, Heart, Trophy, CheckCircle, ArrowRight } from "lucide-react";

const Results = () => {
  const beforeAfterResults = [
    {
      name: "Vinicius Fuzinelli",
      age: 22,
      goal: "Emagrecimento", 
      goal2: "Hipertrofia",
      result: "Perdeu 10kg em 4 meses",
      testimony: "Nunca imaginei que conseguiria! O Bruno me ajudou a mudar completamente minha relação com a comida e exercícios.",
      stats: { weight: "-10kg", bf: "-8%", muscle: "+3kg" },
      icon: Target
    },
    {
      name: "Eduardo", 
      age: 17,
      goal: "Hipertrofia",
      goal2: "Emagrecimento",
      result: "Perdeu 7kg em 4 meses",
      testimony: "O treino personalizado fez toda diferença! Em 4 meses perdi mais de 7 kg",
      stats: { weight: "-7kg", bf: "-3%", muscle: "+2kg" },
      icon: Zap
    },
    {
      name: "João Paulo",
      age: 40,
      goal: "Emagrecimento",
      result: "Melhorou 80% do condicionamento",
      testimony: "Em pouco tempo, consegui perder 4kg e melhorar minha saúde.",
      stats: { weight: "-4kg", bf: "-6%", muscle: "+1kg" },
      icon: Heart
    }
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Alunos Transformados", color: "from-blue-500 to-cyan-500" },
    { icon: TrendingUp, value: "95%", label: "Taxa de Sucesso", color: "from-blue-500 to-cyan-500" }
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4" />
            <Badge variant="secondary" className="bg-transparent border-0 p-0">
              Transformações reais
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Resultados &{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Depoimentos
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Veja as transformações reais dos meus alunos. Cada resultado é fruto de dedicação, 
            método comprovado e acompanhamento personalizado.
          </p>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-background to-muted/50">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Before/After Results */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transformações{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Destacadas
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Histórias reais de pessoas que transformaram suas vidas através do treinamento personalizado
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {beforeAfterResults.map((result, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30">
                <CardContent className="p-0">
                  {/* Header with icon and badges */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <result.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">{result.goal}</Badge>
                        {result.goal2 && <Badge variant="outline" className="text-xs">{result.goal2}</Badge>}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1">{result.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{result.age} anos</p>
                    <p className="text-lg font-semibold text-primary mb-4">{result.result}</p>
                  </div>

                  {/* Stats */}
                  <div className="px-6 pb-4">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-200/20">
                        <div className="text-xl font-bold text-blue-600">{result.stats.weight}</div>
                        <div className="text-xs text-muted-foreground">Peso</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-200/20">
                        <div className="text-xl font-bold text-green-600">{result.stats.bf}</div>
                        <div className="text-xs text-muted-foreground">Gordura</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-200/20">
                        <div className="text-xl font-bold text-orange-600">{result.stats.muscle}</div>
                        <div className="text-xs text-muted-foreground">Músculo</div>
                      </div>
                    </div>
                  </div>

                  {/* Testimony */}
                  <div className="p-6 pt-0">
                    <div className="flex items-start space-x-3">
                      <Quote className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm leading-relaxed">{result.testimony}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Factors */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-muted/30 via-background to-muted/20 rounded-3xl p-8 md:p-12 border border-muted/50">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por que meus alunos{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  têm sucesso?
                </span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Metodologia comprovada que garante resultados consistentes e duradouros
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Método Comprovado",
                  description: "Baseado em ciência e experiência prática",
                  icon: CheckCircle
                },
                {
                  title: "Acompanhamento Próximo",
                  description: "Monitoramento constante e ajustes necessários",
                  icon: Target
                },
                {
                  title: "Planos Personalizados",
                  description: "Cada treino e dieta adaptados ao indivíduo",
                  icon: Zap
                },
                {
                  title: "Suporte Total",
                  description: "Apoio motivacional e técnico sempre disponível",
                  icon: Heart
                }
              ].map((factor, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                    <factor.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{factor.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10 rounded-3xl"></div>
          <div className="relative bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Sua transformação pode ser a próxima!
              </h2>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                Agende sua avaliação e dê o primeiro passo para seus resultados. 
                Junte-se aos mais de 50 alunos que já transformaram suas vidas.
              </p>
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 group font-semibold px-8 py-6 text-lg"
                onClick={() => window.open('https://wa.me/5514999031513?text=Olá,%20Bruno!%20Quero%20me%20transformar%20e%20conhecer%20seus%20serviços.', '_blank')}
              >
                Quero Me Transformar
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Results;