import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ShoppingBag, 
  Pill, 
  Shirt, 
  Percent, 
  Star, 
  Award,
  Heart,
  Zap,
  Shield,
  Gift
} from "lucide-react";

const Patrocinadores = () => {
  const patrocinadores = [
    {
      nome: "Revitalize Pharma",
      categoria: "Farmácia de Manipulados",
      desconto: "20%",
      cupom: "BO20",
      descricao: "Farmácia especializada em manipulação de medicamentos e suplementos personalizados para suas necessidades específicas.",
      beneficios: [
        "Medicamentos manipulados",
        "Suplementos personalizados",
        "Consultoria farmacêutica",
        "Entrega em domicílio"
      ],
      icone: Pill,
      cor: "from-blue-500 to-cyan-500",
      corBadge: "bg-blue-100 text-blue-800 border-blue-200",
      link: "https://www.instagram.com/revitalizepharma?igsh=MTgzaWpyamNudXNpcw=="
    },
    {
      nome: "Vulp Store",
      categoria: "Roupas Esportivas",
      desconto: "10%",
      cupom: "BO10",
      descricao: "Loja especializada em roupas esportivas de alta qualidade para todos os tipos de treino e atividade física.",
      beneficios: [
        "Roupas esportivas premium",
        "Tecnologia de secagem rápida",
        "Proteção UV",
        "Variedade de tamanhos"
      ],
      icone: Shirt,
      cor: "from-purple-500 to-pink-500",
      corBadge: "bg-purple-100 text-purple-800 border-purple-200",
      link: "https://www.vulpstore.com.br/?fbclid=PAQ0xDSwL3SUNleHRuA2FlbQIxMQABp52_a6q9-xWLlyn9GXY-4Yvci6qMdKrYyrWl-tw9c3mGc9YSandEAfeyqP5X_aem_TP9g6KCmiN9-dFZHvjCr9w"
    },
    {
      nome: "Nyer Suplementos",
      categoria: "Suplementos",
      desconto: "10%",
      cupom: "BO10",
      descricao: "Suplementos de alta qualidade para otimizar seus resultados e performance nos treinos.",
      beneficios: [
        "Suplementos certificados",
        "Proteínas de alta qualidade",
        "Vitaminas e minerais",
        "Produtos importados",
        "Descontos exclusivos"
      ],
      icone: ShoppingBag,
      cor: "from-orange-500 to-red-500",
      corBadge: "bg-orange-100 text-orange-800 border-orange-200",
      link: "https://nyersuplementos.com/?fbclid=PAQ0xDSwL3SS5leHRuA2FlbQIxMQABp1V6S0BxcwdTAYNM6mRwz_sGzLdr4zhbJ4LHASYwE2NKtCvJQcx7cwBuwy91_aem_dLCgdpzyOsXhjtLr-7j_fA"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-20">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Parcerias Exclusivas
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Patrocinadores
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Parcerias selecionadas com as melhores marcas para oferecer produtos e serviços 
            de qualidade com descontos exclusivos para nossos clientes.
          </p>
        </section>

        {/* Patrocinadores Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {patrocinadores.map((patrocinador, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 group flex flex-col">
                                                                                                     <div className={`${patrocinador.nome === "Nyer Suplementos" || patrocinador.nome === "Vulp Store" || patrocinador.nome === "Revitalize Pharma" ? "h-64" : "h-48"} ${patrocinador.nome === "Nyer Suplementos" ? "bg-orange-500" : patrocinador.nome === "Vulp Store" ? "bg-black" : patrocinador.nome === "Revitalize Pharma" ? "bg-white" : `bg-gradient-to-br ${patrocinador.cor}`} flex items-center justify-center relative overflow-hidden`}>
                    {patrocinador.nome === "Nyer Suplementos" ? (
                      <img 
                        src="/images/nyer-logo.png" 
                        alt="Nyer Suplementos Logo" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : patrocinador.nome === "Vulp Store" ? (
                      <img 
                        src="/images/vulp-logo.png" 
                        alt="Vulp Store Logo" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                                         ) : patrocinador.nome === "Revitalize Pharma" ? (
                       <img 
                         src="/images/revitalize-logo.png" 
                         alt="Revitalize Pharma Logo" 
                         className="absolute inset-0 w-full h-full object-cover"
                       />
                     ) : (
                      <>
                        <div className="absolute inset-0 bg-black/10"></div>
                        <patrocinador.icone className="h-16 w-16 text-white relative z-10" />
                      </>
                    )}
                   <div className="absolute top-4 right-4 z-20">
                     <Badge className={`${patrocinador.corBadge} font-bold text-sm`}>
                       {patrocinador.desconto} OFF
                     </Badge>
                   </div>
                 </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {patrocinador.categoria}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    </div>
                  </div>
                                     <CardTitle className="text-xl group-hover:text-primary transition-colors">
                     {patrocinador.nome}
                   </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <p className="text-muted-foreground">
                    {patrocinador.descricao}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-primary" />
                      Benefícios:
                    </h4>
                    <ul className="space-y-1">
                      {patrocinador.beneficios.map((beneficio, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <Heart className="h-3 w-3 mr-2 text-red-500 fill-current" />
                          {beneficio}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 border border-primary/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-primary">Cupom Exclusivo</p>
                        <p className="text-xs text-muted-foreground">Use no checkout</p>
                      </div>
                      <Badge className="bg-primary text-primary-foreground font-mono text-lg px-3 py-1">
                        {patrocinador.cupom}
                      </Badge>
                    </div>
                  </div>

                                     <div className="mt-auto">
                     <Button 
                       className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                       onClick={() => window.open(patrocinador.link, '_blank')}
                     >
                       <Gift className="mr-2 h-4 w-4" />
                       Saber Mais
                     </Button>
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Como Funciona */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-center mb-12">
                Como{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Funciona
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Parcerias Selecionadas</h3>
                  <p className="text-muted-foreground text-sm">
                    Trabalhamos apenas com marcas de confiança e qualidade comprovada.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Percent className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">2. Descontos Exclusivos</h3>
                  <p className="text-muted-foreground text-sm">
                    Cupons especiais disponíveis apenas para nossos clientes.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">3. Qualidade Garantida</h3>
                  <p className="text-muted-foreground text-sm">
                    Produtos e serviços testados e aprovados pela nossa equipe.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Quer aproveitar esses descontos?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Entre em contato e descubra como acessar todas as vantagens exclusivas
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => window.open('https://wa.me/5514999031513?text=Olá,%20Bruno!%20Gostaria%20de%20saber%20mais%20sobre%20os%20descontos%20dos%20patrocinadores.', '_blank')}
          >
            Falar sobre Descontos
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Patrocinadores; 