import './App.css'
import Home from './pages/Home'
import ProductState from './context/products/ProductState'
function App() {

  return (
    <>
      <ProductState>
        <Home />
      </ProductState>
    </>
  )
}

export default App
