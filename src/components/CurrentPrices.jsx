import { ChartBarIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import ProductBlock from "./ProductBlock";

const CurrentPrices = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const data = [
      {
        id: 0,
        title: "Хлопок",
        firstPrice: 83.23,
        lastPrice: 89.95,
        changePrice: 5.97,
        highestPrice: 89.95,
        lowestPrice: 83.2,
        sellDate: new Date()
          .toLocaleString("en-GB", { timeZone: "UTC" })
          .split(",")[0],
      },
      {
        id: 1,
        title: "Кукуруза",
        firstPrice: 83.23,
        lastPrice: 89.95,
        changePrice: 0,
        highestPrice: 89.95,
        lowestPrice: 83.2,
        sellDate: new Date()
          .toLocaleString("en-GB", { timeZone: "UTC" })
          .split(",")[0],
      },
      {
        id: 2,
        title: "Соя",
        firstPrice: 83.23,
        lastPrice: 89.95,
        changePrice: -0.99,
        highestPrice: 89.95,
        lowestPrice: 83.2,
        sellDate: new Date()
          .toLocaleString("en-GB", { timeZone: "UTC" })
          .split(",")[0],
      },
      {
        id: 3,
        title: "Пшеница",
        firstPrice: 83.23,
        lastPrice: 89.95,
        changePrice: -1.22,
        highestPrice: 89.95,
        lowestPrice: 83.2,
        sellDate: new Date()
          .toLocaleString("en-GB", { timeZone: "UTC" })
          .split(",")[0],
      },
    ];
    setProducts(data);
  }, []);
  return (
    <>
      <div className='flex flex-wrap lg:hidden w-5/6 gap-2 justify-center'>
        {products.map((product) => (
          <ProductBlock
            key={product.id}
            title={product.title}
            firstPrice={product.firstPrice}
            lastPrice={product.lastPrice}
            changePrice={product.changePrice}
            highestPrice={product.highestPrice}
            lowestPrice={product.lowestPrice}
            sellDate={product.sellDate}
          />
        ))}
      </div>

      <table className='hidden lg:table'>
        <tbody>
          <tr className=''>
            <th className='bg-[#F3FCF7] text-black border'>
              <ChartBarIcon className='w-5 inline-block mr-2 mb-1 text-[#06C167]' />
              Товар
            </th>
            <th className='bg-[#F3FCF7] text-black border'>Начальная</th>
            <th className='bg-[#F3FCF7] text-black border'>Последняя</th>
            <th className='bg-[#F3FCF7] text-black border'>Изменение</th>
            <th className='bg-[#F3FCF7] text-black border'>Самая высокая</th>
            <th className='bg-[#F3FCF7] text-black border'>Самая низкая</th>
            <th className='bg-[#F3FCF7] text-black border'>Дата продажи</th>
          </tr>
          {products.map((product) => (
            <tr key={product.id}>
              <td className='bg-neutral-50 border border-r-0'>
                {product.title}
              </td>
              <td className='bg-neutral-50 border-y'>{product.firstPrice}</td>
              <td className='bg-neutral-50 border-y'>{product.lastPrice}</td>
              <td
                className={`${
                  product.changePrice > 0
                    ? "bg-green-200 border-y"
                    : product.changePrice < 0
                    ? "bg-red-300 border-y"
                    : null
                }`}
              >
                {product.changePrice}%
              </td>
              <td className='bg-neutral-50 border-y'>{product.highestPrice}</td>
              <td className='bg-neutral-50 border-y'>{product.lowestPrice}</td>
              <td className='bg-neutral-50 border border-l-0'>
                {product.sellDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CurrentPrices;
