import React , {useState,useContext} from 'react';
import {useNavigate,Link} from 'react-router-dom'

import SearchField from './search.js'
import Cart from './cart.js'

import Saving from './saving.js'
import Deliver from './deliver.js'
import {CartContext} from './context.js'
import '../header.css'






const Head = () => {
  const navigate=useNavigate()
  const [searchWord,setSearchWord] = useState('')
  const [selected,setSelected] = useState('')
  const {toggleCart} = useContext(CartContext)

  const handleSearch=(e)=>{
    setSearchWord(e.target.value)
  }
  const handleResult=()=>{
    navigate(`/search?query=${searchWord}`)
  }
 
  

  const handleChange=(e)=>{
    const selected = e.target.value
    setSelected(selected)
    if(selected){
      navigate(`/${selected}`)
    }
  }



return(



  <div className='header'>
  <header>
      <Link to='/'><button className='btn-1'>BABIL</button></Link>
      
      <div className="search-bar">
          <SearchField onClick={handleResult} onChange={handleSearch} value={searchWord} />
      </div>  
      
      <div>
          <select className="account-options" onChange={handleChange} value={selected}>
              <option defaultValue='Profile'>My account</option>
              <option value='login'>Log In</option>
              <option value='register'>Register</option>
              <option value='log out'>Log Out</option>
          </select>
      </div>

      <Saving />
      <Deliver />
      <Cart />

      <div>
          <button className="cart-button" onClick={toggleCart}>
              <i className="fas fa-shopping-cart"></i> 
          </button>
      </div>
  </header>
</div>
)
}

export default Head
