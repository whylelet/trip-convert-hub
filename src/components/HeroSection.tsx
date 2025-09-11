import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beach.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transforme seus
          <span className="block bg-gradient-sunset bg-clip-text text-transparent">
            Sonhos em Viagens
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Mais que uma agência, somos seus companheiros de jornada. 
          Cuidamos de cada detalhe para que você viva experiências inesquecíveis.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto"
            onClick={() => document.getElementById('options')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Planejar Minha Viagem
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto border-white/30 text-white hover:bg-white/10"
            onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Por Que Escolher Uma Agência?
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};