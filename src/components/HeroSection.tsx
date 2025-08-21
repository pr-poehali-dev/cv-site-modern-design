import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
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
  );
}