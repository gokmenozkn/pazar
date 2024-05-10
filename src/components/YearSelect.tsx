import { useProductContext } from '../context/ProductContext';

export default function YearSelect() {
  const { selectedYear, onYearChange } = useProductContext();

  return (
    <select
      className='block p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300'
      value={selectedYear}
      onChange={(e) => onYearChange(e.target.value)}
    >
      <option value='default' disabled>
        Yıl seçin
      </option>
      <option value='2024'>2024</option>
      <option value='2023'>2023</option>
    </select>
  );
}
