import React ,{useContext} from 'react'
import {Link,useParams} from 'react-router-dom'

import {ProductContext} from '../head/context.js'
import './product.css'

const Products =()=>{
  const {category} = useParams()
  const {store_1} = useContext(ProductContext)
  const catData = store_1.filter((item)=>item.category===category)
  
  
  

  

  
  
  return(
    <div className='product-container'>
      {catData.map((product)=><Link className='product-link' style={{color:'black'}}to={`/${product.category}/${product.fob}`} key={product.fob}><div className='product-card' >
        <img src={product.imageSrc} alt={product.title} style={{width:100,height:100}}/>
        <h1>{product.name}</h1>
        <h2>${product.price}</h2>
        <h2>In Stock:{product.quantity}</h2>
       
      
      </div></Link>)}
    </div>
  )
  
}
export default Products