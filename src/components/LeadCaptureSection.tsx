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

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
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
      interests: []
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-4xl mx-auto">
        <Card className="border-0 shadow-strong bg-white/95 backdrop-blur-sm">
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

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="text-primary w-5 h-5" />
                  <h3 className="font-semibold text-foreground">Que tipo de viagem te interessa?</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interestOptions.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={(checked) => handleInterestChange(interest, !!checked)}
                      />
                      <label htmlFor={interest} className="text-sm text-muted-foreground cursor-pointer">
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