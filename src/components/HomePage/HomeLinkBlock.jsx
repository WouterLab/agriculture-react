import { ServiceItem } from "./ServiceItem";

const HomeLinkBlock = () => {
  const data = [
    {
      id: 1,
      title: "Аналитика",
      icon: "",
      desc: "Аналитическая информация по ключевым показателям отраслей сельского хозяйства Московской области и регионов",
      link: "/analytics",
    },
    {
      id: 2,
      title: "Новости",
      icon: "",
      desc: "Самая актуальная информация о состоянии АПК России. Последние новости сельского хозяйства. Аграрный рынок. Обзоры и аналитика",
      link: "/news",
    },
    {
      id: 3,
      title: "Дайджест",
      icon: "",
      desc: "Наиболее интересные материалы в сфере агропромышленности. Краткие обзоры, аннотации и основные положения самых интересных публикаций за ближайший период",
      link: "/articles",
    },
  ];
  return (
    <div className='flex flex-wrap items-center justify-center gap-2'>
      {data.map((service) => (
        <ServiceItem
          key={service.id}
          title={service.title}
          icon={service.icon}
          desc={service.desc}
          link={service.link}
        />
      ))}
    </div>
  );
};

export { HomeLinkBlock };
