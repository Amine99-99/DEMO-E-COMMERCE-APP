import React, { useState, useEffect,useContext } from 'react';
import { useLocation } from 'react-router-dom';

import {ProductContext,CartContext} from './context.js'



const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResult = () => {
  const {store_1,store_2,store_3,subtract} = useContext(ProductContext)
  const {addItem} = useContext(CartContext)
  const [results, setResults] = useState([]);
  const query = useQuery();
  const searchWord = query.get('query') || ''; 

  const allPro = store_1.concat(store_2,store_3);

  const handleAdd=(product)=>{
    addItem(product);
    subtract(product)
  }
  useEffect(() => {
    if (!allPro || allPro.length === 0) {
      setResults([]);
      return;
    }

    const filteredArr = allPro.filter((item) => {
      
      if (searchWord) {
        const matchSearch = item.name.toLowerCase().includes(searchWord.toLowerCase());
        return matchSearch;
      }
      return false; 
    });
    setResults(filteredArr);
  }, [searchWord,allPro]);

  return (
    <div>
      {results.length > 0 ? (
        results.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h2>{item.quantity}</h2>
            <h2>${item.price}</h2>
            <img
              src={item.imageSrc}
              alt={item.name}
              style={{ width: '200px', height: '200px' }}
            />
            <button onClick={()=>handleAdd(item)}>add to the cart</button>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResult;
