import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-sunset bg-clip-text text-transparent">
              DW Viagens
            </h3>
            <p className="text-white/80 mb-4">
              Sua tranquilidade é a nossa preocupação
            </p>
            <p className="text-white/60 text-sm">
              Transformando sonhos em experiências inesquecíveis há 8 anos.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-white/80">+55 61 3081-8220</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-white/80">contato@dwviagens.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <a href="https://dwviagens.com.br/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  dwviagens.com.br
                </a>
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
                  <p className="text-sm text-white/60">09:00 - 19:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent opacity-70" />
                <div>
                  <p className="text-white/80">Sábado</p>
                  <p className="text-sm text-white/60">09:00 - 13:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent opacity-50" />
                <div>
                  <p className="text-white/80">Domingo</p>
                  <p className="text-sm text-white/60">Fechada</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © 2024 DW Viagens. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};