import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Head from './head/header.js'
import HeaderX from './head/header-.js'
import Deal from './head/deal.js'
import Products from './products/product.js'
import Detail from './products/productdetail.js'
import Trade from './head/trade.js'
import Offer from './head/offer.js'
import SearchResult from './head/result.js'

import Register from './head/register.js'
import Login from './head/login.js'
import Cart from './head/cart.js'

import {CartProvider,ProductProvider,ProProvider,OfferProvider} from './head/context.js'



const App=()=>{
  return(
    <ProductProvider>
    <CartProvider>
      <ProProvider>
        <OfferProvider>

    <Router>
   
      <Head/>
      
      <HeaderX/>
      
      
      <Routes>
        <Route path='/' element={<Deal/>}/>
       
        <Route path='/:category' element={<Products/>}/>
        <Route path='/:category/:fob' element={<Detail/>}/>
        <Route path='/trade' element={<Trade/>}/>
        <Route path='/offer' element={<Offer/>}/>
        <Route path='/search' element={<SearchResult/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
        
      </Routes>
      
    </Router>
        </OfferProvider>
       </ProProvider>
      </CartProvider>
      </ProductProvider>
  )
}
export default App