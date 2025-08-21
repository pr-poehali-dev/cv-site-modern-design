import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function TestimonialsSection() {
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
  );
}