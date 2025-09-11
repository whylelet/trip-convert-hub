import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-sunset bg-clip-text text-transparent">
              Sua Agência de Viagens
            </h3>
            <p className="text-white/80 mb-4">
              Transformando sonhos em experiências inesquecíveis há mais de 10 anos.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-white/80">(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-white/80">contato@agencia.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-white/80">São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Atendimento</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-white/80">Segunda à Sexta</p>
                  <p className="text-sm text-white/60">8h às 18h</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent opacity-50" />
                <div>
                  <p className="text-white/80">Sábados</p>
                  <p className="text-sm text-white/60">8h às 14h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Sua Agência de Viagens. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};