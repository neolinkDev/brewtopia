import { GetStaticProps, NextPage } from 'next';
import Layout from '../components/Layout';
import { Post } from '../interfaces/posts';

export const getStaticProps: GetStaticProps = async () => {

  const response = await fetch(
    `${process.env.API_URL}/posts?populate=image`
  );
  const { data: posts } = await response.json();

  return {
    props: {
      posts,
    },
  };
};

interface BlogProps {
  posts: Post[]
}

const Blog = ({posts}: BlogProps) => {

  console.log(posts)
  return (
    <>
      <Layout
        title={'Blog'}
        description={'Blog de cervezas, Brewtopia, tienda de cervezas'}
      >
        <main className="container">
          <h1 className="heading">Blog</h1>
        </main>
      </Layout>
    </>
  );
};

export default Blog;
