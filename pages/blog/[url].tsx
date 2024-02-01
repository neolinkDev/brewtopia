import { GetServerSideProps } from 'next';
import Layout from '../../components/Layout';
import Image from 'next/future/image';
import { Post } from '../../interfaces/posts';
import { formatDate } from '../../utils/helpers';
import styles from '../../styles/blog.module.css';

export const getServerSideProps: GetServerSideProps = async ({
  query: { url },
}) => {
  const response = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=image`
  );

  const { data: post } = await response.json();

  return {
    props: {
      post,
    },
  };
};

interface PostProps {
  post: Post[];
}

const Post = ({ post }: PostProps) => {
  
  const {
    title,
    content,
    publishedAt,
    image,
  } = post[0].attributes;

  return (
    <Layout title={title}>
      <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image
          src={image.data.attributes.url}
          width={800}
          height={533}
          alt={`Imagen blog ${title}`}
        />

        <div className={styles.content}>
          <h3>{title}</h3>
          <p className={styles.date}>{formatDate(publishedAt)}</p>
          {
            content.map( (paragraph, i) => (
              <p key={i} className={styles.text}>{paragraph.children[0].text}</p>
            ))
          }          
        </div>
      </article>
    </Layout>
  );
};

export default Post;
