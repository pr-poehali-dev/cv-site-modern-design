import Icon from "@/components/ui/icon";

export default function NavigationIcons() {
  const navItems = [
    { id: "about", label: "КТО Я", icon: "User" },
    { id: "services", label: "ОБРЯДЫ", icon: "Sparkles" },
    { id: "testimonials", label: "ОТЗЫВЫ", icon: "MessageCircle" },
    { id: "contact", label: "СВЯЗЬ", icon: "Mail" }
  ];

  return (
    <div className="absolute top-32 left-0 right-0 z-10">
      <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto px-6">
        {navItems.map((item) => (
          <a 
            key={item.id}
            href={`#${item.id}`}
            className="flex flex-col items-center gap-2 p-4 text-white hover:text-orange-300 transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-orange-300/20 transition-all">
              <Icon name={item.icon as any} size={24} />
            </div>
            <span className="text-xs font-medium uppercase tracking-wide">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}