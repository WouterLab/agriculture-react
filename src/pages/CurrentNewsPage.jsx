import Layout from "../components/Layout";

const CurrentNewsPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center w-full md:w-2/3 mx-auto px-16'>
        <p className='text-4xl text-[#06C167] font-semibold mb-10 text-center'>
          Экспорт сельскохозяйственной продукции США вырос на 14% до рекордного
          уровня
        </p>
        <div>
          <img
            src='https://source.unsplash.com/random/200×200?agriculture'
            alt='agriculture-news'
            className='w-full max-w-[700px] max-h-[600px] object-contain mb-4 float-right ml-10 mt-4'
          />
          <p className='md:w-3/5 w-full text-xl mb-4 text-left'>
            Экспорт сельскохозяйственной продукции США вырос до рекордных
            $196,4 млрд в финансовом году, закончившемся 30 сентября, благодаря
            значительному увеличению продаж в большинстве категорий, согласно
            недавно опубликованным данным министерства торговли страны, 7 ноября
            сообщает новостной портал Agriculture. Продажи оказались на 14% выше
            предыдущей отметки в $172,7 млрд, установленной год назад — в 2021
            финансовом году. Китай, рынок № 1 для американской агропродукции
            США, купил сельхозтовары на рекордные $36,4 млрд, превысив свой
            рекорд 2021 года в $33,6 млрд, сообщил торговый аналитик Дилан
            Рассел. Канада заняла второе место с $28,3 млрд, а Мексика — третье
            место с $28 млрд. В 2021 финансовом году Канада импортировала $24,3
            млрд, а Мексика купила американские сельскохозяйственные товары на
            $23,9 млрд. На долю трех крупнейших клиентов приходилось 47 центов с
            каждого доллара продаж. Присоединяйтесь к обсуждению в
            Telegram-канале ИА Красная Весна о сельском хозяйстве Объем продаж
            соевых бобов — крупнейшей категории экспорта сельскохозяйственной
            продукции — вырос на 26%, до $33,3 млрд. Экспорт пшеницы увеличился
            на 15%, а кукурузы — на 12%. Объем продаж хлопка продемонстрировал
            самый большой рост в процентном отношении — 41%, до $9 млрд. Продажи
            молочных продуктов, красного мяса и этанола также значительно
            увеличились. При этом отмечается, что экспорт риса упал на 10%, а
            табака — на 27%. Импорт сельскохозяйственной продукции США также
            вырос, поднявшись на 19% — до $194 млрд. Здесь преобладают поставки
            фруктов, овощей, орехов, вина, пива, спиртных напитков,
            подсластителей и тропических продуктов, таких как кофе и какао.
          </p>
        </div>
        <div className='w-3/5 mb-8'></div>
      </div>
    </Layout>
  );
};

export default CurrentNewsPage;
