import NewsItem from "./NewsItem";

const NewsBlock = () => {
  const data = [
    {
      id: 0,
      title:
        "Выставка «Золотая осень — 2022» представляет главные достижения российского АПК",
      date: new Date()
        .toLocaleString("en-GB", { timeZone: "UTC" })
        .split(",")[0],
    },
    {
      id: 1,
      title:
        "Больше фермеров сажают покровные культуры для повышения урожайности и здоровья почвы",
      date: new Date()
        .toLocaleString("en-GB", { timeZone: "UTC" })
        .split(",")[0],
    },
    {
      id: 2,
      title:
        "Экономический эффект от использования искусственного интеллекта в АПК достигает десятков процентов",
      date: new Date()
        .toLocaleString("en-GB", { timeZone: "UTC" })
        .split(",")[0],
    },
  ];
  return (
    <div>
      <h2 className='font-bold uppercase text-green-500 text-xl mb-4'>
        Новости рынка
      </h2>
      <div className='w-full'>
        {data.map((news) => (
          <div key={news.id}>
            <NewsItem news={news} />
            <hr className='w-full mb-2' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBlock;
