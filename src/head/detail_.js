import React ,{useContext} from 'react'
import {useParams} from 'react-router-dom'
import {ProductContext} from './context.js'


const DetailS=()=>{
  const {store_2} = useContext(ProductContext)
  const {id} =useParams()

  const product = store_2.find((item)=>item.id === id)
  return(
    
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'15px'}}>
        
        
          <h2>{product.quantity}</h2>
          <h2>${product.price}</h2>
         
      
         <button>add to the cart</button>

       
     
    </div>
  )
}
export default DetailS