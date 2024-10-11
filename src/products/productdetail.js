import React ,{useContext} from 'react'
import {useParams} from 'react-router-dom'
import {ProductContext,CartContext} from '../head/context.js'
import './product.css'



const Detail=()=>{
  const {store_1,subtract} = useContext(ProductContext)
  const {addItem} = useContext(CartContext)
  const handleAdd=(product)=>{
    addItem(product)
    subtract(product)
  }

  const {fob,category} = useParams()
  

  const catData = store_1.filter((item)=>item.category===category)
  const product = catData.find((item)=> item.fob ===fob)



  return(
    <div className='detail-container'>
      <img src={product.imageSrc} alt={product.title} style={{width:400,height:400}}/>
      <h1 className='detail-title'>{product.name}</h1>
      <h2 className='detail-quantity'>{product.quantity}</h2>
      <h2 className='detail-price'>${product.price}</h2>

      <button className='add-to-cart-button' onClick={()=>handleAdd(product)}>add to the cart</button>

    </div>
  )
}
export default Detail