import { useProductContext } from '../context/ProductContext';

function ProductToggle() {
  const { productNames, onProductChange } = useProductContext();

  return (
    <div className='flex items-end h-full'>
      <select
        className='block p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300'
        defaultValue='pick'
        onChange={(event) => onProductChange(event.target.value)}
      >
        <option value='pick' disabled>
          Ürün seçin
        </option>
        {productNames.length > 0 ? (
          productNames.map((name, idx) => (
            <option value={name} key={idx}>
              {name}
            </option>
          ))
        ) : (
          <option value='' disabled>
            Ürün yok
          </option>
        )}
      </select>
    </div>
  );
}

export default ProductToggle;
