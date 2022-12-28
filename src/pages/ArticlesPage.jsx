import ArticleBlock from "../components/ArticleBlock";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

const ArticlesPage = () => {
  const articles = [
    {
      id: 0,
      title:
        "Кабмин намерен к 2030 году на 50% обеспечить аграриев РФ посадочным картофелем отечественной селекции",
      img: "https://source.unsplash.com/random/200×200?трактор",
    },
    {
      id: 2,
      title: "За 2022 год в России собрали рекордный урожай зерна",
      img: "https://source.unsplash.com/random/200×200?овощи",
    },
    {
      id: 3,
      title: "ФАС: Объем торгов фьючерсами на пшеницу превысил 100 млн рублей",
      img: "https://source.unsplash.com/random/200×200?vegetable",
    },
    {
      id: 4,
      title:
        'Федеральный закон от 19 декабря 2022 г. N 539-ФЗ "О внесении изменений в Федеральный закон "О мелиорации земель" и Водный кодекс Российской Федерации"',
      img: "https://source.unsplash.com/random/200×200?fruits",
    },
    {
      id: 5,
      title:
        "Основные итоги сельскохозяйственной микропереписи 2021 года (на 1 августа 2021 г.)",
      img: "https://source.unsplash.com/random/200×200?apple",
    },
    {
      id: 6,
      title: "Личных подсобных хозяйств в России стало меньше на треть",
      img: "https://source.unsplash.com/random/200×200?chicken",
    },
    {
      id: 7,
      title:
        "Рослесхоз запустил пилотный проект по контролю лесовозов искусственным интеллектом",
      img: "https://source.unsplash.com/random/200×200?birds",
    },
    {
      id: 8,
      title:
        "Главы трех регионов РФ предложили ограничить долю иностранцев на зерновом рынке",
      img: "https://source.unsplash.com/random/200×200?farm",
    },
    {
      id: 9,
      title: "Завершено дело о крупном мошенничестве в агропроме",
      img: "https://source.unsplash.com/random/200×200?agriculture",
    },
    {
      id: 10,
      title: "На ферме в Кировской области животные погибли от голода и жажды",
      img: "https://source.unsplash.com/random/200×200?культура",
    },
    {
      id: 11,
      title: "Что ждет Россию после рекордного урожая",
      img: "https://source.unsplash.com/random/200×200?ферма",
    },
    {
      id: 12,
      title: "В России оценили риски дефицита мандаринов к Новому году",
      img: "https://source.unsplash.com/random/200×200?птицы",
    },
  ];
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <PageTitle title='СТАТЬИ' />
        <p className='w-3/5 text-center text-xl mb-4'>
          Журналисты Agriculture.ru путешествуют по фермам, отраслевым
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
