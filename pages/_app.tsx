import { useState } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CartItem, QuantityUpdate } from '../interfaces';
import { ID } from '../interfaces/interfaces';


function MyApp({ Component, pageProps }: AppProps) {

  const [cart, setCart] = useState<CartItem[]>([]);

  

  const addCart = (beer: CartItem) => {
    // Comprobar si la guitarra ya esta en el carrito...
    if (cart.some((beerState) => beerState.id === beer.id)) {
      // Iterar para actualizar la cantidad
      const updateCart = cart.map((beerState) => {
        if (beerState.id === beer.id) {
          beerState.quantity = beer.quantity;
        }
        return beerState;
      });

      // Se asigna al array
      setCart([...updateCart]);
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      // En caso de que el articulo no exista, es nuevo y se agrega
      setCart([...cart, beer]);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  const updateQuantity = (beer: QuantityUpdate) => {

    const updateCart = cart.map( beerState => {

      if(beerState.id === beer.id ) {
        beerState.quantity = beer.quantity
      } 
      return beerState
    })

    setCart(updateCart)
    window.localStorage.setItem('cart', JSON.stringify( cart ));
  }

  const deleteItem = (id: ID) => {
    const updateCart = cart.filter( item => item.id != id)
    setCart(updateCart)
    window.localStorage.setItem('carrito', JSON.stringify( cart ));
}

  // const addCart = (beer: CartItem) => {

  //   setCart((prevCart) => {

  //     // Check if the beer is already in the shopping cart...
  //     if (prevCart.some((beerState) => beerState.id === beer.id)) {
  //       // Iterate to update the quantity
  //       const updateCart = prevCart.map((beerState) => {
  //         if (beerState.id === beer.id) {
  //           return { ...beerState, quantity: beer.quantity };
  //         }
  //         return beerState;
  //       });

  //       // It is assigned to the array
  //       localStorage.setItem('cart', JSON.stringify(updateCart));
  //       return updateCart;
  //     } else {
  //       // If the item does not exist, it is a new item and is added.
  //       const newCart = [...prevCart, beer];

  //       localStorage.setItem('cart', JSON.stringify(newCart));
  //       return newCart;
  //     }
  //   });
  // };

  return <Component {...pageProps} 
    cart={cart} 
    addCart={addCart} 
    updateQuantity={updateQuantity}
    deleteItem={deleteItem}
  />;
}

export default MyApp;
