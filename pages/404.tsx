import Link from 'next/link';
import Layout from '../components/Layout';

const Page404 = () => {
  return (
    <Layout title="Page Not Found">

      <p className='error'>404 - NO ENCONTRADA</p>

      <Link href="/">
        <a className='error-link'>Ir a Inicio</a>
      </Link>
    </Layout>
  );
};

export default Page404;
