import Header from '../../components/Header';
import { useState } from 'react';
import { YearlyData } from '../../types/ProductType';
import DateInput from '../../components/DateInput';
import ProductSelect from '../../components/ProductSelect';
import Chart from '../../components/Chart';
import { getAvgBetweenSelectedDays, predictNextMonth } from '../../api';
import { useProductContext } from '../../context/ProductContext';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import { calculateAvg } from '../../utils/PredictionAvg';

// import MonthSelect from '../../components/MonthSelect';
// import YearSelect from '../../components/YearSelect';

const Layout = () => {
  const { selectedProduct, startDate, endDate } = useProductContext();

  const [yearlyData, setYearlyData] = useState<YearlyData[]>([]);
  const [prediction, setPrediction] = useState(0);

  const navigate = useNavigate();

  const handleRequest = () => {
    navigate(
      `/products?startDate=${startDate}&endDate=${endDate}&productName=${selectedProduct}`
    );

    // get average
    getAvgBetweenSelectedDays(selectedProduct, startDate, endDate)
      .then((data) => {
        console.log('Data:', data);
        setYearlyData(data.Gunluk_Ortalamalar);
      })
      .catch((err) => console.error(err));

    // predict next month
    predictNextMonth(selectedProduct)
      .then((data) => {
        console.log(data);
        setPrediction(calculateAvg(data.data));
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

        {/* tahmin */}
        {yearlyData && yearlyData.length > 0 ? (
          <div id='prediction' className='mt-4 text-xl font-semibold'>
            <span className='font-light mr-2'>
              2024 Haziran ayında beklenen değer:
            </span>
            {prediction.toFixed(3)}₺
          </div>
        ) : null}
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};
export default Layout;
