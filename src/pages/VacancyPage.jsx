import { useEffect, useState } from "react";
import { CityFilter } from "../components/CityFilter";
import { Layout } from "../shared/Layout";
import { PageTitle } from "../components/PageTitle";
import { SalaryFilter } from "../components/SalaryFilter";
import { ScheduleFilter } from "../components/ScheduleFilter";
import { VacancyBlock } from "../components/VacancyBlock";
import { Input } from "../shared/Input";

const vacancies = [
  {
    id: 0,
    title: "Управляющий агрокомплексом",
    desc: "Высшее образование. Высокий уровень организаторских способностей и стратегическое мышление. Навыки взаимодействия с госструктурами. Опыт организации хозяйственной деятельности предприятия.",
    region: "msk",
    salary: "75",
    schedule: "full",
  },
  {
    id: 1,
    title: "Менеджер по экспорту продукции",
    desc: "Высокие коммуникативные навыки, ориентация на результат, способность работать в режиме многозадачности.",
    region: "spb",
    salary: "50",
    schedule: "remote",
  },
  {
    id: 2,
    title: "Региональный менеджер по продажам (Москва)",
    desc: "Разрабатывать и осуществлять Стратегию развития региона. Обеспечивать высокую степень прогноза продаж не менее чем на 6 месяцев по SKU. Опыт работы в построении и развития продаж от 3 лет. Опыт работы в крупных компаниях – производителей федерального уровня.",
    region: "krasnodar",
    salary: "30",
    schedule: "flex",
  },
  {
    id: 3,
    title: "Менеджер по технологии выращивания зеленных культур / Агроном",
    desc: "Осуществление всех технологических процессов для выполнения производственной программы по зеленным культурам. Контроль соблюдения работниками производственной и трудовой дисциплины. Отчетность.",
    region: "altai",
    salary: "50",
    schedule: "flex",
  },
  {
    id: 4,
    title: "Ветеринарный врач/менеджер/релокация",
    desc: "Повышение эффективности по содержанию и движению поголовья, осеменению, опоросу, отъему свиноматок, откорму. Оптимизация кормления для скорейшего снижения показателей конверсии корма",
    region: "krasnoyarsk",
    salary: "50",
    schedule: "change",
  },
  {
    id: 5,
    title: "Менеджер по экспорту",
    desc: "Аналогичный опыт работы будет вашим преимуществом. Высокие коммуникативные навыки, ориентация на результат, способность работать в режиме многозадачности.",
    region: "tatarstan",
    salary: "75",
    schedule: "full",
  },
  {
    id: 6,
    title: "Управляющий агрокомплексом",
    desc: "Высшее образование. Высокий уровень организаторских способностей и стратегическое мышление. Навыки взаимодействия с госструктурами. Опыт организации хозяйственной деятельности предприятия.",
    region: "hakasiya",
    salary: "100",
    schedule: "full",
  },
  {
    id: 7,
    title: "Менеджер по экспорту продукции",
    desc: "Высокие коммуникативные навыки, ориентация на результат, способность работать в режиме многозадачности.",
    region: "hakasiya",
    salary: "30",
    schedule: "flex",
  },
  {
    id: 8,
    title: "Региональный менеджер по продажам (Москва)",
    desc: "Разрабатывать и осуществлять Стратегию развития региона. Обеспечивать высокую степень прогноза продаж не менее чем на 6 месяцев по SKU. Опыт работы в построении и развития продаж от 3 лет. Опыт работы в крупных компаниях – производителей федерального уровня.",
    region: "tatarstan",
    salary: "75",
    schedule: "full",
  },
  {
    id: 9,
    title: "Менеджер по технологии выращивания зеленных культур / Агроном",
    desc: "Осуществление всех технологических процессов для выполнения производственной программы по зеленным культурам. Контроль соблюдения работниками производственной и трудовой дисциплины. Отчетность.",
    region: "krasnoyarsk",
    salary: "30",
    schedule: "remote",
  },
  {
    id: 10,
    title: "Ветеринарный врач/менеджер/релокация",
    desc: "Повышение эффективности по содержанию и движению поголовья, осеменению, опоросу, отъему свиноматок, откорму. Оптимизация кормления для скорейшего снижения показателей конверсии корма",
    region: "altai",
    salary: "30",
    schedule: "change",
  },
  {
    id: 11,
    title: "Менеджер по экспорту",
    desc: "Аналогичный опыт работы будет вашим преимуществом. Высокие коммуникативные навыки, ориентация на результат, способность работать в режиме многозадачности.",
    region: "krasnodar",
    salary: "50",
    schedule: "full",
  },
  {
    id: 12,
    title: "Управляющий агрокомплексом",
    desc: "Высшее образование. Высокий уровень организаторских способностей и стратегическое мышление. Навыки взаимодействия с госструктурами. Опыт организации хозяйственной деятельности предприятия.",
    region: "spb",
    salary: "100",
    schedule: "full",
  },
  {
    id: 13,
    title: "Менеджер по экспорту продукции",
    desc: "Высокие коммуникативные навыки, ориентация на результат, способность работать в режиме многозадачности.",
    region: "msk",
    salary: "50",
    schedule: "remote",
  },
  {
    id: 14,
    title: "Региональный менеджер по продажам (Москва)",
    desc: "Разрабатывать и осуществлять Стратегию развития региона. Обеспечивать высокую степень прогноза продаж не менее чем на 6 месяцев по SKU. Опыт работы в построении и развития продаж от 3 лет. Опыт работы в крупных компаниях – производителей федерального уровня.",
    region: "krasnodar",
    salary: "100",
    schedule: "full",
  },
  {
    id: 15,
    title: "Менеджер по технологии выращивания зеленных культур / Агроном",
    desc: "Осуществление всех технологических процессов для выполнения производственной программы по зеленным культурам. Контроль соблюдения работниками производственной и трудовой дисциплины. Отчетность.",
    region: "altai",
    salary: "15",
    schedule: "full",
  },
  {
    id: 16,
    title: "Ветеринарный врач/менеджер/релокация",
    desc: "Повышение эффективности по содержанию и движению поголовья, осеменению, опоросу, отъему свиноматок, откорму. Оптимизация кормления для скорейшего снижения показателей конверсии корма",
    region: "krasnoyarsk",
    salary: "15",
    schedule: "change",
  },
  {
    id: 17,
    title: "Менеджер по экспорту",
    desc: "Аналогичный опыт работы будет вашим преимуществом. Высокие коммуникативные навыки, ориентация на результат, способность работать в режиме многозадачности.",
    region: "msk",
    salary: "30",
    schedule: "remote",
  },
];

const VacancyPage = () => {
  const regionInitial = {
    msk: true,
    spb: true,
    krasnoyarsk: true,
    altai: true,
    tatarstan: true,
    krasnodar: true,
    hakasiya: true,
  };
  const [regionFilter, setRegionFilter] = useState(regionInitial);
  const [salaryFilter, setSalaryFilter] = useState("none");
  const [scheduleFilter, setScheduleFilter] = useState("any");
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

  useEffect(() => {
    if (salaryFilter === "none" && scheduleFilter === "any") {
      setViewVacancy(vacancies);
      console.log("all");
    } else if (salaryFilter === "none") {
      setViewVacancy(
        vacancies.filter((vacancy) => vacancy.schedule === scheduleFilter),
      );
    } else if (scheduleFilter === "any") {
      setViewVacancy(
        vacancies.filter((vacancy) => vacancy.salary === salaryFilter),
      );
    } else
      setViewVacancy(
        vacancies.filter(
          (vacancy) =>
            vacancy.salary === salaryFilter &&
            vacancy.schedule === scheduleFilter,
        ),
      );
  }, [salaryFilter, scheduleFilter]);

  useEffect(() => {
    setViewVacancy(
      vacancies.filter((vacancy) => regionFilter[vacancy.region] === true),
    );
  }, [regionFilter]);

  return (
    <Layout>
      <div className='flex flex-col items-center px-2 sm:px-16'>
        <div className='flex flex-col md:flex-row items-center space-x-4 mb-8'>
          <PageTitle title='ВАКАНСИИ' />
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
              <CityFilter
                regionInitial={regionInitial}
                regionFilter={regionFilter}
                setRegionFilter={setRegionFilter}
              />
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
