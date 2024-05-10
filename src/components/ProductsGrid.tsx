import { Link } from 'react-router-dom';
import BananaImg from '../assets/banana.jpg';
import Button from './ui/Button';

const ImageCard = () => {
  return (
    <div className='overflow-hidden relative'>
      <div className='overflow-hidden'>
        <img
          className='w-full cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out'
          src={BananaImg}
          alt='product image'
        />
      </div>
      <div className='absolute inset-0 bg-black bg-opacity-70'></div>
      <div className='py-2 px-3 absolute inset-x-0 bottom-0'>
        <p className='bg-my-brown/65 py-1 text-white font-semibold text-xl w-full uppercase text-center'>
          Muz
        </p>
        {/* <button className='w-full bg-my-brown hover:bg-my-brown/90 text-[#E9F6FF] font-semibold rounded px-3 py-2'>
          Ürüne git
        </button> */}
      </div>
    </div>
  );
};

const ProductsGrid = () => {
  return (
    <section className='py-28'>
      <h1 className='font-semibold text-3xl uppercase text-center mb-24 text-dark-1 tracking-wider'>
        Ürünler
      </h1>
      <div className='max-w-screen-lg mx-auto'>
        <div className='grid grid-cols-3 gap-8'>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <ImageCard key={item} />
          ))}
        </div>
        <div className='flex items-center justify-center mt-14'>
          <Link to='/products'>
            <Button text='Daha fazla' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
