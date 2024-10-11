import React ,{useContext} from 'react';
import {CartContext,ProductContext} from './context.js'


const CartItem = ({ item }) => {
  const {removeFromCart} = useContext(CartContext)
  const {returnProduct}= useContext(ProductContext)

  const handleRemove=(fob)=>{
    removeFromCart(fob)
    returnProduct(fob)
    
  }
  
  

  return (
    <div className="cart-item">
      <span>{item.name} (x{item.quantity})</span>
      <span>${(item.price * item.quantity)}</span>
      <button onClick={()=>handleRemove(item.fob)}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;
