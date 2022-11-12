import { Link } from 'react-router-dom';
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

const CoopPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <div className='flex items-center space-x-4'>
          <Link to='/vacancy'>
            <h2 className='text-4xl font-bold text-neutral-500 underline'>ВАКАНСИИ</h2>
          </Link>
          <PageTitle title='СОТРУДНИЧЕСТВО' />
        </div>
      </div>
    </Layout>
  );
};

export default CoopPage;