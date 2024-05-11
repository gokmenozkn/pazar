import { Link } from 'react-router-dom';
import Button from './ui/Button';

const imageGallery = [
  {
    id: 0,
    name: 'Elma',
    img: '../assets/apples.jpg',
  },
  {
    id: 1,
    name: 'Muz',
    img: '../assets/banana.jpg',
  },
  {
    id: 2,
    name: 'Biber',
    img: '../assets/biber.jpg',
  },
  {
    id: 3,
    name: 'Marul',
    img: '../assets/lettuce.jpg',
  },
  {
    id: 4,
    name: 'Kiraz',
    img: '../assets/kiraz.jpg',
  },
  {
    id: 5,
    name: 'Çilek',
    img: '../assets/cilek.jpg',
  },
];

function getImageUrl(i: string) {
  return new URL(`${i}`, import.meta.url).href;
}

const ImageCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className='overflow-hidden relative'>
      <div className='overflow-hidden h-auto'>
        <img
          className='w-full h-auto'
          src={getImageUrl(img)}
          alt='product image'
        />
      </div>
      <div className='absolute inset-0 bg-black bg-opacity-70'></div>
      <div className='py-2 px-3 absolute inset-x-0 bottom-0'>
        <p className='py-1 text-white font-semibold text-xl w-full uppercase text-center'>
          {name}
        </p>
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
          {imageGallery.map((item) => (
            <ImageCard key={item.id} img={item.img} name={item.name} />
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
