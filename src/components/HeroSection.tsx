import { Button } from "@/components/ui/button";
import NavigationIcons from "@/components/NavigationIcons";

export default function HeroSection() {
  return (
    <section 
      className="min-h-screen relative flex flex-col justify-end items-center pb-24"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(/img/f0731617-87b5-4c1b-b287-451d3cad791e.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <NavigationIcons />
      
      <div className="text-center text-white z-10 px-6">
        {/* Large Profile Photo */}
        <div className="mb-8">
          <div className="relative inline-block">
            <img 
              src="/img/e9a5bf2e-ca94-42fe-bcc2-6ba5c166a61f.jpg" 
              alt="Раиса Ильинская" 
              className="w-48 h-48 rounded-full object-cover border-4 border-orange-300 shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full ring-4 ring-orange-300/50"></div>
          </div>
        </div>
        
        {/* Name and Title */}
        <h1 className="text-4xl md:text-5xl font-inter font-bold mb-2">
          Раиса Ильинская
        </h1>
        <p className="text-xl text-orange-300 mb-12">
          Ворожея
        </p>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-medium tracking-wide"
        >
          НАПИШИТЕ МНЕ →
        </Button>
      </div>
    </section>
  );
}