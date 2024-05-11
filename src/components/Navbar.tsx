import Button from './ui/Button';

export default function Navbar() {
  return (
    <nav className='relative w-full z-10'>
      <div className='max-w-6xl mx-auto absolute inset-x-0 top-0'>
        <div className='flex justify-between items-center p-5'>
          <div className='brand uppercase tracking-[1rem] text-xl text-white font-bold'>
            pazarcım
          </div>
          <div className='flex items-center gap-4'>
            <a href='/' className='text-white font-semibold tracking-widest'>
              Anasayfa
            </a>
            <a
              href='/about'
              className='text-white font-semibold tracking-widest'
            >
              Hakkımızda
            </a>
            <Button
              text='İletişim'
              style={{ padding: '0.5em 1.5em', fontSize: '1em' }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
