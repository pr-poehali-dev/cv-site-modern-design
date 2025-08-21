import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute top-40 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-foreground mb-4">
            О моей практике
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Древние знания и современный подход к целительству
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Main Content */}
            <div className="animate-slide-in-left">
              <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                Более 15 лет я помогаю людям обрести гармонию, исцелиться от недугов 
                и найти свой истинный путь. Моя практика основана на древних славянских 
                традициях целительства, переданных через поколения моей семьи.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                Каждый человек уникален, поэтому я подхожу к работе индивидуально, 
                используя различные методы: травничество, энергетическое целительство, 
                обрядовые практики и духовное наставничество.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center group">
                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card/80 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">500+</div>
                    <div className="text-sm text-muted-foreground">Исцелений</div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card/80 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">15+</div>
                    <div className="text-sm text-muted-foreground">Лет опыта</div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card/80 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">24/7</div>
                    <div className="text-sm text-muted-foreground">Поддержка</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Services Cards */}
            <div className="space-y-6 animate-fade-in-up">
              <Card className="group p-8 bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Icon name="Leaf" className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      Травничество
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Лечебные сборы, настои и мази на основе дикорастущих трав
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="group p-8 bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Icon name="Sparkles" className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      Энергетическое целительство
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Работа с энергетическими центрами и восстановление баланса
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="group p-8 bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Icon name="Heart" className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      Духовное наставничество
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Помощь в поиске жизненного пути и духовном развитии
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}