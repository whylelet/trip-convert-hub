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
    <section id="options" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Escolha a Melhor Opção Para Você
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diferentes perfis, diferentes necessidades. Encontre a forma ideal de planejar sua próxima aventura:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card 
                key={index}
                className="relative group hover:shadow-medium transition-all duration-300 border-0 shadow-soft bg-card/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {option.description}
                  </p>
                  <Button 
                    variant={option.buttonVariant}
                    className="w-full"
                    onClick={option.action}
                  >
                    {option.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas sobre qual opção escolher?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Deixe Seus Dados - Nós Te Ajudamos
          </Button>
        </div>
      </div>
    </section>
  );
};