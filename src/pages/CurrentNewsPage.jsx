import { Layout } from "../shared/Layout";
import NewsImage from "../assets/agriculture-news.jpeg";
import { Button } from "../shared/Button";
import { useNavigate } from "react-router-dom";

const CurrentNewsPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className='flex flex-col items-center w-full md:w-2/3 mx-auto px-8'>
        <p className='text-4xl text-[#06C167] font-semibold mb-10 text-center'>
          Экспорт сельскохозяйственной продукции России и Московской области
          продолжает демонстрировать устойчивый рост
        </p>
        <div>
          <img
            src={NewsImage}
            alt='agriculture-news'
            className='w-full max-w-[700px] max-h-[600px] object-contain mb-4 float-right ml-10 mt-4 rounded-lg'
          />
          <p className='w-full text-xl mb-4 text-left'>
            Экспорт сельскохозяйственной продукции России и Московской области
            продолжает демонстрировать устойчивый рост, благодаря развитию
            сельскохозяйственного сектора и усилиям фермеров и производителей.
            Согласно последним данным, объем экспорта сельскохозяйственных
            товаров из Московской области достиг рекордного уровня в финансовом
            году, закончившемся недавно. Продажи выросли на 12%, достигнув
            отметки в $8,5 млрд, что является значительным улучшением по
            сравнению с предыдущим годом.
            <br />
            <br />
            Ключевыми рынками для экспорта сельскохозяйственной продукции
            Московской области остаются Москва и другие регионы России.
            Московская область активно сотрудничает с государственными и
            частными партнерами, чтобы расширить географию экспорта и
            диверсифицировать продуктовый ассортимент. Крупные торговые сделки
            были заключены с Москвой, Санкт-Петербургом, Краснодарским краем и
            другими регионами, что способствовало увеличению объема экспорта.
            <br />
            <br />
            Одной из основных категорий экспорта являются зерновые культуры,
            включая пшеницу, ячмень, кукурузу и рис. Продажи зерновых культур в
            Московской области выросли на 18%, достигнув отметки в $2,3 млрд.
            Важно отметить, что экологически чистые и качественные зерновые
            продукты из Московской области пользуются высоким спросом на
            международном рынке.
            <br />
            <br />
            Кроме того, Московская область активно развивает производство
            овощей, фруктов и молочных продуктов, которые также востребованы на
            экспортных рынках. За последние несколько лет объем экспорта овощей
            и фруктов из региона увеличился на 15%, достигнув отметки в $1,8
            млрд. Качество и свежесть московских овощей и фруктов получили
            признание как на внутреннем, так и на международном уровне.
            <br />
            <br />
            Одним из ключевых партнеров Московской области является Москва,
            которая является крупным потребителем сельскохозяйственной
            продукции. Московский рынок оценивается в $3,5 млрд и предоставляет
            значительные возможности для местных производителей. Фермеры и
            агрофирмы Московской области активно сотрудничают с московскими
            торговыми сетями и ресторанами, предлагая широкий ассортимент
            качественной и свежей продукции.
          </p>
        </div>
        <Button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            navigate("/news");
          }}
        >
          Назад
        </Button>
      </div>
    </Layout>
  );
};

export { CurrentNewsPage };
