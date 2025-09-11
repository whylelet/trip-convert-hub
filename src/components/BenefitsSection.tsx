import { Shield, Users, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Segurança em Cada Detalhe",
      description: "Imprevistos acontecem, mas com nossa experiência você tem o suporte necessário para resolver qualquer situação, desde cancelamentos até emergências no destino.",
      gradient: "from-primary to-primary-dark"
    },
    {
      icon: Users,
      title: "Especialistas ao Seu Lado",
      description: "Nossa equipe te acompanha desde o primeiro contato até o retorno da viagem. Orientação sobre documentação, dicas de bagagem e suporte 24h.",
      gradient: "from-success to-success/80"
    },
    {
      icon: MapPin,
      title: "Muito Além da Compra",
      description: "Não vendemos apenas passagens. Criamos experiências personalizadas, cuidamos dos detalhes burocráticos e te orientamos sobre cada aspecto da sua jornada.",
      gradient: "from-accent to-accent/80"
    }
  ];

  return (
    <section id="benefits" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por Que Escolher Uma Agência?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Viajar por conta própria pode parecer mais barato, mas os riscos e complicações 
            podem transformar seu sonho em pesadelo. Veja como cuidamos de você:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="relative overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-300 group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                <CardContent className="relative p-8 text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${benefit.gradient} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};