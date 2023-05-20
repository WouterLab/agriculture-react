import { ServiceItem } from "./ServiceItem";

const HomeLinkBlock = () => {
  const data = [
    {
      id: 1,
      title: "Аналитика",
      icon: "",
      desc: "Аналитическая информация по ключевым показателям отраслей сельского хозяйства Московской области",
    },
    {
      id: 2,
      title: "Прогнозирование",
      icon: "",
      desc: "Получение экспертных оценок путем логического анализа прогнозной модели",
    },
    {
      id: 3,
      title: "Автоматизация бизнеса",
      icon: "",
      desc: "Делегирование рутинных процессов автоматическим инструментам",
    },
    {
      id: 4,
      title: "Дайджест",
      icon: "",
      desc: "Наиболее интересные материалы и новости в сфере агропромышленности",
    },
    {
      id: 5,
      title: "Дашборды",
      icon: "",
      desc: "Интерактивные информационные панели, визуализирующие данные",
    },
    {
      id: 6,
      title: "Новости",
      icon: "",
      desc: "Актуальные новости за сутки",
    },
  ];
  return (
    <div className='flex flex-wrap items-center justify-center gap-5'>
      {data.map((service) => (
        <ServiceItem
          key={service.id}
          title={service.title}
          icon={service.icon}
          desc={service.desc}
        />
      ))}
    </div>
  );
};

export { HomeLinkBlock };
