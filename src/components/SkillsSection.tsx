import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

export default function SkillsSection() {
  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "UI/UX Design", level: 70 }
  ];

  return (
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
  );
}