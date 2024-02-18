import { GetStaticProps, NextPage } from 'next';
import Layout from '../components/Layout';
import { Post as PostInterface } from '../interfaces/posts';
import Post from '../components/Post';
import styles from '../styles/grid.module.css';

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
  posts: PostInterface[]
}

const Blog = ({posts}: BlogProps) => {

  return (
    <>
      <Layout
        title={'Blog'}
        description={'Blog de cervezas, Brewtopia, tienda de cervezas'}
      >
        <main className="container">
          <h1 className="heading">Blog</h1>

          <div className={styles.grid}>
            {
              posts.map(post => (
                <Post 
                  key={post.id}
                  post={post.attributes}
                />
              ))
            }
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Blog;
