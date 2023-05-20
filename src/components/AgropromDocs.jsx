import { DocumentIcon } from "@heroicons/react/24/outline";

const AgropromDocs = () => {
  return (
    <div className='w-3/5'>
      <div className='flex items-center mb-4'>
        <DocumentIcon className='min-w-[50px] w-12' />
        <p className='text-lg truncate'>
          <a href='https://www.minagro.saratov.gov.ru/docs/index.php?SECTION_ID=113&ELEMENT_ID=1754'>
            Федеральный закон от 29.12.2006 № 264-ФЗ "О развитии сельского
            хозяйства"
          </a>
        </p>
      </div>
      <div className='flex items-center mb-4'>
        <DocumentIcon className='min-w-[50px] w-12' />
        <p className='text-lg truncate'>
          <a href='https://www.minagro.saratov.gov.ru/docs/index.php?SECTION_ID=113&ELEMENT_ID=1636'>
            Федеральный закон от 09.07.2002 № 83-ФЗ "О финансовом оздоровлении
            сельскохозяйственных товаропроизводителей"
          </a>
        </p>
      </div>
      <div className='flex items-center'>
        <DocumentIcon className='min-w-[50px] w-12' />
        <p className='text-lg truncate'>
          <a href='https://www.minagro.saratov.gov.ru/docs/index.php?SECTION_ID=113&ELEMENT_ID=2167'>
            Приказ МСХ РФ от 11 октября 2010 г. № 345 «Об утверждении формы и
            порядка ведения похозяйственных книг органами местного
            самоуправления поселений и органами местного самоуправления
            городских округов»
          </a>
        </p>
      </div>
    </div>
  );
};

export { AgropromDocs };
