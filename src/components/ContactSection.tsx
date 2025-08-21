import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function ContactSection() {
  return (
    <>
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
    </>
  );
}