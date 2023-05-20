import { Layout } from "../components/Layout";
import { NewsCard } from "../components/NewsPage/NewsCard";
import { PageTitle } from "../components/PageTitle";
import { Button } from "../ui/Button";

const NewsPage = () => {
  const news = [
    {
      id: 0,
      title:
        "Экспорт сельскохозяйственной продукции США вырос на 14% до рекордного уровня",
      desc: "Благодаря значительному увеличению продаж в большинстве категорий экспорт сельскохозяйственной продукции США вырос до рекордных 196,4 млрд долларов в финансовом году, закончившемся 30 сентября.",
      img: "https://static.agriculture.com/styles/landscape___category_listing___large/s3/image/2022/11/03/transport_grain.jpg?timestamp=1667511830",
    },
    {
      id: 1,
      title: "3 больших события сегодня, 7 ноября 2022 г.",
      desc: "Фьючерсы на пшеницу, фьючерсы на кукурузу и фьючерсы на сою были ниже во время ночных торгов.",
      img: "https://static.agriculture.com/styles/landscape___category_listing___large/s3/s3fs-public/image/2016/03/28/WheatField-CloseUp.jpg?timestamp=1550617770",
    },
    {
      id: 2,
      title:
        "Потери от птичьего гриппа близки к рекорду США из-за вспышки на яичной ферме в Айове",
      desc: "Птичий грипп привел к рекордным потерям, став крупнейшей чрезвычайной ситуацией в области охраны здоровья животных в США, вызвавшей рост цен на яйца и сокращение поставок праздничной индейки.",
      img: "https://static.agriculture.com/styles/landscape___category_listing___large/s3/image/2022/11/04/IMG_2038.jpg?timestamp=1667569539",
    },
    {
      id: 3,
      title:
        "Секретные субсидии: Программа, призванная помочь фермерам в торговой войне, была перерасходована, ей не хватало прозрачности",
      desc: "Программа помощи от торговой войны эпохи Трампа с Китаем потратила беспрецедентные суммы денег, обошла одобрение Конгресса и не имела проверок, чтобы гарантировать, что платежи поступят фермерам, имеющим на это право.",
      img: "https://static.agriculture.com/styles/landscape___category_listing___large/s3/s3fs-public/image/2016/03/28/Soybeans-WormsEye_0.jpg?timestamp=1618939535",
    },
    {
      id: 4,
      title:
        "Как фермеры из Миннесоты, связанные с Global Processing Inc., могут подавать претензии",
      desc: "Предприятие в Хоупе, штат Миннесота, держало облигацию на сумму 50 000 долларов США с Министерством сельского хозяйства Миннесоты, чтобы помочь продавцам зерна и вкладчикам уменьшить любые убытки. Фермеры должны подать заявку как можно скорее.",
      img: "https://static.agriculture.com/styles/landscape___category_listing___large/s3/s3fs-public/image/2018/05/23/Untreated-Soybeans.jpg?timestamp=1550620328",
    },
  ];
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <PageTitle title='НОВОСТИ' />
        <p className='w-3/5 text-center text-xl mb-12'>
          В этом разделе вы найдете последние новости в области сельского
          хозяйства, в том числе новости о сельскохозяйственной политике,
          бизнесе, машинах и технологиях. В этом разделе также освещаются
          новости об урожае кукурузы, сои и пшеницы, а также новости о
          животноводстве по крупному рогатому скоту, парнокопытному скоту и
          птице.
        </p>
        <div className='w-3/5 mb-8'>
          {news.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              desc={news.desc}
              src={news.img}
            />
          ))}
        </div>
        <Button className='mb-10'>Загрузить ещё</Button>
      </div>
    </Layout>
  );
};

export { NewsPage };
