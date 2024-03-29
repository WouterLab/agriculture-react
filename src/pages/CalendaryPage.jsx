import { Layout } from "../shared/Layout";
import { PageTitle } from "../components/PageTitle";
import { CalendaryDay } from "../components/CalendaryDay";

const events = [
  {
    id: 1,
    day: 1,
    event: "Фестиваль сыров",
    region: "Москва",
  },
  {
    id: 2,
    day: 2,
    event: "Выставка молочных экспонатов",
    region: "Красноярск",
  },
  {
    id: 3,
    day: 3,
    event: "Семинар по современным методам полива",
    region: "Санкт-Петербург",
  },
  {
    id: 4,
    day: 4,
    event: "Конференция о новых тенденциях в сельском хозяйстве",
    region: "Екатеринбург",
  },
  {
    id: 5,
    day: 5,
    event: "Фермерский рынок",
    region: "Казань",
  },
  {
    id: 6,
    day: 6,
    event: "Соревнования по рыбной ловле",
    region: "Новосибирск",
  },
  {
    id: 7,
    day: 7,
    event: "Семинар о вредителях растений и способах их борьбы",
    region: "Ростов-на-Дону",
  },
  {
    id: 8,
    day: 8,
    event: "Встреча с экспертом по селекции овощей",
    region: "Москва",
  },
  {
    id: 9,
    day: 9,
    event: "Конкурс лучшего садовода",
    region: "Красноярск",
  },
  {
    id: 10,
    day: 10,
    event: "Сельскохозяйственная ярмарка",
    region: "Санкт-Петербург",
  },
  {
    id: 11,
    day: 11,
    event: "Конференция о применении инновационных технологий в животноводстве",
    region: "Екатеринбург",
  },
  {
    id: 12,
    day: 12,
    event: "Фестиваль винограда и виноделия",
    region: "Казань",
  },
  {
    id: 13,
    day: 13,
    event: "Семинар по органическому земледелию",
    region: "Новосибирск",
  },
  {
    id: 14,
    day: 14,
    event: "Выставка сельскохозяйственной техники",
    region: "Ростов-на-Дону",
  },
  {
    id: 15,
    day: 15,
    event: "Соревнования по скоростному пахотному делу",
    region: "Москва",
  },
  {
    id: 16,
    day: 16,
    event: "Семинар о пчеловодстве",
    region: "Красноярск",
  },
  {
    id: 17,
    day: 17,
    event: "Выставка сельскохозяйственных продуктов",
    region: "Санкт-Петербург",
  },
  {
    id: 18,
    day: 18,
    event: "Форум по развитию сельского туризма",
    region: "Екатеринбург",
  },
  {
    id: 19,
    day: 19,
    event: "Конференция о водохозяйственном хозяйстве",
    region: "Казань",
  },
  {
    id: 20,
    day: 20,
    event: "Фестиваль овощей и фруктов",
    region: "Новосибирск",
  },
  {
    id: 21,
    day: 21,
    event: "Семинар по эффективному пастбищному хозяйству",
    region: "Ростов-на-Дону",
  },
  {
    id: 22,
    day: 22,
    event: "Выставка сельскохозяйственной агротехники",
    region: "Москва",
  },
  {
    id: 23,
    day: 23,
    event: "Семинар о новых сортах зерновых культур",
    region: "Красноярск",
  },
  {
    id: 24,
    day: 24,
    event: "Конференция о развитии экологического земледелия",
    region: "Санкт-Петербург",
  },
  {
    id: 25,
    day: 25,
    event: "Фестиваль меда",
    region: "Екатеринбург",
  },
  {
    id: 26,
    day: 26,
    event: "Соревнования по оценке качества мяса",
    region: "Казань",
  },
  {
    id: 27,
    day: 27,
    event: "Семинар о биологической защите растений",
    region: "Новосибирск",
  },
  {
    id: 28,
    day: 28,
    event: "Выставка семеноводческой продукции",
    region: "Ростов-на-Дону",
  },
  {
    id: 29,
    day: 29,
    event: "Конференция о перспективных направлениях развития птицеводства",
    region: "Москва",
  },
  {
    id: 30,
    day: 30,
    event: "Фермерский рынок",
    region: "Красноярск",
  },
];

const CalendaryPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <PageTitle title='КАЛЕНДАРЬ' />
        <p className='w-4/5 sm:w-2/5 text-center text-xl mb-12'>
          Календарь событий позволяет вам удобно планировать свое участие и
          выбирать интересующие вас мероприятия. Вы можете получить
          дополнительные сведения о каждом событии, такие как дата, город
          проведения, и название мероприятия. Будьте в курсе предстоящих
          событий, чтобы не упустить возможность принять участие в важных
          событиях агропромышленной отрасли.
        </p>
        <p className='text-xl md:text-5xl mb-10'>
          События и мероприятия в{" "}
          <span className='text-green-400 font-bold'>Июне</span>
        </p>
        <div className='w-5/6 mb-8 flex flex-wrap'>
          {events.map((event) => (
            <CalendaryDay
              key={event.id}
              id={event.id}
              day={event.day}
              event={event.event}
              region={event.region}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export { CalendaryPage };
