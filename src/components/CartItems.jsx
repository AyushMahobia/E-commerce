import React, { useContext } from 'react'
import context from '../context/Context'

const CartItems = () => {
  const { cartItems } = useContext(context);

  return (
    <>
      <h1>hii</h1>
      <div >
        {
          cartItems.map((item, ind) => {
            return (
              <div key={ind}>
                <h1>{item.title}</h1>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default CartItems
