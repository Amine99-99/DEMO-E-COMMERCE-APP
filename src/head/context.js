import React ,{useState,createContext} from 'react'
import {store_1,store_2,store_3} from './arr.js'


export const ProductContext = createContext()
export const CartContext = createContext()
export const OfferContext = createContext();
export const AddContext = createContext();

export const ProProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addPro = (newProduct) => {
    setProducts([...products, newProduct]);
    
  };

  return (
    <AddContext.Provider value={{ products,setProducts, addPro }}>
      {children}
    </AddContext.Provider>
  );
};

export const OfferProvider = ({ children }) => {
  const [offers, setOffers] = useState([]);

  const addOffer = (product) => {
    setOffers((prevOffer) => {
      const existing = prevOffer.find((offer) => offer.name === product.name);
      if (existing) {
        return prevOffer.map((offer) =>
          offer.name === product.name
            ? { ...offer, quantity: offer.quantity + 1 }
            : offer
        );
      } else {
        return [...prevOffer, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <OfferContext.Provider value={{ offers, addOffer }}>
      {children}
    </OfferContext.Provider>
  );
};




export const ProductProvider=({children})=>{
  const [products,setProducts] = useState({store_1:[...store_1],store_2:[...store_2],store_3:[...store_3]})
  const subtract = (product) => {
    setProducts((prevProducts) => {
      const updatedProducts = { ...prevProducts }; 
      for (const key in updatedProducts) {
        updatedProducts[key] = updatedProducts[key].map((item) => 
          item.fob === product.fob ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return updatedProducts; 
    });
  }
  const returnProduct=(fob)=>{
    setProducts((prevProducts)=>{
      const updatedProducts = {...prevProducts}
      for(const key in updatedProducts){
         const existing = updatedProducts[key].find((product)=>product.fob===fob)
         if(existing){
          updatedProducts[key].map((product)=>product.fob===fob?
        {...product,quantity:product.quantity + 1}:product)
         }
      }
      return updatedProducts

    })
   

  }
  
  return(
    <ProductContext.Provider value={{store_1:products.store_1,store_2:products.store_2,store_3:products.store_3,subtract,returnProduct}} >
    {children}
    </ProductContext.Provider>
  )
}
export const CartProvider=({children})=>{
  const [items,setItems] = useState([])
  const [isCartVisible,setCartVisible] = useState(false)
  const addItem=(product)=>{
    setItems((prevItems)=>{
      const existing = prevItems.find((item)=>item.fob===product.fob)
      if(existing){
        return prevItems.map((item)=> item.fob===product.fob?
        {...item,quantity:item.quantity+1}:item)
      }else{
        return [...prevItems,{...product,quantity:1}]

      }
    })
    setCartVisible(true)
  }
  const toggleCart=()=>{
    setCartVisible((prev)=>!prev)
  }
  const removeFromCart=(fob)=>{
    setItems((prevItems)=>{
      return prevItems.map((item)=>item.fob===fob?
    {...item,quantity:item.quantity-1}:item).filter((item)=>item.quantity>0)
    })
  }

  return(
    <CartContext.Provider value={{items,addItem,toggleCart,isCartVisible,removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
}
