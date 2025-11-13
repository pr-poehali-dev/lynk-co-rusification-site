import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const features = [
    {
      icon: 'Truck',
      title: 'Выезд к Вам',
      description: 'Мы приезжаем к вам в удобное время. Особенно удобно для новых автомобилей'
    },
    {
      icon: 'Wifi',
      title: 'Интернет 4G',
      description: 'Установка SIM-карты и настройка высокоскоростного интернета в автомобиле'
    },
    {
      icon: 'Smartphone',
      title: 'Популярные приложения',
      description: 'YouTube, Яндекс.Навигатор, Яндекс.Музыка, Spotify, Кинопоиск и другие'
    },
    {
      icon: 'MapPin',
      title: 'По всей России',
      description: 'Поддержка клиентов в любом регионе страны'
    },
    {
      icon: 'Percent',
      title: 'Скидки дилерам',
      description: 'Специальные условия для дилеров и импортеров автомобилей'
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Официальная гарантия на все выполненные работы'
    }
  ];

  const process = [
    { step: '01', title: 'Заявка', description: 'Оставьте заявку на сайте или позвоните нам' },
    { step: '02', title: 'Консультация', description: 'Обсудим детали и согласуем время выезда' },
    { step: '03', title: 'Русификация', description: 'Установка и настройка всех необходимых компонентов' },
    { step: '04', title: 'Проверка', description: 'Тестирование всех функций и обучение пользованию' }
  ];

  const services = [
    'Установка слота SIM-карты',
    'Настройка интернета 4G',
    'Установка магазина приложений',
    'Настройка навигации и карт',
    'Программы для телевидения',
    'Качественный эквалайзер',
    'Разделение экрана',
    'Русификация интерфейса'
  ];

  const reviews = [
    { name: 'Алексей М.', text: 'Отличная работа! Приехали в удобное время, все сделали быстро и качественно. Теперь пользуюсь всеми приложениями прямо в машине.', rating: 5 },
    { name: 'Дмитрий К.', text: 'Русификация прошла идеально. Особенно порадовала установка Яндекс.Навигатора и возможность смотреть YouTube в дороге.', rating: 5 },
    { name: 'Сергей В.', text: 'Профессиональный подход, всё объяснили и показали. Гарантия и поддержка - это большой плюс!', rating: 5 }
  ];

  const faqs = [
    { q: 'Сколько времени занимает русификация?', a: 'Процесс русификации занимает от 2 до 4 часов в зависимости от комплектации и пожеланий клиента.' },
    { q: 'Нужно ли везти автомобиль к вам?', a: 'Нет, мы выезжаем к вам в любое удобное место и время. Это особенно удобно для новых автомобилей.' },
    { q: 'Какие приложения будут установлены?', a: 'Мы устанавливаем YouTube, Яндекс.Навигатор, Яндекс.Музыку, Spotify, Кинопоиск, программы для ТВ и другие популярные приложения по вашему выбору.' },
    { q: 'Сохранится ли гарантия на автомобиль?', a: 'Да, все работы выполняются без вмешательства в заводские системы. Гарантия производителя сохраняется.' },
    { q: 'Есть ли поддержка после русификации?', a: 'Да, мы предоставляем техническую поддержку по всей России и гарантию на выполненные работы.' },
    { q: 'Можно ли обновлять приложения?', a: 'Да, после установки магазина приложений вы сможете самостоятельно обновлять и устанавливать новые приложения.' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Car" className="text-accent" size={32} />
            <span className="text-white font-heading font-bold text-xl">Lynk & Co 900</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-white hover:text-accent transition-colors">Преимущества</a>
            <a href="#process" className="text-white hover:text-accent transition-colors">Процесс</a>
            <a href="#pricing" className="text-white hover:text-accent transition-colors">Стоимость</a>
            <a href="#reviews" className="text-white hover:text-accent transition-colors">Отзывы</a>
            <a href="#contact" className="text-white hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90 text-white">
            <Icon name="Phone" className="mr-2" size={18} />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 leading-tight">
                Русификация<br />
                <span className="text-accent">Lynk & Co 900</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Полная адаптация мультимедийной системы вашего автомобиля под российский рынок. Все популярные приложения и сервисы в одном месте.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold">
                  <Icon name="MessageSquare" className="mr-2" size={20} />
                  Оставить заявку
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  <Icon name="Play" className="mr-2" size={20} />
                  Как это работает
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/5401aaf9-47ac-4761-8f76-e8a9b7f25d5b/files/55e54d5a-c547-45a0-966b-c0ddc8143770.jpg" 
                alt="Lynk & Co 900" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Наши преимущества</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональная русификация с полным комплексом услуг
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in bg-white" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <Icon name={feature.icon} className="text-accent" size={32} />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Что входит в русификацию</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Check" className="text-white" size={20} />
                </div>
                <p className="text-lg">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Как проходит русификация</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Простой и понятный процесс от заявки до полностью настроенного автомобиля
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-heading font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-accent/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/5401aaf9-47ac-4761-8f76-e8a9b7f25d5b/files/4071e333-99dc-4cc3-822e-afe996d65799.jpg" 
                alt="Интерьер автомобиля" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">Мультимедийная система нового уровня</h2>
              <p className="text-xl text-muted-foreground mb-6">
                После русификации ваш автомобиль получит полноценный доступ ко всем современным сервисам и приложениям.
              </p>
              <ul className="space-y-4">
                {['Полностью русифицированный интерфейс', 'Быстрый 4G интернет', 'Обновления по воздуху', 'Техподдержка 24/7'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={24} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">Все приложения в одном месте</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Установим магазин приложений и настроим все популярные сервисы под ваши предпочтения.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['YouTube', 'Яндекс.Навигатор', 'Spotify', 'Кинопоиск', 'Яндекс.Музыка', 'ТВ каналы'].map((app, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                    <Icon name="CheckCircle" className="text-accent" size={20} />
                    <span className="font-medium">{app}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/5401aaf9-47ac-4761-8f76-e8a9b7f25d5b/files/a08a72c7-d030-4796-8995-6bb63e2fea89.jpg" 
                alt="Приложения" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Стоимость русификации</h2>
            <p className="text-xl text-gray-300">Прозрачные цены без скрытых платежей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardContent className="p-8">
                <h3 className="font-heading font-bold text-2xl mb-4">Базовая</h3>
                <div className="mb-6">
                  <span className="text-4xl font-heading font-bold">25 000</span>
                  <span className="text-xl text-gray-400"> ₽</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={20} />
                    <span>Русификация интерфейса</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={20} />
                    <span>Установка SIM-карты</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={20} />
                    <span>5 базовых приложений</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={20} />
                    <span>Гарантия 3 месяца</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="bg-accent border-accent text-white transform scale-105">
              <CardContent className="p-8">
                <div className="bg-white text-accent text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                  ПОПУЛЯРНО
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4">Стандартная</h3>
                <div className="mb-6">
                  <span className="text-4xl font-heading font-bold">35 000</span>
                  <span className="text-xl opacity-80"> ₽</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-white" size={20} />
                    <span>Всё из базовой</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-white" size={20} />
                    <span>Магазин приложений</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-white" size={20} />
                    <span>Все популярные приложения</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-white" size={20} />
                    <span>Настройка эквалайзера</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-white" size={20} />
                    <span>Гарантия 6 месяцев</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-accent hover:bg-gray-100">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardContent className="p-8">
                <h3 className="font-heading font-bold text-2xl mb-4">Премиум</h3>
                <div className="mb-6">
                  <span className="text-4xl font-heading font-bold">45 000</span>
                  <span className="text-xl text-gray-400"> ₽</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={20} />
                    <span>Всё из стандартной</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={20} />
                    <span>ТВ-каналы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={20} />
                    <span>Разделение экрана</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={20} />
                    <span>Приоритетная поддержка</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={20} />
                    <span>Гарантия 12 месяцев</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">Выбрать</Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-gray-400 mt-8">
            * Скидки для дилеров и импортёров — обсуждаются индивидуально
          </p>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Отзывы наших клиентов</h2>
            <p className="text-xl text-muted-foreground">Более 500 довольных владельцев Lynk & Co</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in bg-white border-none shadow-lg" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">Владелец Lynk & Co 900</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Часто задаваемые вопросы</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-secondary">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:text-accent">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">Обновления и поддержка</h2>
              <p className="text-xl text-gray-300 mb-8">
                Регулярные обновления программного обеспечения и круглосуточная техническая поддержка.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Download" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2">Обновления OTA</h3>
                    <p className="text-gray-400">Автоматические обновления по воздуху без визита в сервис</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Headphones" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2">Техподдержка 24/7</h3>
                    <p className="text-gray-400">Всегда на связи для решения любых вопросов</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2">Расширенная гарантия</h3>
                    <p className="text-gray-400">До 12 месяцев гарантии на все работы</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="font-heading font-bold text-2xl mb-6">Наша репутация</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Award" className="text-accent" size={32} />
                    <span className="text-4xl font-heading font-bold">5+</span>
                  </div>
                  <p className="text-gray-400">лет на рынке русификации</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Users" className="text-accent" size={32} />
                    <span className="text-4xl font-heading font-bold">500+</span>
                  </div>
                  <p className="text-gray-400">довольных клиентов</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="MapPin" className="text-accent" size={32} />
                    <span className="text-4xl font-heading font-bold">85</span>
                  </div>
                  <p className="text-gray-400">регионов России</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="ThumbsUp" className="text-accent" size={32} />
                    <span className="text-4xl font-heading font-bold">98%</span>
                  </div>
                  <p className="text-gray-400">положительных отзывов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Оставьте заявку</h2>
              <p className="text-xl text-muted-foreground">
                Мы свяжемся с вами в течение 15 минут и ответим на все вопросы
              </p>
            </div>
            <Card className="bg-white shadow-xl border-none">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      placeholder="+7 (999) 123-45-67" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение (необязательно)</label>
                    <Textarea 
                      placeholder="Расскажите о своих пожеланиях..." 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-accent hover:bg-accent/90 text-white font-semibold text-lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Car" className="text-accent" size={32} />
                <span className="font-heading font-bold text-xl">Lynk & Co 900</span>
              </div>
              <p className="text-gray-400">
                Профессиональная русификация автомобилей по всей России
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-accent transition-colors">Русификация</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Установка приложений</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Настройка интернета</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Техподдержка</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Гарантии</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Контакты</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="text-accent" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="text-accent" size={18} />
                  <span>info@lynkco-rus.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-accent" size={18} />
                  <span>Работаем по всей России</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lynk & Co 900 Русификация. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
