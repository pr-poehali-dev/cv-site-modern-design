import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Profile */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 p-0.5">
              <img 
                src="/img/e9a5bf2e-ca94-42fe-bcc2-6ba5c166a61f.jpg" 
                alt="Раиса Ильинская" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Раиса Ильинская</h2>
              <p className="text-sm text-primary">Ворожея</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              О себе
            </a>
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Отзывы
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors">
            <Icon name="Menu" size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}