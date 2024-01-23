import { NextPage } from 'next';
import Layout from '../components/Layout';

const Blog: NextPage = () => {
  return (
    <>
      <Layout
        title={'Blog'}
        description={'Blog de cervezas, Brewtopia, tienda de cervezas'}
      >
        <h1>Blog</h1>
      </Layout>
    </>
  );
};

export default Blog;
