import { Link } from "react-router-dom";
import CityFilter from "../components/CityFilter";
import CoopBlock from "../components/CoopBlock";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import Input from "../ui/Input";

const CoopPage = () => {
  const persons = [
    {
      id: 0,
      job: "Фермерство и уход за плантациями",
      desc: "Описание вакансии для сотрудничества",
    },
    {
      id: 2,
      job: "Поставщик молочной продукции",
      desc: "Описание вакансии для сотрудничества",
    },
    {
      id: 3,
      job: "Поставщик кукурузы",
      desc: "Описание вакансии для сотрудничества",
    },
    {
      id: 4,
      job: "Продуктовый менеджер",
      desc: "Описание вакансии для сотрудничества",
    },
    {
      id: 5,
      job: "Вакансия для сотрудничества",
      desc: "Описание вакансии для сотрудничества",
    },
  ];
  return (
    <Layout>
      <div className='flex flex-col items-center px-16'>
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
            <Input type='text' placeholder='Поиск...' />
            <div className='border rounded-md px-2 py-4 mb-10'>
              <p className='text-2xl font-bold'>Фильтры</p>
              <CityFilter />
            </div>
          </aside>
          <div className='w-full md:w-3/5'>
            {persons.map((person) => (
              <CoopBlock key={person.id} job={person.job} desc={person.desc} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoopPage;
