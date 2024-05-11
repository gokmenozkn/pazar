import Header from '../../components/Header';
import { useState } from 'react';
import { YearlyData } from '../../types/ProductType';
import DateInput from '../../components/DateInput';
import ProductSelect from '../../components/ProductSelect';
import Chart from '../../components/Chart';
import { getAvgBetweenSelectedDays } from '../../api';
import { useProductContext } from '../../context/ProductContext';
import Footer from '../../components/Footer';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';

// import MonthSelect from '../../components/MonthSelect';
// import YearSelect from '../../components/YearSelect';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Layout = () => {
  const { selectedProduct, startDate, endDate } = useProductContext();

  const [yearlyData, setYearlyData] = useState<YearlyData[]>([]);
  // const [activeButton, setActiveButton] = useState(0);

  const query = useQuery();
  const navigate = useNavigate();

  const handleRequest = () => {
    navigate(
      `/products?startDate=${startDate}&endDate=${endDate}&productName=${selectedProduct}`
    );
    getAvgBetweenSelectedDays(selectedProduct, startDate, endDate)
      .then((data) => {
        console.log('Data:', data);
        setYearlyData(data.Gunluk_Ortalamalar);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Header />

      {/* main */}
      <div className='max-w-5xl mx-auto py-6 mt-6 mb-24'>
        <h1 className='text-my-brown font-semibold text-2xl mb-6 text-center'>
          SEBZE/MEYVE HAL FİYATLARI
        </h1>
        <p className='text-lg text-center mb-12'>
          Hal Fiyatları veri akışı doğrultusunda güncellenmektedir.
        </p>
        <hr className='mb-10' />

        {/* günlük, aylık, yıllık butonlar */}
        {/* <div className='flex justify-between items-center gap-x-5 mt-5'>
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
      </div> */}

        {/* search */}
        <div className='flex items-center justify-center gap-x-5 mt-5 mb-8 h-24'>
          {/* Year Toggle */}
          <DateInput />

          {/* Month selection */}
          {/* {activeButton === 1 ? <MonthSelect /> : null} */}

          {/* Product Toggle */}
          <ProductSelect />

          <div className='h-full items-end flex'>
            <button
              className='bg-dark-1 hover:bg-dark-1/90 text-white text-lg py-2.5 px-6 rounded'
              onClick={handleRequest}
            >
              Getir
            </button>
          </div>
        </div>

        {/* Chart */}
        {yearlyData.length > 0 ? <Chart data={yearlyData} /> : null}
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};
export default Layout;
