import { Link } from "react-router-dom";
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
      <div className='flex flex-col items-center'>
        <div className='flex items-center space-x-4 mb-8'>
          <Link to='/vacancy'>
            <h2 className='text-4xl font-bold text-neutral-500 underline'>
              ВАКАНСИИ
            </h2>
          </Link>
          <PageTitle title='СОТРУДНИЧЕСТВО' />
        </div>
        <div className='flex justify-center w-full'>
          <aside className='w-1/5'>
            <Input type='text' placeholder='Поиск...' />
            <div className='border rounded-md px-2 py-4 w-4/5'>
              <p className='text-2xl font-bold'>Фильтры</p>
              <div className='flex h-4 items-center space-x-4'>
                <p>Москва</p>
                <Input type='checkbox' style={{ marginBottom: 0 }} />
              </div>
              <div className='flex h-4 items-center space-x-4'>
                <p>Санкт-Петербург</p>
                <Input type='checkbox' style={{ marginBottom: 0 }} />
              </div>
              <div className='flex h-4 items-center space-x-4'>
                <p>Краснодарский край</p>
                <Input type='checkbox' style={{ marginBottom: 0 }} />
              </div>
            </div>
          </aside>
          <div className='w-3/5'>
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
