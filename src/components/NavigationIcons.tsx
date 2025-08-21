import Icon from "@/components/ui/icon";

export default function NavigationIcons() {
  const navItems = [
    { id: "about", label: "КТО Я", icon: "User" },
    { id: "services", label: "ОБРЯДЫ", icon: "Leaf" },
    { id: "testimonials", label: "ОТЗЫВЫ", icon: "MessageSquareMore" },
    { id: "contact", label: "СВЯЗЬ", icon: "Mail" }
  ];

  return (
    <div className="absolute top-32 left-0 right-0 z-10 bg-slate-800/50 backdrop-blur-sm">
      <div className="grid grid-cols-4 gap-0 max-w-2xl mx-auto">
        {navItems.map((item, index) => (
          <a 
            key={item.id}
            href={`#${item.id}`}
            className={`flex flex-col items-center gap-3 py-6 px-4 text-white hover:text-orange-400 transition-colors group border-r border-slate-600/30 ${index === 0 ? 'text-orange-400' : ''} ${index === 3 ? 'border-r-0' : ''}`}
          >
            <div className="flex items-center justify-center">
              <Icon name={item.icon as any} size={28} />
            </div>
            <span className="text-sm font-medium tracking-wide">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}