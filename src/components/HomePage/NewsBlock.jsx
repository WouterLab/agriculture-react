import NewsItem from "./NewsItem";

const HomeNewsBlock = () => {
  const data = [
    {
      id: 1,
      title:
        "Выставка «Золотая осень — 2022» представляет главные достижения российского АПК",
      date: new Date()
        .toLocaleString("en-GB", { timeZone: "UTC" })
        .split(",")[0],
    },
    {
      id: 2,
      title:
        "Больше фермеров сажают покровные культуры для повышения урожайности и здоровья почвы",
      date: new Date()
        .toLocaleString("en-GB", { timeZone: "UTC" })
        .split(",")[0],
    },
    {
      id: 3,
      title:
        "Экономический эффект от использования искусственного интеллекта в АПК достигает десятков процентов",
      date: new Date()
        .toLocaleString("en-GB", { timeZone: "UTC" })
        .split(",")[0],
    },
  ];
  return (
    <div>
      <h2 className='font-bold uppercase text-[#06C167] text-xl'>
        Новости рынка
      </h2>
      <div className='w-full'>
        {data.map((news) => (
          <>
            <NewsItem key={news.id} news={news} />
            <hr className='w-full mb-2' />
          </>
        ))}
      </div>
    </div>
  );
};

export default HomeNewsBlock;
