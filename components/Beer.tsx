import Image from 'next/future/image';
import { BeerAttributes } from '../interfaces/cervezas';
import Link from 'next/link';

interface BeerListProps {
  beer: BeerAttributes;
}

const Beer = ({ beer }: BeerListProps) => {
  const { name, price, style, url, image } = beer;

  return (
    <div>
      <Image
        src={image.data.attributes.formats.thumbnail.url}
        width={76}
        height={156}
        alt={`Imagen cerveza ${name}`}
      />

      <div>

        <h3>{ name }</h3>
        <p>{ style }</p>
        <p>${ price }</p>

        <Link href={`/cervezas/${url}`}>
          <a>
            Ver Cerveza
          </a>
        </Link>

      </div>
      {/* <Image src={image.data.attributes.url} width={198} height={156} alt={`Imagen cerveza ${name}`} /> */}
    </div>
  );
};

export default Beer;
