import React  from 'react'
import '../header.css'



const SearchField=({onChange,value,onClick})=>{

  
  return(
    
   
    <div >
      <select className='sel'>
        <option>All</option>
      </select>
      <input className='input-1' placeholder='Search... ' type='text' onChange={onChange} value={value} />
      <button onClick={onClick} className='btn-2'> <i className="fas fa-search"></i> </button>
    </div>
      
  );
}
export default SearchField