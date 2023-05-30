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
      title: "Календарь событий",
      icon: "",
      desc: "В этом разделе вы найдете полезную информацию о различных мероприятиях, связанных с агропромышленным комплексом. Мы собираем для вас актуальные данные о выставках, конференциях, семинарах, тренингах и других интересных событиях, которые проходят в отрасли.",
      link: "/calendary",
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
