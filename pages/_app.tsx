import { useEffect, useState } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CartItem, QuantityUpdate } from '../interfaces';
import { ID } from '../interfaces/interfaces';

function MyApp({ Component, pageProps }: AppProps) {

  const localStorageCart =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('cart')!) ?? []
      : [];

  const [cart, setCart] = useState<CartItem[]>(localStorageCart);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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
    
    const updateCart = cart.map((beerState) => {
      if (beerState.id === beer.id) {
        beerState.quantity = beer.quantity;
      }
      return beerState;
    });

    setCart(updateCart);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const deleteItem = (id: ID) => {
    const updateCart = cart.filter((item) => item.id != id);
    setCart(updateCart);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return isMounted ? (
    <Component
      {...pageProps}
      cart={cart}
      addCart={addCart}
      updateQuantity={updateQuantity}
      deleteItem={deleteItem}
    />
  ) : null;
}

export default MyApp;
