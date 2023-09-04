import React from 'react'
import '../Styles/home.css'
import Brands from '../components/Brands';
import HomePageCard from '../components/HomePageCard';
import Other from '../components/Other';
import Footer from '../components/Footer';
import HomeProducts from '../components/HomeProducts';
import { motion } from "framer-motion"
import Sales from '../components/Sales';
const Home = () => {

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="home-bg">
        <div className="container-home home-content">
          <h2>Raining Offers For Hot Summer!</h2>
          <h3>25% Off On All Products</h3>
          <div className="home-btns">
            <button className='home-btn home-btn-shop'>Shop Now</button>
            <button className='home-btn home-btn-find'>Find More</button>
          </div>
        </div>
      </div>
      <Brands />
      <HomePageCard />
      <HomeProducts />
      <Other />
      <Sales />
      <Footer />
    </motion.div>
  )
}

export default Home
