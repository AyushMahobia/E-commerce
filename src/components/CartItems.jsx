import React, { useContext } from 'react'
import context from '../context/Context'

const CartItems = () => {
  const { cartItems } = useContext(context);

  return (
    <>
      <h1>Hii</h1>
      {
        cartItems.map(item => {
          return (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <h3>{item.quantity}</h3>
            </div>
          )
        })
      }
    </>
  )
}

export default CartItems
