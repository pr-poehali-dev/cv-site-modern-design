import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/40"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Profile Section */}
        <div className="mb-12 animate-fade-in">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-primary/60 p-1 shadow-2xl shadow-primary/25">
              <img 
                src="/img/e9a5bf2e-ca94-42fe-bcc2-6ba5c166a61f.jpg" 
                alt="Раиса Ильинская" 
                className="w-full h-full rounded-full object-cover border-4 border-background/20"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <Icon name="Sparkles" size={20} className="text-primary-foreground" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Раиса Ильинская
          </h1>
          <p className="text-xl text-primary font-medium mb-8 tracking-wide">
            Ворожея • Целительница • Наставница
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 w-full max-w-2xl animate-fade-in-up">
          <div className="group cursor-pointer">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
              <Icon name="User" size={28} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-foreground">КТО Я</span>
            </div>
          </div>
          
          <div className="group cursor-pointer">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
              <Icon name="Leaf" size={28} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-foreground">ОБРЯДЫ</span>
            </div>
          </div>
          
          <div className="group cursor-pointer">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
              <Icon name="MessageSquareMore" size={28} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-foreground">ОТЗЫВЫ</span>
            </div>
          </div>
          
          <div className="group cursor-pointer">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
              <Icon name="Mail" size={28} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-foreground">СВЯЗЬ</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold tracking-wide shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
        >
          <Icon name="MessageCircle" className="mr-2" size={20} />
          НАПИШИТЕ МНЕ
        </Button>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}