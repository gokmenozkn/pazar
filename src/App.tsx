import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Root from './routes/Root';
import Products from './routes/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
