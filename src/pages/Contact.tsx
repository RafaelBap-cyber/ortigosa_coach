import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone, Mail, MapPin, Clock, Calendar, Send, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Resposta rápida",
      value: "(14) 99903-1513",
      action: "Enviar Mensagem",
      primary: true
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Siga e acompanhe",
      value: "@bruno_ortigosa",
      action: "Seguir"
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Contato formal",
      value: "contato@fitcoach.com",
      action: "Enviar E-mail"
    },
    {
      icon: MapPin,
      title: "Localização",
      description: "Academia Corpus",
      value: "Tupã, SP",
      action: "Ver no Mapa"
    }
  ];

  const scheduleInfo = [
    { day: "Segunda a Sexta", hours: "06:00 - 22:00" },
    { day: "Sábado", hours: "07:00 - 18:00" },
    { day: "Domingo", hours: "08:00 - 16:00" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-20">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Vamos conversar
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Contato
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para começar sua transformação? Entre em contato comigo e vamos 
            conversar sobre seus objetivos e como posso te ajudar a alcançá-los.
          </p>
        </section>

        {/* Quick Contact Options */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((contact, index) => (
            <Card key={index} className={`text-center hover:shadow-lg transition-all ${contact.primary ? 'ring-2 ring-primary' : ''}`}>
              <CardContent className="p-6">
                <div className={`${contact.primary ? 'bg-primary' : 'bg-secondary'} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{contact.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{contact.description}</p>
                <p className="font-medium mb-4">{contact.value}</p>
                <Button 
                  variant={contact.primary ? "default" : "outline"} 
                  size="sm" 
                  className={contact.primary ? "bg-primary hover:bg-primary/90" : ""}
                  onClick={() => {
                    if (contact.title === "WhatsApp") {
                      window.open('https://wa.me/5514999031513?text=Olá,%20Bruno!%20Gostaria%20de%20conversar%20sobre%20seus%20serviços.', '_blank');
                    } else if (contact.title === "Instagram") {
                      window.open('https://www.instagram.com/bruno_ortigosa', '_blank');
                    } else if (contact.title === "E-mail") {
                      window.open('mailto:contato@brunoortigosa.com?subject=Interesse%20em%20Personal%20Training', '_self');
                    }
                  }}
                >
                  {contact.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="h-6 w-6 text-primary" />
                <span>Envie uma Mensagem</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nome *</label>
                    <Input
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Telefone *</label>
                    <Input
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">E-mail *</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Objetivo Principal</label>
                  <select 
                    className="w-full p-3 border border-input rounded-md bg-background"
                    value={formData.goal}
                    onChange={(e) => setFormData({...formData, goal: e.target.value})}
                  >
                    <option value="">Selecione seu objetivo</option>
                    <option value="emagrecimento">Emagrecimento</option>
                    <option value="hipertrofia">Ganho de Massa Muscular</option>
                    <option value="condicionamento">Condicionamento Físico</option>
                    <option value="reabilitacao">Reabilitação</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Mensagem</label>
                  <Textarea
                    placeholder="Conte um pouco sobre seus objetivos, experiência anterior com exercícios, disponibilidade de horários..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                  Enviar Mensagem
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="space-y-6">
            {/* Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>Horários de Atendimento</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {scheduleInfo.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-primary">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  <span>Ações Rápidas</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('https://wa.me/5514999031513?text=Olá,%20Bruno!%20Gostaria%20de%20agendar%20um%20horário.', '_blank')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Agendar pelo WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/5514999031513?text=Gostaria%20de%20ver%20sua%20agenda%20disponível.', '_blank')}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Ver Agenda 
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('tel:+5514999031513', '_self')}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Solicitar Ligação
                </Button>
              </CardContent>
            </Card>

            {/* FAQ Quick */}
            <Card>
              <CardHeader>
                <CardTitle>Perguntas Frequentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium mb-1">Quanto tempo demora para ver resultados?</p>
                    <p className="text-muted-foreground">Primeiros resultados em 2-4 semanas, transformações significativas em 3 meses.</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Tem experiência com atletas?</p>
                    <p className="text-muted-foreground">Sim, Mister Olimpia Amador e Muscle Content entre outros.</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Tem consultoria online?</p>
                    <p className="text-muted-foreground">Sim, acompanhamento completo via app com resultados comprovados.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location Map Placeholder */}
        <section className="mb-20">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-primary" />
                <span>Localização</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                {/* Opção 1: Imagem estática do mapa */}
                <img 
                  src="/images/mapa-academia-corpus.jpg" 
                  alt="Localização da Academia Corpus Quality Unidade 2 - Tupã, SP"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Se a imagem não carregar, mostra o iframe como fallback
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const iframe = target.nextElementSibling as HTMLIFrameElement;
                    if (iframe) iframe.style.display = 'block';
                  }}
                />
                
                {/* Opção 2: Iframe do Google Maps (fallback) */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.1234567890123!2d-50.51345678901234!3d-21.98765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDU5JzE1LjYiUyA1MMKwMzAnNDguNSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'none' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Academia Corpus Quality - Tupã, SP"
                ></iframe>
                
                {/* Overlay com informações */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-sm">Academia Corpus Quality</p>
                      <p className="text-xs text-muted-foreground">Unidade 2 - Tupã, SP</p>
                    </div>
                  </div>
                </div>
                
                {/* Botão para abrir no Google Maps */}
                <div className="absolute bottom-4 right-4">
                  <Button 
                    size="sm" 
                    variant="secondary"
                    onClick={() => window.open('https://maps.google.com/?q=Academia+Corpus+Quality+Tupã+SP', '_blank')}
                    className="bg-white/90 backdrop-blur-sm hover:bg-white"
                  >
                    <MapPin className="h-4 w-4 mr-1" />
                    Abrir no Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Vamos começar sua jornada hoje!
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            A primeira avaliação é gratuita. Sem compromisso, apenas uma conversa sobre seus objetivos.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => window.open('https://wa.me/5514999031513?text=Olá,%20Bruno!%20Gostaria%20da%20avaliação%20gratuita.', '_blank')}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar no WhatsApp Agora
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Contact;