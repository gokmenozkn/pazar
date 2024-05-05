import { createContext, useContext, useState } from 'react';
import useGetProductNames from '../hooks/getProductNames';

interface IProductContext {
  productNames: string[];
  selectedYear: string;
  onYearChange: (year: string) => void;
  selectedProduct: string;
  onProductChange: (p: string) => void;
  screen: Screen;
  changeScreen: (sc: Screen) => void;
}

type Screen = 'day' | 'month' | 'year';

const ProductContext = createContext<IProductContext | undefined>(undefined);

function ProductProvider({ children }: { children: React.ReactNode }) {
  const { productNames } = useGetProductNames();
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [screen, setScreen] = useState<Screen>('year');

  function onYearChange(year: string) {
    setSelectedYear(year);
    console.log('Selected year changed:', selectedYear);
  }

  function onProductChange(productName: string) {
    setSelectedProduct(productName);
    console.log('Selected product changed:', selectedProduct);
  }

  function changeScreen(sc: Screen) {
    setScreen(sc);
  }

  const contextValue: IProductContext = {
    productNames,
    selectedYear,
    selectedProduct,
    onYearChange,
    onProductChange,
    screen,
    changeScreen,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;

// eslint-disable-next-line
export function useProductContext() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return context;
}
