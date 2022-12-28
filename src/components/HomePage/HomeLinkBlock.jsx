import ServiceItem from "./ServiceItem";

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
      desc: "Аналитическая информация по ключевым показателям отраслей сельского хозяйства Московской области",
    },
    {
      id: 3,
      title: "Автоматизация бизнеса",
      icon: "",
      desc: "Аналитическая информация по ключевым показателям отраслей сельского хозяйства Московской области",
    },
    {
      id: 4,
      title: "Дайджест",
      icon: "",
      desc: "Аналитическая информация по ключевым показателям отраслей сельского хозяйства Московской области",
    },
    {
      id: 5,
      title: "Информация",
      icon: "",
      desc: "Аналитическая информация по ключевым показателям отраслей сельского хозяйства Московской области",
    },
    {
      id: 6,
      title: "Новости",
      icon: "",
      desc: "Аналитическая информация по ключевым показателям отраслей сельского хозяйства Московской области",
    },
  ];
  return (
    <div className='flex flex-wrap'>
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

export default HomeLinkBlock;