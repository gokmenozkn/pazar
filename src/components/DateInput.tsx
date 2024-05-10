import { useEffect, /*useState*/ } from 'react';
import { useProductContext } from '../context/ProductContext';

const DateInput = () => {
  // const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState('');

  const { startDate, endDate, changeEndDate, changeStartDate } = useProductContext()

  useEffect(() => {
    console.log('Başlangıç tarihi değişti:', startDate);
  }, [startDate]);

  return (
    <div className='flex gap-x-5 items-end h-full'>
      <div id='group'>
        <label htmlFor='start-date' className='block mb-2'>
          Başlangıç:
        </label>
        <input
          className='block p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300'
          type='date'
          value={startDate}
          onChange={(e) => changeStartDate(e.target.value)}
          placeholder='ör: 11-05-2023'
        />
      </div>

      <div id='group'>
        <label htmlFor='end-date' className='block mb-2'>
          Bitiş:
        </label>
        <input
          className='block p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300'
          type='date'
          value={endDate}
          onChange={(e) => changeEndDate(e.target.value)}
          placeholder='ör: 11-05-2023'
        />
      </div>
    </div>
  );
};

export default DateInput;
