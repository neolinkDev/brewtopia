import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Beer } from '../../interfaces/cervezas';
import { ParsedUrlQuery } from 'querystring';

interface ItemProps {
  beer: Beer[];
}

interface IParams extends ParsedUrlQuery {
  url: string
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

export const getStaticProps: GetStaticProps = async (context) => {

  const { url } = context.params as IParams

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


const Item = ({ beer }: ItemProps) => {
  
  console.log(beer[0].attributes.name);

  const router = useRouter();
  // console.log(router)

  return <div>[url]</div>;
};

export default Item;
