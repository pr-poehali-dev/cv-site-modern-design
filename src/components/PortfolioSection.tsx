import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function PortfolioSection() {
  const projects = [
    {
      title: "E-commerce платформа",
      description: "Современный интернет-магазин с React и Node.js",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "🛒",
      status: "Завершен"
    },
    {
      title: "Мобильное приложение для фитнеса",
      description: "React Native приложение с трекингом тренировок",
      tech: ["React Native", "Firebase", "Redux"],
      image: "💪",
      status: "В разработке"
    },
    {
      title: "Система управления проектами",
      description: "Корпоративная CRM система для управления задачами",
      tech: ["Vue.js", "Python", "Django", "Docker"],
      image: "📊",
      status: "Завершен"
    },
    {
      title: "AI-чатбот для поддержки",
      description: "Интеллектуальный ассистент с обработкой NLP",
      tech: ["Python", "TensorFlow", "FastAPI"],
      image: "🤖",
      status: "MVP готов"
    },
    {
      title: "Платформа для онлайн-обучения",
      description: "Образовательная платформа с видео-курсами",
      tech: ["Next.js", "Prisma", "AWS"],
      image: "🎓",
      status: "Завершен"
    },
    {
      title: "Криптовалютный трекер",
      description: "Real-time мониторинг криптовалют с аналитикой",
      tech: ["React", "WebSocket", "Chart.js"],
      image: "₿",
      status: "Завершен"
    }
  ];

  return (
    <section id="portfolio" className="py-16 px-6 bg-slate-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-inter font-bold text-center text-slate-800 mb-12">
          Мои проекты
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 text-center">{project.image}</div>
                <div className="flex justify-between items-start mb-3">
                  <Badge 
                    variant={project.status === "Завершен" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                  <Icon name="ExternalLink" className="text-slate-400 group-hover:text-primary transition-colors" size={16} />
                </div>
                <h3 className="font-inter font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map(tech => (
                    <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}