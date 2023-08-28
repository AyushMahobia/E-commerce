import React from 'react'
import context from '../context/Context'

const CartItems = () => {
  const { cartItems } = useContext(context);

  return (
    <>
      {cartItems.map((item, ind) => {
        return (<div key={ind}>
          <h1>{item.title}</h1>
          <p>{item.prize}</p>
          <p>{item.quantity}</p>
          <button>Buy now</button>
        </div>
        )
      })}
    </>
  )
}

export default CartItems
