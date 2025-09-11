import { Plane } from "lucide-react";

export const DWLogo = ({ className = "h-16 md:h-20" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <Plane className="w-8 h-8 md:w-10 md:h-10 text-primary rotate-45" />
      <span className="text-4xl md:text-5xl font-bold text-accent">DW Viagens</span>
    </div>
  );
};