import Button from './ui/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-dark-1'>
      <div className='max-w-7xl mx-auto flex justify-between items-center p-5'>
        <Link
          to='/'
          className='brand uppercase tracking-[1rem] text-xl text-white font-bold'
        >
          pazarcım
        </Link>
        <div className='flex items-center gap-8'>
          <Link className='text-white font-semibold tracking-widest' to='/'>
            Anasayfa
          </Link>
          <a href='/about' className='text-white font-semibold tracking-widest'>
            Hakkımızda
          </a>
          <Button
            text='İletişim'
            style={{ padding: '0.5em 1.5em', fontSize: '1em' }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
