import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import Beer from '../components/Beer';
import { Beer as BeerInterface } from '../interfaces/cervezas';
import styles from '../styles/grid.module.css';

//
export const getServerSideProps: GetServerSideProps = async () => {

  const response = await fetch(
    `${process.env.API_URL}/cervezas?populate=image`
  );
  const { data: beers } = await response.json();

  return {
    props: {
      beers,
    },
  };
};

interface StoreProps {
  beers: BeerInterface[]
}

const Store = ({ beers }: StoreProps) => {

  return (
    <>
      <Layout
        title={'Tienda Virtual'}
        description={'Tienda Virtual, Brewtopia, tienda de cervezas'}
      >
        <main className="container">
          <h1 className="heading">Nuestras Cervezas</h1>

          <div className={styles.grid}>
            {
              beers.map( beer => (
                <Beer key={ beer.id } beer={ beer.attributes } />
              ))
            }
          </div>

        </main>
      </Layout>
    </>
  );
};

export default Store;
