import { ChartBarIcon } from "@heroicons/react/24/outline";

const ProductBlock = ({
  title,
  firstPrice,
  lastPrice,
  changePrice,
  highestPrice,
  lowestPrice,
  sellDate,
}) => {
  return (
    <div className='bg-[#F3FCF7] text-neutral-600 rounded-2xl w-full lg:w-[49%] p-4 min-w-[200px]'>
      <div className='flex'>
        <ChartBarIcon className='w-5 inline-block mr-2 text-[#06C167]' />{" "}
        <p className='text-[#06C167] font-semibold text-xl'>{title}</p>
      </div>
      <p>Начальная цена: {firstPrice}</p>
      <p>Последняя цена: {lastPrice}</p>
      <p>
        Изменение цены:{" "}
        <span
          className={`${
            changePrice > 0
              ? "text-green-300"
              : changePrice < 0
              ? "text-red-400"
              : null
          }`}
        >
          {changePrice}
        </span>
      </p>
      <p>Самая высокая цена: {highestPrice}</p>
      <p>Самая низкая цена: {lowestPrice}</p>
      <p>Дата продажи: {sellDate}</p>
    </div>
  );
};

export { ProductBlock };
