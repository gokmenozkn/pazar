import SearchIcon from '../assets/search-icon.svg';

const SearchSection = () => {
  const sizeOfCircle1 = 14;

  return (
    <section className='relative bg-btn-yellow py-28 overflow-hidden'>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-white font-bold text-4xl mb-12'>Ürünleri keşfet</h1>
        <div className='max-w-3xl w-full relative'>
          <input
            type='text'
            className='py-4 px-6 w-full rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button
            className='absolute right-6'
            style={{ top: 'calc(50% - 12px)' }}
          >
            <img src={SearchIcon} alt='search icon' className='w-6 h-6' />
          </button>
        </div>

        {/* öneriler */}
        <div className='flex gap-x-5 mt-5'>
          <p className='font-light text-white text-xl'>Örneğin:</p>
          <ul className='flex gap-x-3'>
            {['elma', 'armut', 'çilek', 'marul'].map((item, idx) => (
              <li
                key={idx}
                className='bg-white rounded-lg px-3.5 py-1 text-sm text-black/70 font-semibold'
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* left bottom circle */}
      <div
        className='h-56 w-56 rounded-full bg-white absolute'
        style={{
          left: `${(sizeOfCircle1 / 2) * -1}rem`,
          bottom: `${(sizeOfCircle1 / 2) * -1}rem`,
        }}
      ></div>
    </section>
  );
};

export default SearchSection;
