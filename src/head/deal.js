import React ,{useContext} from 'react'
import {ProductContext,CartContext} from './context.js'
import '../products/product.css'



const Deal=()=>{
  const {store_2,subtract} = useContext(ProductContext)
  const {addItem} = useContext(CartContext)
  const handleAdd=(product)=>{
    subtract(product)
    addItem(product)
  }

  return(
    <div className='deal-container'>
      {store_2.map((product)=><div className='deal-card'>
      
        <h1>{product.name}</h1>
        <h2>{product.quantity}</h2>
        <h2>${product.price}</h2>
        <h2>{product.category}</h2>
        <button className='add-to-card' onClick={()=> handleAdd(product)}>Add to the cart</button>
        </div>
        

      
      )}
    </div>
  )
  
}
export default Deal