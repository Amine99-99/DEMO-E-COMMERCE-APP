import React ,{useState} from 'react'
import { useNavigate} from 'react-router-dom'




const HeaderX =()=>{
  const navigate= useNavigate()
  const [selected,setSelected] = useState('')

  const handleCat=(e)=>{
    const selected=e.target.value
    setSelected(selected)
    if(selected){
      navigate(`/${selected}`)
    }
  }
  return(
    <div className='sub' style={{backgroundColor:'grey'}}>
      <select  value={selected} onChange={handleCat}>
        <option defaultValue='All departments'>All</option>
        <option value='Electronics'>Electronics</option>
        <option value='Sports'>Sport</option>
        <option value='Motors'>Motors</option>
        <option value='Jewelry'>Jewelry</option>
        <option value='Beauty'>Beauty</option>
      </select>
      <button onClick={()=>navigate('/trade')}>Upload</button>
      <button onClick={()=>navigate('/offer')}>Offers</button>
      
    </div>
  );
}
export default HeaderX