import ArticleBlock from "../components/ArticleBlock";
import Layout from "../components/Layout";

const ArticlesPage = () => {
  const articles = [
    {
      id: 0,
      title: "Длииииииииииииииииинный заголовок статьи",
      img: "https://source.unsplash.com/random/200×200?трактор",
    },
    {
      id: 2,
      title: "Заголовок статьи",
      img: "https://source.unsplash.com/random/200×200?овощи",
    },
    {
      id: 3,
      title: "Заголовок статьи",
      img: "https://source.unsplash.com/random/200×200?vegetable",
    },
    {
      id: 4,
      title:
        "Сууууупер длиииииииииинный заголовок статьи, да да да да и ещё раз да",
      img: "https://source.unsplash.com/random/200×200?fruits",
    },
    {
      id: 5,
      title: "Заголовок статьи",
      img: "https://source.unsplash.com/random/200×200?apple",
    },
    {
      id: 6,
      title: "Длиииии (мяу мяу мяу) ииинный заголовок статьи",
      img: "https://source.unsplash.com/random/200×200?chicken",
    },
    {
      id: 7,
      title: "Заголовок статьи",
      img: "https://source.unsplash.com/random/200×200?birds",
    },
    {
      id: 8,
      title: "Заголовок статьи",
      img: "https://source.unsplash.com/random/200×200?farm",
    },
  ];
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <h1 className='text-[#06C167] text-6xl font-bold mb-4'>СТАТЬИ</h1>
        <p className='w-3/5 text-center text-xl mb-4'>
          Журналисты Agroprom.com путешествуют по фермам, отраслевым мероприятиям и конференциям.
          Прочтите статьи, чтобы узнать, как редакторы освещают свои вопросы,
          чтобы предоставить вам лучшую информацию об агрономии, технологиях,
          машинах, рынках и многом другом.
        </p>
        <div className='flex w-5/6 flex-wrap justify-center gap-5 mb-8'>
          {articles.map((article) => (
            <ArticleBlock
              key={article.id}
              img={article.img}
              title={article.title}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ArticlesPage;
