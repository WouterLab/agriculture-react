import { ArticleBlock } from "../components/ArticleBlock";
import { Layout } from "../components/Layout";
import { PageTitle } from "../components/PageTitle";

const ArticlesPage = () => {
  const articles = [
    {
      id: 0,
      title:
        "Кабмин намерен к 2030 году на 50% обеспечить аграриев РФ посадочным картофелем отечественной селекции",
      img: "https://images.unsplash.com/photo-1628971838728-55034615a067?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      title: "За 2022 год в России собрали рекордный урожай зерна",
      img: "https://images.unsplash.com/photo-1532011310047-fe7324590430?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 3,
      title: "ФАС: Объем торгов фьючерсами на пшеницу превысил 100 млн рублей",
      img: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 4,
      title:
        'Федеральный закон от 19 декабря 2022 г. N 539-ФЗ "О внесении изменений в Федеральный закон "О мелиорации земель" и Водный кодекс Российской Федерации"',
      img: "https://plus.unsplash.com/premium_photo-1674755195496-fdfa32272a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
    },
    {
      id: 5,
      title:
        "Основные итоги сельскохозяйственной микропереписи 2021 года (на 1 августа 2021 г.)",
      img: "https://plus.unsplash.com/premium_photo-1674562179842-31fc8229aa7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 6,
      title: "Личных подсобных хозяйств в России стало меньше на треть",
      img: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 7,
      title:
        "Рослесхоз запустил пилотный проект по контролю лесовозов искусственным интеллектом",
      img: "https://images.unsplash.com/photo-1548509925-0e7aa59c6bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
    {
      id: 8,
      title:
        "Главы трех регионов РФ предложили ограничить долю иностранцев на зерновом рынке",
      img: "https://plus.unsplash.com/premium_photo-1666777246850-e18916172de7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 9,
      title: "Завершено дело о крупном мошенничестве в агропроме",
      img: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 10,
      title: "На ферме в Кировской области животные погибли от голода и жажды",
      img: "https://images.unsplash.com/photo-1657477082166-b13eb565ebf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 11,
      title: "Что ждет Россию после рекордного урожая",
      img: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 12,
      title: "В России оценили риски дефицита мандаринов к Новому году",
      img: "https://images.unsplash.com/photo-1589731234361-36258f083832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=658&q=80",
    },
  ];
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <PageTitle title='СТАТЬИ' />
        <p className='w-3/5 text-center text-xl mb-12'>
          Журналисты Agriculture.ru путешествуют по фермам, отраслевым
          мероприятиям и конференциям. Прочтите статьи, чтобы узнать, как
          редакторы освещают свои вопросы, чтобы предоставить вам лучшую
          информацию об агрономии, технологиях, машинах, рынках и многом другом.
        </p>
        <div className='flex w-5/6 flex-wrap justify-center gap-7 mb-8'>
          {articles.map((article) => (
            <ArticleBlock
              key={article.id}
              id={article.id}
              img={article.img}
              title={article.title}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export { ArticlesPage };
