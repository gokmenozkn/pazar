import Agriculture from '../assets/agriculture.jpg';
import Button from './ui/Button';

export default function Hero() {
  return (
    <div className='relative'>
      <img
        src={Agriculture}
        alt='Field with a harvester'
        className='w-full h-screen object-cover'
      />
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1 className='text-white text-5xl font-bold mb-3 leading-snug'>
          Geçmişi Anlamak, <br />
          Geleceği Keşfetmek
        </h1>
        <p className='text-white mb-5'>
          Lorem ipsum dolor sit amet consectetur. Lectus aliquet quam nisl
          fermentum. Faucibus nibh amet odio sit sed sociis id turpis. Mattis
          consequat quis blandit consequat ipsum egestas eget ultricies.
        </p>
        <Button text='Keşfet' />
      </div>
    </div>
  );
}
