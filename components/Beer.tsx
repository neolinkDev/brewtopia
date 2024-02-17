import Image from 'next/future/image';
import { BeerAttributes } from '../interfaces/cervezas';
import Link from 'next/link';
import styles from '../styles/cervezas.module.css';

interface BeerListProps {
  beer: BeerAttributes;
}

const Beer = ({ beer }: BeerListProps) => {
  
  const { name, price, style, url, image } = beer;

  return (
    <div className={styles.cerveza}>
    
      <div className={styles.img_box}>
        <Image
          src={image.data.attributes.url}
          width={154}
          height={298}
          alt={`Imagen cerveza ${name}`}
        />
      </div>

      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.style}>{style}</p>
        <p className={styles.price}>${price}</p>

        <Link href={`/cervezas/${url}`}>
          <a className={styles.link}>Ver Cerveza</a>
        </Link>
      </div>

    </div>
  );
};

export default Beer;
