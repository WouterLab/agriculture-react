import { Layout } from "../shared/Layout";
import { PageTitle } from "../components/PageTitle";
import { Calculator } from "../components/Calculator";

const CalculatorPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center p-4'>
        <PageTitle title='КАЛЬКУЛЯТОР' />
        <p className='md:w-3/5 w-full text-center text-xl mb-12'>
          На этой странице вы найдете удобный калькулятор для расчета стоимости
          сельскохозяйственной продукции. Этот инструмент предназначен для тех,
          кто занимается сельским хозяйством и желает оценить финансовые аспекты
          своего проекта. Используйте калькулятор для примерной оценки
          финансовых показателей вашего проекта и принятия обоснованных решений.
        </p>
        <Calculator />
        <p className='md:w-2/6 w-full text-sm mb-12'>
          Представленный калькулятор является исключительно информационным
          инструментом и не является публичной офертой, призывом к продажам или
          покупкам. Он разработан для общего понимания и оценки стоимости
          производства сельскохозяйственной продукции.
          <br />
          <br />
          Учитывая сложность и множество факторов, влияющих на финансовую
          сторону сельскохозяйственного предприятия, калькулятор может не учесть
          все параметры и нюансы, специфичные для вашей ситуации. Его результаты
          следует рассматривать как приблизительные оценки, а не точные данные.
          <br />
          <br />
          Рекомендуется использовать калькулятор в качестве руководства и
          отправной точки для анализа стоимости производства. При принятии
          важных бизнес-решений всегда рекомендуется проконсультироваться с
          профессионалами в области финансов и сельского хозяйства, чтобы учесть
          все специфические факторы и риски вашего проекта.
          <br />
          <br />
          Пользователи несут полную ответственность за использование
          калькулятора и принимают на себя все риски, связанные с решениями,
          основанными на его результате. Мы не несем ответственности за любые
          убытки, которые могут возникнуть в результате использования данного
          калькулятора.
          <br />
          <br />
          Пожалуйста, будьте внимательны и обратитесь за профессиональным
          советом, прежде чем принимать важные финансовые решения, связанные со
          сферой сельского хозяйства.
        </p>
        <div className='w-3/5 mb-8'></div>
      </div>
    </Layout>
  );
};

export { CalculatorPage };