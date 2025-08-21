import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

export default function Index() {
  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "UI/UX Design", level: 70 }
  ];

  const testimonials = [
    {
      name: "Анна Иванова",
      role: "Product Manager в TechCorp",
      text: "Работа с Алексеем была настоящим удовольствием. Он не только выполнил все технические требования, но и предложил улучшения, которые значительно повысили качество продукта.",
      avatar: "👩‍💼"
    },
    {
      name: "Михаил Петров",
      role: "CTO стартапа DigitalFlow",
      text: "Профессионализм на высшем уровне! Алексей сдал проект в срок, код чистый и хорошо документированный. Определенно будем сотрудничать снова.",
      avatar: "👨‍💻"
    },
    {
      name: "Елена Смирнова",
      role: "Freelance Designer",
      text: "Отличная коммуникация и понимание дизайна. Алексей легко воплотил мои идеи в жизнь и предложил технические решения, о которых я даже не думала.",
      avatar: "🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-open-sans">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-10">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-xl font-inter font-bold text-slate-800">
              Алексей Козлов
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-primary transition-colors">Обо мне</a>
              <a href="#skills" className="text-slate-600 hover:text-primary transition-colors">Навыки</a>
              <a href="#testimonials" className="text-slate-600 hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-slate-600 hover:text-primary transition-colors">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-4xl">
              👨‍💻
            </div>
            <h1 className="text-5xl md:text-6xl font-inter font-bold text-slate-800 mb-4">
              Алексей Козлов
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm">React</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">TypeScript</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">Node.js</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">Python</Badge>
            </div>
            <Button size="lg">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать CV
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-inter font-bold text-center text-slate-800 mb-12">
            Обо мне
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Я разработчик с 5+ летним опытом создания современных веб-приложений. 
                  Специализируюсь на React, TypeScript и Node.js. Увлекаюсь созданием 
                  интуитивных пользовательских интерфейсов и эффективных back-end решений.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  В своей работе руководствуюсь принципами чистого кода, современными 
                  практиками разработки и всегда стремлюсь к созданию качественных, 
                  масштабируемых решений.
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-slate-600">Проектов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-slate-600">Лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">30+</div>
                    <div className="text-sm text-slate-600">Клиентов</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-l-primary">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Code" className="text-primary" size={24} />
                    <h3 className="font-inter font-semibold">Frontend Development</h3>
                  </div>
                  <p className="text-slate-600">React, Vue.js, TypeScript, Tailwind CSS</p>
                </Card>
                <Card className="p-6 border-l-4 border-l-primary">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Server" className="text-primary" size={24} />
                    <h3 className="font-inter font-semibold">Backend Development</h3>
                  </div>
                  <p className="text-slate-600">Node.js, Python, PostgreSQL, MongoDB</p>
                </Card>
                <Card className="p-6 border-l-4 border-l-primary">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Palette" className="text-primary" size={24} />
                    <h3 className="font-inter font-semibold">UI/UX Design</h3>
                  </div>
                  <p className="text-slate-600">Figma, Adobe XD, Prototyping, User Research</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-inter font-bold text-center text-slate-800 mb-12">
            Навыки и технологии
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-3" />
                </div>
              ))}
            </div>
            
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-inter font-semibold text-lg mb-4 flex items-center gap-2">
                  <Icon name="Wrench" className="text-primary" size={20} />
                  Инструменты
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "VS Code", "Figma", "Postman", "Jest"].map(tool => (
                    <Badge key={tool} variant="outline" className="text-xs">{tool}</Badge>
                  ))}
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-inter font-semibold text-lg mb-4 flex items-center gap-2">
                  <Icon name="Cloud" className="text-primary" size={20} />
                  Платформы
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Vercel", "Netlify", "Heroku", "Firebase", "GitHub"].map(platform => (
                    <Badge key={platform} variant="outline" className="text-xs">{platform}</Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-inter font-bold text-center text-slate-800 mb-12">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-slate-800">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{testimonial.text}</p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-inter font-bold mb-8">
            Готов к сотрудничеству?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Давайте обсудим ваш проект и найдем лучшее решение для ваших задач
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                <Icon name="Mail" className="text-white" size={24} />
              </div>
              <h3 className="font-inter font-semibold mb-2">Email</h3>
              <p className="text-slate-300">alexey.kozlov@email.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                <Icon name="Phone" className="text-white" size={24} />
              </div>
              <h3 className="font-inter font-semibold mb-2">Телефон</h3>
              <p className="text-slate-300">+7 (999) 123-45-67</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                <Icon name="MapPin" className="text-white" size={24} />
              </div>
              <h3 className="font-inter font-semibold mb-2">Локация</h3>
              <p className="text-slate-300">Москва, Россия</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
              <Icon name="Github" className="mr-2" size={20} />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
              <Icon name="Linkedin" className="mr-2" size={20} />
              LinkedIn
            </Button>
            <Button size="lg">
              <Icon name="Send" className="mr-2" size={20} />
              Написать
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 text-slate-400 text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 Алексей Козлов. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}