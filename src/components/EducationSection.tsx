import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function EducationSection() {
  const hobbies = [
    { icon: "🚀", title: "Космические технологии", desc: "Слежу за SpaceX и новостями космоса" },
    { icon: "📚", title: "Техническая литература", desc: "Читаю книги по архитектуре ПО" },
    { icon: "🎸", title: "Музыка", desc: "Играю на гитаре в свободное время" },
    { icon: "🏃", title: "Бег", desc: "Регулярные пробежки для здоровья" }
  ];

  const certificates = [
    "AWS Certified Developer - Associate",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "Meta React Developer Certificate",
    "Docker Certified Associate"
  ];

  return (
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
                {certificates.map((cert, index) => (
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
              {hobbies.map((hobby, index) => (
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
  );
}