import ArticleBlock from "../components/ArticleBlock";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

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
      title: "Длиииииииинный заголовок статьи (мяу мяу мяу) ",
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
    {
      id: 9,
      title: "Заголовок статьи",
      img: "https://source.unsplash.com/random/200×200?agriculture",
    },
    {
      id: 10,
      title: "Заголовок статьи",
      img: "https://source.unsplash.com/random/200×200?культура",
    },
    {
      id: 11,
      title: "Заголовок статьи",
      img: "https://source.unsplash.com/random/200×200?ферма",
    },
    {
      id: 12,
      title: "Заголовок статьи",
      img: "https://source.unsplash.com/random/200×200?птицы",
    },
  ];
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <PageTitle title='СТАТЬИ' />
        <p className='w-3/5 text-center text-xl mb-4'>
          Журналисты Agroprom.com путешествуют по фермам, отраслевым
          мероприятиям и конференциям. Прочтите статьи, чтобы узнать, как
          редакторы освещают свои вопросы, чтобы предоставить вам лучшую
          информацию об агрономии, технологиях, машинах, рынках и многом другом.
        </p>
        <div className='flex w-5/6 flex-wrap justify-center gap-7 mb-8'>
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
