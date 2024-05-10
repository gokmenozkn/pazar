const months = [
  'Ocak',
  'Şubat',
  'Mart',
  'nisan',
  'mayıs',
  'haziran',
  'temmuz',
  'ağustos',
  'eylül',
  'ekim',
  'kasım',
  'aralık',
];

export default function MonthSelect() {
  return (
    <div className="h-full flex items-end">
      <select className='block p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300'>
        <option value='default' disabled>
          Ay seçin
        </option>
        {months.map((month, idx) => (
          <option key={idx} value={month}>
            {month.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
