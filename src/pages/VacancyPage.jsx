import { Link } from 'react-router-dom';
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

const VacancyPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <div className='flex items-center space-x-4'>
          <PageTitle title='ВАКАНСИИ' />
          <Link to='/coop'>
            <h2 className='text-4xl font-bold text-neutral-500 underline'>СОТРУДНИЧЕСТВО</h2>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default VacancyPage;
