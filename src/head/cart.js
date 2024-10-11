import React ,{useContext} from 'react'
import {CartContext} from './context.js'
import CartItem from './cart-item.js'
import '../cart.css'


const Cart = () => {
  const { items, toggleCart, isCartVisible } = useContext(CartContext);


  return (
    <>
    <div className={`overlay ${isCartVisible ? 'visible' : ''}`} onClick={toggleCart}></div>
    <div className={`cart-panel ${isCartVisible ? 'visible' : ''}`}>
      <button className="close-btn" onClick={toggleCart}>Close Cart</button>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        items.map((item) => <CartItem key={item.id} item={item} />)
      )}
      <p>Total: {items.reduce((acc,item)=>acc + (item.quantity * item.price),0)}</p>
      <div>
        <h1>Check Out</h1>
        <button >Check out</button>
      </div>
    </div>
  </>
);
};

export default Cart;
