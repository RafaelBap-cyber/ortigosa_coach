import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone, Mail, MapPin, Clock, Calendar, Instagram } from "lucide-react";

const Contact = () => {

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
      value: "brunobaptistaortigosa@gmail.com",
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
                <p className="font-medium mb-4 text-center text-sm whitespace-nowrap overflow-hidden">{contact.value}</p>
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
                      const subject = encodeURIComponent('Interesse em Personal Training');
                      const body = encodeURIComponent('Olá Bruno,\n\nGostaria de conversar sobre seus serviços de personal training.\n\nAguardo seu retorno.\n\nAtenciosamente,');
                      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=brunobaptistaortigosa@gmail.com&su=${subject}&body=${body}`, '_blank');
                    } else if (contact.title === "Localização") {
                      window.open('https://maps.google.com/?q=R.+Estados+Unidos,+1010+-+Jardim+America,+Tupã+-+SP,+17605-253', '_blank');
                    }
                  }}
                >
                  {contact.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        <div className="space-y-8 mb-20">
          {/* First row - Schedule and Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
          </div>

          {/* Second row - FAQ */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
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