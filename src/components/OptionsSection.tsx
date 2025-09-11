import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Tag, Bell, Heart } from "lucide-react";

export const OptionsSection = () => {
  const options = [
    {
      icon: Search,
      title: "Cotação Personalizada",
      description: "Acesse nosso site e faça sua própria cotação escolhendo destino e datas",
      buttonText: "Fazer Cotação",
      buttonVariant: "hero" as const,
      action: () => window.open("#", "_blank")
    },
    {
      icon: Tag,
      title: "Ofertas Específicas",
      description: "Veja as promoções exclusivas que trouxeram você até aqui",
      buttonText: "Ver Ofertas",
      buttonVariant: "sunset" as const,
      action: () => window.open("#", "_blank")
    },
    {
      icon: Bell,
      title: "Grupo de Promoções",
      description: "Junte-se ao nosso grupo e receba primeiro as melhores ofertas",
      buttonText: "Entrar no Grupo",
      buttonVariant: "success" as const,
      action: () => window.open("#", "_blank")
    },
    {
      icon: Heart,
      title: "Atendimento VIP",
      description: "Fale com um especialista e personalize sua viagem completamente",
      buttonText: "Falar com Especialista",
      buttonVariant: "default" as const,
      action: () => window.open("https://wa.me/", "_blank")
    }
  ];

  return (
    <section id="options" className="py-20 px-6 bg-gradient-to-br from-primary/5 via-accent/5 to-primary-light/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Escolha a Melhor Opção Para Você
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Diferentes necessidades, diferentes soluções. Encontre a opção perfeita para planejar sua próxima aventura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card 
                key={index}
                className="group p-6 hover:shadow-strong transition-all duration-500 border-2 border-accent/20 hover:border-accent/40 hover:scale-105 animate-fade-in bg-white/90 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-sunset flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {option.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    variant={option.buttonVariant}
                    className="w-full hover:scale-105 transition-transform duration-200"
                    onClick={option.action}
                  >
                    {option.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-gradient-hero text-white border-2 border-accent/30 shadow-strong animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Ainda está em dúvida?</h3>
          <p className="text-white/90 mb-6 text-lg">
            Converse conosco! Nossa equipe de especialistas está pronta para te ajudar a encontrar a opção perfeita.
          </p>
          <Button 
            variant="sunset" 
            size="lg"
            className="text-lg px-8 py-4 h-auto hover:scale-105 transition-transform duration-200"
            onClick={() => window.open("https://wa.me/+556130818220", "_blank")}
          >
            Falar com Especialista Agora
          </Button>
        </Card>
      </div>
    </section>
  );
};