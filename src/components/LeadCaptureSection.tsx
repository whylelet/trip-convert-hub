import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, MapPin } from "lucide-react";

export const LeadCaptureSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    originCity: "",
    destinations: [] as string[],
    interests: [] as string[]
  });
  const { toast } = useToast();

  const interestOptions = [
    "Viagens Nacionais",
    "Viagens Internacionais", 
    "Lua de Mel",
    "Viagens em Família",
    "Turismo de Aventura",
    "Cruzeiros",
    "Pacotes Promocionais"
  ];

  const destinationOptions = [
    "Europa (Paris, Londres, Roma)",
    "Estados Unidos (Orlando, Nova York, Miami)",
    "Caribe (Cancún, Punta Cana, Aruba)",
    "América do Sul (Buenos Aires, Chile, Peru)",
    "Ásia (Dubai, Japão, Tailândia)",
    "África (Egito, Marrocos, África do Sul)",
    "Brasil (Nordeste, Rio, Amazônia)",
    "Oceania (Austrália, Nova Zelândia)"
  ];

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const handleDestinationChange = (destination: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      destinations: checked 
        ? [...prev.destinations, destination]
        : prev.destinations.filter(d => d !== destination)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e e-mail.",
        variant: "destructive"
      });
      return;
    }

    // Aqui você integraria com sua API ou serviço de CRM
    console.log("Lead capturado:", formData);
    
    toast({
      title: "Sucesso!",
      description: "Seus dados foram enviados. Em breve entraremos em contato com as melhores ofertas!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      originCity: "",
      destinations: [],
      interests: []
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary-light/10"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <Card className="border-2 border-accent/20 shadow-strong bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Receba Nossas Melhores Ofertas
            </CardTitle>
            <p className="text-muted-foreground text-lg">
              Deixe seus dados e seja o primeiro a saber das promoções exclusivas para seus destinos favoritos
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Seu nome completo *"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="pl-10 h-12"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="Seu melhor e-mail *"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="tel"
                    placeholder="WhatsApp (opcional)"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="pl-10 h-12"
                  />
                </div>
                
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Sua cidade de origem"
                    value={formData.originCity}
                    onChange={(e) => setFormData(prev => ({ ...prev, originCity: e.target.value }))}
                    className="pl-10 h-12"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="text-accent w-5 h-5" />
                  <h3 className="font-semibold text-foreground">Destinos que te interessam (escolha quantos quiser):</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {destinationOptions.map((destination) => (
                    <div key={destination} className="flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-all">
                      <Checkbox
                        id={destination}
                        checked={formData.destinations.includes(destination)}
                        onCheckedChange={(checked) => handleDestinationChange(destination, !!checked)}
                      />
                      <label htmlFor={destination} className="text-sm text-foreground cursor-pointer font-medium">
                        {destination}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="text-primary w-5 h-5" />
                  <h3 className="font-semibold text-foreground">Que tipo de viagem te interessa?</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interestOptions.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2 p-2 rounded-lg bg-gradient-to-r from-secondary/50 to-accent-light/20 hover:from-secondary/80 hover:to-accent-light/40 transition-all">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={(checked) => handleInterestChange(interest, !!checked)}
                      />
                      <label htmlFor={interest} className="text-sm text-foreground cursor-pointer font-medium">
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full text-lg py-4 h-auto"
              >
                Quero Receber as Ofertas Exclusivas
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                * Campos obrigatórios. Não compartilhamos seus dados com terceiros.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};