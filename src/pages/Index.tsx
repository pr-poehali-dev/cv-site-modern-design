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
            <div className="flex items-center gap-3">
              <img 
                src="/img/2151a7bb-320a-42b4-ab62-3ac2436321c8.jpg" 
                alt="Алексей Козлов" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-xl font-inter font-bold text-slate-800">
                Алексей Козлов
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-primary transition-colors">Обо мне</a>
              <a href="#skills" className="text-slate-600 hover:text-primary transition-colors">Навыки</a>
              <a href="#portfolio" className="text-slate-600 hover:text-primary transition-colors">Портфолио</a>
              <a href="#education" className="text-slate-600 hover:text-primary transition-colors">Образование</a>
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
            <img 
              src="/img/2151a7bb-320a-42b4-ab62-3ac2436321c8.jpg" 
              alt="Алексей Козлов" 
              className="w-32 h-32 mx-auto mb-6 rounded-full object-cover shadow-xl ring-4 ring-primary/20"
            />
            <h1 className="text-5xl md:text-6xl font-inter font-bold text-slate-800 mb-4 animate-fade-in">
              Алексей Козлов
            </h1>
            <p className="text-xl text-slate-600 mb-6 animate-fade-in-up">
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-inter font-bold text-center text-slate-800 mb-12">
            Мои проекты
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
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
            ].map((project, index) => (
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

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-white">
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

      {/* Education & Certificates Section */}
      <section id="education" className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-inter font-bold text-center text-slate-800 mb-12">
            Образование и сертификаты
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <div>
                <h3 className="text-xl font-inter font-semibold mb-6 flex items-center gap-2">
                  <Icon name="GraduationCap" className="text-primary" size={24} />
                  Образование
                </h3>
                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Московский Технический Университет</h4>
                      <span className="text-sm text-slate-500">2018-2022</span>
                    </div>
                    <p className="text-primary font-medium mb-1">Бакалавр информатики</p>
                    <p className="text-slate-600 text-sm">Специализация: Разработка ПО, с отличием</p>
                  </Card>
                  <Card className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Дополнительное образование</h4>
                      <span className="text-sm text-slate-500">2022-2023</span>
                    </div>
                    <p className="text-primary font-medium mb-1">Fullstack JavaScript</p>
                    <p className="text-slate-600 text-sm">Интенсивный курс по современной веб-разработке</p>
                  </Card>
                </div>
              </div>
              
              {/* Certificates */}
              <div>
                <h3 className="text-xl font-inter font-semibold mb-6 flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={24} />
                  Сертификаты
                </h3>
                <div className="space-y-4">
                  {[
                    "AWS Certified Developer - Associate",
                    "Google Cloud Professional Developer",
                    "MongoDB Certified Developer",
                    "Meta React Developer Certificate",
                    "Docker Certified Associate"
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <Icon name="CheckCircle" className="text-green-500" size={20} />
                      <span className="text-slate-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Interests & Hobbies */}
            <div className="mt-12">
              <h3 className="text-xl font-inter font-semibold mb-6 text-center flex items-center justify-center gap-2">
                <Icon name="Heart" className="text-primary" size={24} />
                Интересы и хобби
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: "🚀", title: "Космические технологии", desc: "Слежу за SpaceX и новостями космоса" },
                  { icon: "📚", title: "Техническая литература", desc: "Читаю книги по архитектуре ПО" },
                  { icon: "🎸", title: "Музыка", desc: "Играю на гитаре в свободное время" },
                  { icon: "🏃", title: "Бег", desc: "Регулярные пробежки для здоровья" }
                ].map((hobby, index) => (
                  <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-2">{hobby.icon}</div>
                    <h4 className="font-medium mb-1">{hobby.title}</h4>
                    <p className="text-sm text-slate-600">{hobby.desc}</p>
                  </Card>
                ))}
              </div>
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

      {/* Contact Form Section */}
      <section id="contact" className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-inter font-bold text-center text-slate-800 mb-12">
            Свяжитесь со мной
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="text-xl font-inter font-semibold mb-6">Отправить сообщение</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Тема</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Тема сообщения"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Сообщение</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  ></textarea>
                </div>
                <Button size="lg" className="w-full">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </form>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-inter font-semibold mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-slate-600">alexey.kozlov@email.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium">Телефон</h4>
                      <p className="text-slate-600">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium">Локация</h4>
                      <p className="text-slate-600">Москва, Россия</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium">Время работы</h4>
                      <p className="text-slate-600">Пн-Пт: 9:00 - 18:00 MSK</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="p-6 bg-gradient-to-br from-primary to-blue-600 text-white">
                <h4 className="font-inter font-semibold mb-2">Готов начать проект?</h4>
                <p className="text-blue-100 mb-4">Обычно отвечаю в течение 24 часов</p>
                <div className="flex gap-3">
                  <Button variant="secondary" size="sm">
                    <Icon name="Github" className="mr-2" size={16} />
                    GitHub
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Icon name="Linkedin" className="mr-2" size={16} />
                    LinkedIn
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-inter font-bold mb-4">
            Давайте создадим что-то великое вместе!
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Готов воплотить ваши идеи в жизнь с помощью современных технологий
          </p>
          
          <div className="flex justify-center gap-6">
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать CV
            </Button>
            <Button size="lg">
              <Icon name="ArrowUp" className="mr-2" size={20} />
              Наверх
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