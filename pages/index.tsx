import type { NextPage } from 'next';
// import Link from 'next/link';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout
        title={'Inicio'} 
        description={'Brewtopia - Venta de cervezas y blog sobre la cultura cervecera'}
      >
        <h1>Hello there!</h1>
        
      </Layout>
    </>
  );
};

export default Home;
