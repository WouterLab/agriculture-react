import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CityFilter } from "../components/CityFilter";
import { Layout } from "../components/Layout";
import { PageTitle } from "../components/PageTitle";
import { SalaryFilter } from "../components/SalaryFilter";
import { ScheduleFilter } from "../components/ScheduleFilter";
import { VacancyBlock } from "../components/VacancyBlock";
import { Input } from "../ui/Input";

const vacancies = [
  {
    id: 0,
    title: "Управляющий агрокомплексом",
    desc: "Высшее образование. Высокий уровень организаторских способностей и стратегическое мышление. Навыки взаимодействия с госструктурами. Опыт организации хозяйственной деятельности предприятия.",
  },
  {
    id: 2,
    title: "Региональный менеджер по продажам (Москва)",
    desc: "Разрабатывать и осуществлять Стратегию развития региона. Обеспечивать высокую степень прогноза продаж не менее чем на 6 месяцев по SKU. Опыт работы в построении и развития продаж от 3 лет. Опыт работы в крупных компаниях – производителей федерального уровня.",
  },
  {
    id: 3,
    title: "Менеджер по технологии выращивания зеленных культур / Агроном",
    desc: "Осуществление всех технологических процессов для выполнения производственной программы по зеленным культурам. Контроль соблюдения работниками производственной и трудовой дисциплины. Отчетность.",
  },
  {
    id: 4,
    title: "Ветеринарный врач/менеджер/релокация",
    desc: "Повышение эффективности по содержанию и движению поголовья, осеменению, опоросу, отъему свиноматок, откорму. Оптимизация кормления для скорейшего снижения показателей конверсии корма",
  },
  {
    id: 5,
    title: "Менеджер по экспорту",
    desc: "Аналогичный опыт работы будет вашим преимуществом. Высокие коммуникативные навыки, ориентация на результат, способность работать в режиме многозадачности.",
  },
];

const VacancyPage = () => {
  const [salaryFilter, setSalaryFilter] = useState("none");
  const [scheduleFilter, setScheduleFilter] = useState("full");
  const [searchVacancy, setSearchVacancy] = useState("");
  const [viewVacancy, setViewVacancy] = useState(vacancies);

  useEffect(() => {
    setViewVacancy(
      vacancies.filter(
        (vacancy) =>
          vacancy.title.toLowerCase().indexOf(searchVacancy.toLowerCase()) >= 0,
      ),
    );
  }, [searchVacancy]);

  return (
    <Layout>
      <div className='flex flex-col items-center px-2 sm:px-16'>
        <div className='flex flex-col md:flex-row items-center space-x-4 mb-8'>
          <PageTitle title='ВАКАНСИИ' />
          <Link to='/coop'>
            <h2 className='text-4xl font-bold text-neutral-500 underline'>
              СОТРУДНИЧЕСТВО
            </h2>
          </Link>
        </div>
        <div className='flex flex-col md:flex-row justify-center w-full gap-10'>
          <aside>
            <Input
              type='text'
              placeholder='Поиск...'
              value={searchVacancy}
              onChange={(e) => setSearchVacancy(e.target.value)}
            />
            <div className='border rounded-md px-2 py-4 w-full md:w-max mb-10'>
              <p className='text-2xl font-bold'>Фильтры</p>
              <CityFilter />
              <SalaryFilter
                salaryFilter={salaryFilter}
                setSalaryFilter={setSalaryFilter}
              />
              <ScheduleFilter
                scheduleFilter={scheduleFilter}
                setScheduleFilter={setScheduleFilter}
              />
            </div>
          </aside>
          <div className='w-full md:w-3/5'>
            {viewVacancy.map((person) => (
              <VacancyBlock
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

export { VacancyPage };
