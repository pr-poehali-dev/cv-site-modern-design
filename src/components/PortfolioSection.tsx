import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function PortfolioSection() {
  const services = [
    {
      title: "Снятие порчи и сглаза",
      description: "Диагностика и очищение от негативных энергетических воздействий",
      methods: ["Диагностика", "Очищение", "Защита", "Восстановление"],
      icon: "Shield",
      category: "Энергетическая защита"
    },
    {
      title: "Любовные обряды",
      description: "Гармонизация отношений и привлечение любви",
      methods: ["Привлечение", "Возврат", "Гармонизация", "Укрепление"],
      icon: "Heart",
      category: "Личные отношения"
    },
    {
      title: "Денежные ритуалы",
      description: "Привлечение благосостояния и финансовой стабильности",
      methods: ["Привлечение", "Стабилизация", "Защита от потерь", "Процветание"],
      icon: "Coins",
      category: "Материальное благополучие"
    },
    {
      title: "Исцеление травами",
      description: "Лечение различных недугов натуральными средствами",
      methods: ["Травяные сборы", "Настойки", "Мази", "Ароматерапия"],
      icon: "Leaf",
      category: "Фитотерапия"
    },
    {
      title: "Снятие венца безбрачия",
      description: "Освобождение от родовых программ одиночества",
      methods: ["Диагностика рода", "Очищение", "Снятие блоков", "Активация"],
      icon: "Users",
      category: "Родовые программы"
    },
    {
      title: "Защитные обереги",
      description: "Изготовление персональных защитных амулетов",
      methods: ["Диагностика", "Подбор материалов", "Зарядка", "Активация"],
      icon: "Star",
      category: "Магические предметы"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
      <div className="absolute top-20 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-36 h-36 bg-primary/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-foreground mb-4">
            Мои услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Комплексный подход к решению жизненных вопросов через древние практики
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group p-8 bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-primary/20 group-hover:bg-primary/30 transition-colors group-hover:scale-110 duration-300">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <Badge 
                    variant="outline" 
                    className="bg-background/50 border-border/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/50 transition-all duration-300"
                  >
                    {service.category}
                  </Badge>
                </div>
                
                {/* Content */}
                <div className="mb-6">
                  <h3 className="font-inter font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                {/* Methods */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground/80 uppercase tracking-wide">
                    Методы работы:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.methods.map((method, methodIndex) => (
                      <div 
                        key={methodIndex}
                        className="flex items-center gap-2 p-2 rounded-lg bg-background/50 border border-border/30 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform"></div>
                        <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                          {method}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA */}
                <div className="mt-6 pt-4 border-t border-border/30">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      Узнать подробнее
                    </span>
                    <Icon 
                      name="ArrowRight" 
                      className="text-primary group-hover:translate-x-1 transition-transform" 
                      size={16} 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 max-w-2xl mx-auto hover:bg-card/80 transition-all duration-500">
            <h3 className="text-2xl font-inter font-semibold text-foreground mb-4">
              Не нашли нужную услугу?
            </h3>
            <p className="text-muted-foreground mb-6">
              Каждый случай уникален. Я помогу найти индивидуальное решение вашего вопроса
            </p>
            <div className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors cursor-pointer group">
              <Icon name="MessageCircle" size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">Задать вопрос лично</span>
              <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}