import { useEffect, useState } from "react";
import { VacancyItem } from "./VacancyItem";

const Vacancy = () => {
  const [vacancies, setVacancies] = useState([]);
  useEffect(() => {
    const data = [
      {
        id: 0,
        title: "Специалист в отдел продаж минеральных удобрений",
      },
      {
        id: 1,
        title: "Менеджер по агротехнологическому направлению",
      },
      {
        id: 2,
        title: "Управляющий агрокомплексом (директор)",
      },
      {
        id: 3,
        title:
          "Менеджер по продажам кормовых добавок для сельскохозяйственных животных",
      },
    ];
    setVacancies(data);
  }, []);
  return (
    <div className='flex items-center md:items-start md:justify-center flex-col md:flex-row w-full'>
      {vacancies.map((vacancy) => (
        <VacancyItem key={vacancy.id} title={vacancy.title} />
      ))}
    </div>
  );
};

export { Vacancy };
