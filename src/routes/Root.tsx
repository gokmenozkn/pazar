import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ProductsGrid from '../components/ProductsGrid';
import SearchSection from '../components/SearchSection';

function Root() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <SearchSection />
      <ProductsGrid />
      <Footer />
    </>
  );
}

export default Root;
