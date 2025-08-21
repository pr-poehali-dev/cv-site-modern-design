export default function Header() {
  return (
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
  );
}