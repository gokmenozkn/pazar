import AnalyzeImg from '../assets/Analyze-cuate.svg';

export default function AboutSection() {
  return (
    <section className='bg-light-background py-20'>
      <div className='flex items-center justify-between max-w-6xl mx-auto'>
        {/* left */}
        <div className='max-w-md w-full'>
          <h2 className='font-semibold text-4xl mb-10 text-dark-1'>Pazarcım nedir?</h2>
          <p className='font-light'>
            Biz, sebze ve meyvelerin fiyatlarının zaman içinde nasıl değiştiğini
            gösteren güvenilir bir platformuz. İzmir Belediyesi'nin API
            verilerini kullanarak, size her zaman en güncel ve doğru bilgileri
            sunuyoruz. Böylece, alışveriş listenizi hazırlarken gelecekteki
            fiyat değişimlerini de hesaba katabilirsiniz!
          </p>
        </div>

        {/* right */}
        <div
          className='bg-cover bg-center w-[502px] h-[502px]'
          style={{ backgroundImage: `url('${AnalyzeImg}')` }}
        ></div>
      </div>
    </section>
  );
}
