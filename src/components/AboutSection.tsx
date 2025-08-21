import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function AboutSection() {
  return (
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
  );
}