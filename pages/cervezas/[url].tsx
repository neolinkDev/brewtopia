import { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Beer } from '../../interfaces/cervezas';
import { ParsedUrlQuery } from 'querystring';
import Layout from '../../components/Layout';
import { OPTION_VALUES } from '../../consts/constants';
import Image from 'next/future/image';
import { CartItem } from '../../interfaces';
import styles from '../../styles/cervezas.module.css';


export interface IParams extends ParsedUrlQuery {
  url: string;
}

//
export const getStaticPaths: GetStaticPaths = async () => {

  const response = await fetch(`${process.env.API_URL}/cervezas`);
  const { data }: { data: Beer[] } = await response.json();

  const paths = data.map((cerveza) => ({
    params: {
      url: cerveza.attributes.url,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

//
export const getStaticProps: GetStaticProps = async (context) => {
  
  const { url } = context.params as IParams;

  // 'filters' filter beers by their url
  const response = await fetch(
    `${process.env.API_URL}/cervezas?filters[url]=${url}&populate=image`
  );

  const { data: beer } = await response.json();

  return {
    props: {
      beer,
    },
  };
};


interface ItemProps {
  beer: Beer[];
  addCart: (beer: CartItem) => void
}

//
const Item = ({ beer, addCart }: ItemProps) => {

  const [quantity, setQuantity] = useState(0);

  const { name, price, style, image } = beer[0].attributes;

  //
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(quantity < 1){
      alert('La cantidad no es válida');
      return;
    }

    //
    const selectedBeer: CartItem = {
      id: beer[0].id,
      image: image.data.attributes.url,
      name,
      price,
      quantity
    }

    // context in nextjs
    addCart(selectedBeer)

  }

  return (
    <Layout title={`Cerveza ${name}`} >
      <div className={styles.cerveza_flex}>
        {/* <div className={styles.content}> */}

        <div className={styles.img_box}>
          <Image
            src={image.data.attributes.url}
            width={198}
            height={406}
            alt={`Imagen cerveza ${name}`}
          />
        </div>

        <div className={styles.content}>
          <h3>{name}</h3>
          <p className={styles.style}>{style}</p>
          <p className={styles.price}>${price}</p>

          <form 
            className={styles.form}
            onSubmit={ handleSubmit }
          >
            <label htmlFor="quantity">Cantidad:</label>

            <select 
              id="quantity"
              onChange={e => setQuantity(+e.target.value)}
            >
              <option value={OPTION_VALUES.SELECT}>-- Seleccionar --</option>
              <option value={OPTION_VALUES.ONE}>1</option>
              <option value={OPTION_VALUES.SIX}>6</option>
              <option value={OPTION_VALUES.TWELVE}>12</option>
              <option value={OPTION_VALUES.TWENTY_FOUR}>24</option>
            </select>

            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Item;
