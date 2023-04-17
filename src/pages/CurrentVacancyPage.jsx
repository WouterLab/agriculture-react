import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

const CurrentVacancyPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <PageTitle title='НОВОСТИ' />
        <p className='w-3/5 text-center text-xl mb-4'>
          В этом разделе вы найдете последние новости в области сельского
          хозяйства, в том числе новости о сельскохозяйственной политике,
          бизнесе, машинах и технологиях. В этом разделе также освещаются
          новости об урожае кукурузы, сои и пшеницы, а также новости о
          животноводстве по крупному рогатому скоту, парнокопытному скоту и
          птице.
        </p>
        <div className='w-3/5 mb-8'></div>
      </div>
    </Layout>
  );
};

export default CurrentVacancyPage;
