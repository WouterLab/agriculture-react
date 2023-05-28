import { Link } from "react-router-dom";
import { CityFilter } from "../components/CityFilter";
import { CoopBlock } from "../components/CoopBlock";
import { Layout } from "../shared/Layout";
import { PageTitle } from "../components/PageTitle";
import { Input } from "../shared/Input";
import { useEffect, useState } from "react";

const persons = [
  {
    id: 0,
    title: "Фермерство и уход за плантациями",
    desc: "Международная компания Grand Flowers Group является поставщиком свежесрезанных цветов от ведущих плантаций со всего мира. О нас За долгие годы мы заработали себе безупречную репутацию, выстроили дружеские отношения с рядом цветочных плантаций в Эквадоре, Кении, Колумбии, Голландии. Мы осуществляем доставку цветов по всей России, а так же в страны СНГ. В связи с расширением отдела продаж и увеличением объемов в нашу команду требуется менеджер по продажам. Сейчас мы в поисках заряженного энергией, целеустремленного менеджера, который не любит менять работу, любит продажи, любит общаться с клиентами , хочет расти, развиваться и зарабатывать хорошие деньги! Мы бы хотели, чтобы кандидат: имел опыт работы в продажах от 1 года; обладал высоким уровнем коммуникативных навыков; умел работать с большим объемом информации; знал техники продаж и умел их использовать на практике хотел расти и развиваться в рамках компании; стремился много зарабатывать вместе с нам был самостоятельным и любую незнакомую информацию мог найти сам энергичного, видящего во всех событиях позитив и опыт для себя был ответственнен за свой результат , а не лиды плохие, дождь на улице, поэтому план не выполнен/ я не поехал на встречу был инициативным: просил сам лиды, если не хватает, а не ждал когда руководитель спросит где план? Что входит в обязанности менеджера по продажам: работа с входящим потоком заявок с разных рекламных источников исходящие звонки по готовой базе ведение своей клиентской базы расширение ассортимента клиентов встречи с клиентами по тому региону, где ты проживаешь Что мы готовы дать взамен: свободу в выборе места работы: нам не важно откуда ты будешь проводить свой рабочий день свободу в приняти решения по клиенту: мы не работаем со всеми клиентами свободу в ЗП: уровень ЗП полностью зависит от твоего тебя обучение: продажам, личностному росту, развитию профессиональных навыков, карьерный рост отсутствие бюрократии: молодой и дружный коллектив (средний возраст сотрудников - 30 лет), все согласования проходят быстро стремительный карьерный рост график работы 5/2 , с 9.00-18.00 оформление по ТК после испытательного срока Если ты хочешь и у нас работать и дочитал описание вакансии до конца, напиши в сопроводительном письме Я готов пройти дополнительные этапы отбора. Так мы поймем, что Вы действительно дисциплинированный и внимательный человек.",
  },
  {
    id: 2,
    title: "Поставщик молочной продукции",
    desc: 'Лидер на рынке Северо-Запада РФ по производству и продаже молочных сливок жирностью 10-22-33-34-36% тм "Точка Роста", а так же Творожного сыра тм "Точка Роста". Специализируемся по поставкам в B2B компании.В постоянном поиске дистрибьюторов в регионах страны',
  },
  {
    id: 3,
    title: "Поставщик кукурузы",
    desc: "Уже более 20 лет KTRACO специализируется на продаже свежих и сушеных фруктов и овощей как для производителей, так и для дистрибьюторов. Компания обладает профессиональными знаниями видов сельхозпродукции и предлагает широкий ассортимент качественных товаров. Всегда только свежие и качественные фрукты и овощи. На платформе онлайн-продаж KTRACO вы найдете ежедневно обновляемый широкий ассортимент всегда свежих продуктов. Будем рады предоставить дополнительную информацию!",
  },
  {
    id: 4,
    title: "Продуктовый менеджер",
    desc: 'Работа с китайскими поставщиками - производителями и импортёрами, поиск новых поставщиков и организация закупок. Преимущественно через "Алибаба" и аналогичные площадки. Разработка нового продукта в команде с дизайнерами и производством. Поиск новых продуктов по имеющейся методологии, поиск поставщиков Изготовление инструкций на русском языке. Сертификация. Организация разработки дизайна упаковок рендинг. Общение с поставщиками по разработке новых продуктов и улучшению имеющихся. Предполагается обучение по ходу работы и быстрый профессиональный рост',
  },
  {
    id: 5,
    title: "Вакансия для сотрудничества",
    desc: "Команда Nicton – это ведущая российская научно-производственная компания, сосредоточившая свои интересы в области альтернативного использования никотина. Мы разрабатываем новые продукты в области фармакологии, БАД и пищевых компонентов, сельского хозяйства и альтернативного потребления никотина. Штаб-квартира Nicton находится в Москве, дистрибьютерская сеть расположена в Западной Европе и на других континентах. Масштабный исследовательский центр и производство мы развиваем в особой экономической зоне «Узловая», созданной при поддержке правительства Тульской области.",
  },
];

const CoopPage = () => {
  const [searchPerson, setSearchPerson] = useState("");
  const [viewPerson, setViewPerson] = useState(persons);

  useEffect(() => {
    setViewPerson(
      persons.filter(
        (vacancy) =>
          vacancy.title.toLowerCase().indexOf(searchPerson.toLowerCase()) >= 0,
      ),
    );
  }, [searchPerson]);

  return (
    <Layout>
      <div className='flex flex-col items-center px-2 sm:px-16'>
        <div className='flex flex-col md:flex-row items-center space-x-4 mb-8'>
          <Link to='/vacancy'>
            <h2 className='text-4xl font-bold text-neutral-500 underline'>
              ВАКАНСИИ
            </h2>
          </Link>
          <PageTitle title='СОТРУДНИЧЕСТВО' />
        </div>
        <div className='flex flex-col md:flex-row justify-center w-full gap-10'>
          <aside>
            <Input
              type='text'
              placeholder='Поиск...'
              value={searchPerson}
              onChange={(e) => setSearchPerson(e.target.value)}
            />
            <div className='border rounded-md px-2 py-4 mb-10'>
              <p className='text-2xl font-bold'>Фильтры</p>
              <CityFilter />
            </div>
          </aside>
          <div className='w-full md:w-3/5'>
            {viewPerson.map((person) => (
              <CoopBlock
                key={person.id}
                title={person.title}
                desc={person.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { CoopPage };
