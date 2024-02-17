import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import Beer from '../components/Beer';
import Post from '../components/Post';
import { Beer as BeerInterface } from '../interfaces/cervezas';
import { Post as PostInterface } from '../interfaces/posts';
import { ReviewAttributes, ReviewData } from '../interfaces/review';
import styles from '../styles/grid.module.css'
import Review from '../components/Review';

//
export const getStaticProps: GetStaticProps = async () => {

  // urls
  const urlBeers  = `${process.env.API_URL}/cervezas?populate=image`;
  const urlPosts  = `${process.env.API_URL}/posts?populate=image`;
  const urlReview = `${process.env.API_URL}/resena?populate=image`;

  // fetching to urls
  const [responseCervezas, responsePosts, responseReview] = await Promise.all([
    fetch(urlBeers),
    fetch(urlPosts),
    fetch(urlReview)
  ]);

  // convert to json
  const [{ data: beers }, { data: posts }, { data: review }] = await Promise.all([
    responseCervezas.json(),
    responsePosts.json(),
    responseReview.json()
  ]);

  return {
    props: {
      beers,
      posts,
      review
    },
  };
};

interface HomeProps {
  beers: BeerInterface[]
  posts: PostInterface[]
  review: ReviewData
}

const Home = ({beers, posts, review }: HomeProps) => {

  return (
    <>
      <Layout
        title={'Inicio'} 
        description={'Brewtopia - Venta de cervezas y blog sobre la cultura cervecera'}
      >

        <main className='container'>

          <h1 className='heading'>Nuestras Cervezas</h1>
          
          <div className={styles.grid}>
            {
              beers.map( beer => (
                <Beer key={ beer.id } beer={ beer.attributes } />
              ))
            }
          </div>

        </main>

        <Review review={review} />

        <section className='container'>

          <h2 className='heading'>Blog</h2>

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

        </section>
        
      </Layout>
    </>
  );
};

export default Home;
