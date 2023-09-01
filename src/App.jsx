import './App.css'
import ProductState from './context/products/ProductState'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {

  return (
    <>
      <ProductState>
        <Router>
          <Navbar />
          <AnimatedRoutes />
        </Router>
      </ProductState>
    </>
  )
}

export default App
