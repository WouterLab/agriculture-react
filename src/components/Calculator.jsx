import { useEffect, useState } from "react";
import { Input } from "../shared/Input";
import { Tooltip } from "react-tooltip";
import { Button } from "../shared/Button";

const defaultParameters = {
  seedCost: 0,
  fertilizerCost: 0,
  landRentCost: 0,
  machineryCost: 0,
  fuelEnergyCost: 0,
  securityMaintenanceCost: 0,
  productPrice: 0,
  expectedYield: 0,
  financingCostPercentage: 0,
};

const countingParams = {
  totalCost: 0,
  revenue: 0,
  netProfit: 0,
  financingExpenses: 0,
  netProfitWithFinancing: 0,
};

const Calculator = () => {
  const [calcData, setCalcData] = useState(defaultParameters);
  const [showTooltip, setShowTooltip] = useState(false);
  const [calculated, setCalculated] = useState(countingParams);
  const [isCalcComplete, setIsCalcComplete] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleSeedCostChange = (e) => {
    setCalcData({ ...calcData, seedCost: Number(e.target.value) });
    setIsCalcComplete(false);
  };

  const handleFertilizerCostChange = (e) => {
    setCalcData({ ...calcData, fertilizerCost: Number(e.target.value) });
    setIsCalcComplete(false);
  };

  const handleLandRentCostChange = (e) => {
    setCalcData({ ...calcData, landRentCost: Number(e.target.value) });
    setIsCalcComplete(false);
  };

  const handleMachineryCostChange = (e) => {
    setCalcData({ ...calcData, machineryCost: Number(e.target.value) });
    setIsCalcComplete(false);
  };

  const handleFuelEnergyCostChange = (e) => {
    setCalcData({ ...calcData, fuelEnergyCost: Number(e.target.value) });
    setIsCalcComplete(false);
  };

  const handleSecurityMaintenanceCostChange = (e) => {
    setCalcData({
      ...calcData,
      securityMaintenanceCost: Number(e.target.value),
    });
    setIsCalcComplete(false);
  };

  const handleProductPriceChange = (e) => {
    setCalcData({ ...calcData, productPrice: Number(e.target.value) });
    setIsCalcComplete(false);
  };

  const handleExpectedYieldChange = (e) => {
    setCalcData({ ...calcData, expectedYield: Number(e.target.value) });
    setIsCalcComplete(false);
  };

  const handleFinancingCostPercentageChange = (e) => {
    setCalcData({
      ...calcData,
      financingCostPercentage: Number(e.target.value),
    });
    setIsCalcComplete(false);
  };

  const calculateCost = () => {
    const totalCost =
      Number(calcData.seedCost) +
      Number(calcData.fertilizerCost) +
      Number(calcData.landRentCost) +
      Number(calcData.machineryCost) +
      Number(calcData.fuelEnergyCost) +
      Number(calcData.securityMaintenanceCost);

    const revenue =
      Number(calcData.productPrice) * Number(calcData.expectedYield);

    const financingExpenses = Number(
      (totalCost * Number(calcData.financingCostPercentage)) / 100,
    );

    const netProfit = Number(revenue) - Number(totalCost);
    const netProfitWithFinancing =
      Number(netProfit) - Number(financingExpenses);

    setCalculated({
      totalCost,
      revenue,
      netProfit,
      financingExpenses,
      netProfitWithFinancing,
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => calculateCost(), [calcData]);

  return (
    <div className='mb-10 md:w-3/5 w-full border-2 p-8 rounded-3xl'>
      <p className='text-3xl font-semibold mb-8'>Расчет прибыльности:</p>
      <div className='flex flex-col md:flex-row gap-12 mb-10 justify-between'>
        <div className='flex flex-col md:w-1/2 w-full'>
          <p className='text-xl'>Затраты на семена (руб.):</p>
          <Input
            type='number'
            value={calcData.seedCost}
            onChange={handleSeedCostChange}
          />
          <span
            className='cursor-pointer text-neutral-500 text-center'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-tooltip-id='seed'
            data-tooltip-content='Затраты на семена: X рублей.
            Этот параметр отражает затраты, которые необходимо понести на покупку семян для посева сельскохозяйственных культур. Введите сумму в рублях, которую вы планируете потратить на приобретение семян.'
          >
            Помощь (?)
          </span>
        </div>
        <div className='flex flex-col md:w-1/2 w-full'>
          <p className='text-xl'>Затраты на удобрения (руб.):</p>
          <Input
            type='number'
            value={calcData.fertilizerCost}
            onChange={handleFertilizerCostChange}
          />
          <span
            className='cursor-pointer text-neutral-500 text-center'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-tooltip-id='fertilizer'
            data-tooltip-content='Затраты на удобрения: Y рублей.
            Этот параметр отражает затраты на покупку и применение удобрений для повышения плодородия почвы и улучшения роста сельскохозяйственных культур. Введите сумму в рублях, которую вы ожидаете потратить на удобрения.'
          >
            Помощь (?)
          </span>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-12 mb-10 justify-between'>
        <div className='flex flex-col md:w-1/2 w-full'>
          <p className='text-xl'>Стоимость аренды земли (руб.):</p>
          <Input
            type='number'
            value={calcData.landRentCost}
            onChange={handleLandRentCostChange}
          />
          <span
            className='cursor-pointer text-neutral-500 text-center'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-tooltip-id='land'
            data-tooltip-content='Стоимость аренды земли: Z рублей.
            Этот параметр указывает на стоимость аренды земельного участка, который используется для сельскохозяйственного производства. Введите сумму в рублях, которую вы платите или планируете платить за аренду земли.'
          >
            Помощь (?)
          </span>
        </div>
        <div className='flex flex-col md:w-1/2 w-full'>
          <p className='text-xl'>Затраты на технику и оборудование (руб.):</p>
          <Input
            type='number'
            value={calcData.machineryCost}
            onChange={handleMachineryCostChange}
          />
          <span
            className='cursor-pointer text-neutral-500 text-center'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-tooltip-id='seed'
            data-tooltip-content='Затраты на технику и оборудование: A рублей.
            Этот параметр отражает затраты на приобретение и обслуживание сельскохозяйственной техники и оборудования, необходимого для выполнения работ на поле. Введите сумму в рублях, которую вы ожидаете потратить на технику и оборудование.'
          >
            Помощь (?)
          </span>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-12 mb-10 justify-between'>
        <div className='flex flex-col md:w-1/2 w-full'>
          <p className='text-xl'>Расходы на топливо и энергию (руб.):</p>
          <Input
            type='number'
            value={calcData.fuelEnergyCost}
            onChange={handleFuelEnergyCostChange}
          />
          <span
            className='cursor-pointer text-neutral-500 text-center'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-tooltip-id='fuel'
            data-tooltip-content='Расходы на топливо и энергию: B рублей.
            Этот параметр указывает на затраты на топливо и энергию, необходимые для работы сельскохозяйственной техники и оборудования. Введите сумму в рублях, которую вы ожидаете потратить на топливо и энергию.'
          >
            Помощь (?)
          </span>
        </div>
        <div className='flex flex-col md:w-1/2 w-full'>
          <p className='text-xl'>Затраты на охрану и обслуживание (руб.):</p>
          <Input
            type='number'
            value={calcData.securityMaintenanceCost}
            onChange={handleSecurityMaintenanceCostChange}
          />
          <span
            className='cursor-pointer text-neutral-500 text-center'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-tooltip-id='security'
            data-tooltip-content='Затраты на охрану и обслуживание: C рублей.
            Этот параметр отражает затраты на охрану и обслуживание сельскохозяйственного предприятия, включая затраты на персонал и обслуживающие услуги. Введите сумму в рублях, которую вы ожидаете потратить на охрану и обслуживание.'
          >
            Помощь (?)
          </span>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-12 mb-10 justify-between'>
        <div className='flex flex-col md:w-1/2 w-full'>
          <p className='text-xl'>Цена на продукцию (рублей за кг.):</p>
          <Input
            type='number'
            value={calcData.productPrice}
            onChange={handleProductPriceChange}
          />
          <span
            className='cursor-pointer text-neutral-500 text-center'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-tooltip-id='product'
            data-tooltip-content='Цена на продукцию: P рублей за единицу.
            Этот параметр указывает на цену, по которой вы собираетесь продавать каждую единицу произведенной сельскохозяйственной продукции. Введите сумму в рублях, которую вы ожидаете получить за каждую единицу продукции.'
          >
            Помощь (?)
          </span>
        </div>
        <div className='flex flex-col md:w-1/2 w-full'>
          <p className='text-xl'>Ожидаемый урожай (кг):</p>
          <Input
            type='number'
            value={calcData.expectedYield}
            onChange={handleExpectedYieldChange}
          />
          <span
            className='cursor-pointer text-neutral-500 text-center'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-tooltip-id='expected'
            data-tooltip-content='Ожидаемый урожай: Q единиц.
            Этот параметр отражает ожидаемое количество произведенной сельскохозяйственной продукции. Введите количество единиц продукции, которое вы ожидаете получить.'
          >
            Помощь (?)
          </span>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-12 mb-10 justify-center'>
        <div className='flex flex-col md:w-1/2 w-full'>
          <p className='text-xl'>Процентные затраты на финансирование (%):</p>
          <Input
            type='number'
            value={calcData.financingCostPercentage}
            onChange={handleFinancingCostPercentageChange}
          />
          <span
            className='cursor-pointer text-neutral-500 text-center'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-tooltip-id='financing'
            data-tooltip-content='Процентные затраты на финансирование: R%.
            Этот параметр отображает процентную ставку, которую вы планируете использовать для расчета затрат на финансирование. Учтите процентные затраты, связанные с кредитами, займами или другими формами финансирования, которые вы можете использовать для покрытия расходов.'
          >
            Помощь (?)
          </span>
        </div>
      </div>
      <div className='flex flex-col md:flex-row mb-4 justify-center'>
        <Button
          onClick={() => {
            setIsCalcComplete(true);
          }}
        >
          Рассчитать
        </Button>
      </div>
      {isCalcComplete && calculated.totalCost > 0 && (
        <div className='flex flex-col items-center text-center'>
          <p className='text-3xl font-semibold mb-4'>Результаты расчета:</p>
          <div className='flex'>
            <p className='text-xl'>
              <span>Общие затраты: </span>
              <span className='font-bold text-2xl'>
                {calculated.totalCost} ₽
              </span>
              <p className='text-neutral-400 mb-6 w-4/5 mx-auto'>
                Это сумма всех расходов, связанных с производством
                сельскохозяйственной продукции. Она включает затраты на семена,
                удобрения, аренду земли, технику и оборудование и т.д.
              </p>
            </p>
          </div>
          <div className='flex'>
            <p className='text-xl'>
              <span>Общая выручка продажи: </span>
              <span className='font-bold text-green-400 text-2xl'>
                {calculated.revenue} ₽
              </span>
              <p className='text-neutral-400 mb-6 w-4/5 mx-auto'>
                Это общая сумма денег, полученных от продажи
                сельскохозяйственной продукции.
              </p>
            </p>
          </div>
          <div className='flex'>
            <p className='text-xl'>
              <span>Чистая прибыль: </span>
              <span
                className={`font-bold ${
                  calculated.netProfit > 0 ? "text-green-400" : "text-red-400"
                } text-2xl`}
              >
                {calculated.netProfit} ₽
              </span>
              <p className='text-neutral-400 mb-6 w-4/5 mx-auto'>
                Это разница между выручкой и общими затратами. Она показывает
                ожидаемую прибыль после вычета всех затрат.
              </p>
            </p>
          </div>
          <div className='flex'>
            <p className='text-xl'>
              <span>Затраты на финансирование: </span>
              <span className='font-bold text-2xl'>
                {calculated.financingExpenses} ₽
              </span>
              <p className='text-neutral-400 mb-6 w-4/5 mx-auto'>
                Это сумма денег, которую необходимо потратить на оплату
                процентов по финансированию затрат на производств.
              </p>
            </p>
          </div>
          <div className='flex'>
            <p className='text-xl'>
              <span>
                Прибыль с учетом процентных затрат на финансирование:{" "}
              </span>
              <span
                className={`font-bold ${
                  calculated.netProfitWithFinancing > 0
                    ? "text-green-400"
                    : "text-red-400"
                } text-2xl`}
              >
                {calculated.netProfitWithFinancing} ₽
              </span>
              <p className='text-neutral-400 mb-6 w-4/5 mx-auto'></p>
            </p>
          </div>
        </div>
      )}
      <Tooltip
        id='seed'
        place='bottom'
        effect='solid'
        when={showTooltip}
        style={{ width: "200px", borderRadius: 10, backgroundColor: "#505050" }}
      />
      <Tooltip
        id='fertilizer'
        place='bottom'
        effect='solid'
        when={showTooltip}
        style={{ width: "200px", borderRadius: 10, backgroundColor: "#505050" }}
      />
      <Tooltip
        id='land'
        place='bottom'
        effect='solid'
        when={showTooltip}
        style={{ width: "200px", borderRadius: 10, backgroundColor: "#505050" }}
      />
      <Tooltip
        id='machinery'
        place='bottom'
        effect='solid'
        when={showTooltip}
        style={{ width: "200px", borderRadius: 10, backgroundColor: "#505050" }}
      />
      <Tooltip
        id='fuel'
        place='bottom'
        effect='solid'
        when={showTooltip}
        style={{ width: "200px", borderRadius: 10, backgroundColor: "#505050" }}
      />
      <Tooltip
        id='security'
        place='bottom'
        effect='solid'
        when={showTooltip}
        style={{ width: "200px", borderRadius: 10, backgroundColor: "#505050" }}
      />
      <Tooltip
        id='product'
        place='bottom'
        effect='solid'
        when={showTooltip}
        style={{ width: "200px", borderRadius: 10, backgroundColor: "#505050" }}
      />
      <Tooltip
        id='expected'
        place='bottom'
        effect='solid'
        when={showTooltip}
        style={{ width: "200px", borderRadius: 10, backgroundColor: "#505050" }}
      />
      <Tooltip
        id='financing'
        place='bottom'
        effect='solid'
        when={showTooltip}
        style={{ width: "200px", borderRadius: 10, backgroundColor: "#505050" }}
      />
    </div>
  );
};

export { Calculator };
