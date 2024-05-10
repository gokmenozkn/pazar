import { useState } from 'react';
import { useProductContext } from '../context/ProductContext';
import { YearlyData } from '../types/ProductType';
import YearSelect from '../components/YearSelect';
import MonthSelect from '../components/MonthSelect';
import ProductSelect from '../components/ProductSelect';
import Chart from '../components/Chart';
import DateInput from '../components/DateInput';
import { getYearlyData } from '../api';

export default function Products() {
  const { selectedProduct, selectedYear } = useProductContext();
  const [yearlyData, setYearlyData] = useState<YearlyData[]>([]);
  const [activeButton, setActiveButton] = useState(0);

  const activeClass = 'bg-blue-700';
  const passiveClass = 'bg-blue-500';

  const handleRequest = () => {
    getYearlyData(selectedProduct, selectedYear)
      .then((data) => {
        setYearlyData(data.Aylik_Ortalamalar);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='max-w-5xl mx-auto py-6'>
      <h1 className='text-blue-700 text-2xl mb-6'>SEBZE/MEYVE HAL FİYATLARI</h1>
      <p className='text-lg'>
        Hal Fiyatları veri akışı doğrultusunda güncellenmektedir.
      </p>

      <div className='flex justify-between items-center gap-x-5 mt-5'>
        <button
          className={`${
            activeButton === 0 ? activeClass : passiveClass
          } text-white text-lg w-full py-3 hover:bg-blue-700`}
          onClick={() => setActiveButton(0)}
        >
          Günlük
        </button>
        <button
          className={`${
            activeButton === 1 ? activeClass : passiveClass
          } text-white text-lg w-full py-3 hover:bg-blue-700`}
          onClick={() => setActiveButton(1)}
        >
          Aylık
        </button>
        <button
          className={`${
            activeButton === 2 ? activeClass : passiveClass
          } text-white text-lg w-full py-3 hover:bg-blue-700`}
          onClick={() => setActiveButton(2)}
        >
          Yıllık
        </button>
      </div>

      {/* search */}
      <div className='flex items-center justify-center gap-x-5 mt-5 mb-8 h-24'>
        {/* Year Toggle */}
        {activeButton === 0 ? <DateInput /> : <YearSelect />}

        {/* Month selection */}
        {activeButton === 1 ? <MonthSelect /> : null}

        {/* Product Toggle */}
        <ProductSelect />

        <div className='h-full items-end flex'>
          <button
            className='bg-purple-700 hover:bg-purple-800 text-white text-lg py-3 px-6 rounded'
            onClick={handleRequest}
          >
            Getir
          </button>
        </div>
      </div>

      {/* Chart */}
      {yearlyData.length > 0 ? <Chart data={yearlyData} /> : null}
    </div>
  );
}
