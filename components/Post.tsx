import Image from 'next/future/image';
import Link from 'next/link';
import { PostAttributes } from '../interfaces/posts';
import styles from '../styles/blog.module.css';
import { formatDate } from '../utils/helpers';

interface PostProps {
  post: PostAttributes;
}

const Post = ({ post }: PostProps) => {
  const { content: [paragraph], image, publishedAt, title, url } = post;
  

  return (
    <article>
      <Image
        src={image.data.attributes.formats.medium.url}
        width={750}
        height={500}
        alt={`Imagen blog ${title}`}
      />

      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}>{formatDate(publishedAt)}</p>
        <p className={styles.summary}>{paragraph.children[0].text}</p>
        {/* {
          content.map((paragraph, i) => (
            <p key={i} className={styles.summary}>{paragraph.children[0].text}</p>
          ))
        } */}
        <Link href={`/blog/${url}`}>
          <a className={styles.link}>
            Leer entrada
          </a>
        </Link>
      </div>
    </article>
  );
};

export default Post;
