import './App.css'
import Home from './pages/Home'
import ProductState from './context/products/ProductState'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <ProductState>
        <Router>
          <Navbar />
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/everything'} element={<Products />} />
          </Routes>
        </Router>
      </ProductState>
    </>
  )
}

export default App
