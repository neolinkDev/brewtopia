import { ReviewData } from '../interfaces/review';

import styles from '../styles/review.module.css';

interface ReviewProps {
  review: ReviewData;
}

const Review = ({ review }: ReviewProps) => {

  const { content, image, title } = review.attributes;

  return (
    <section className={`${styles.review} review`}>
      <style jsx>
        {`
          .review {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${image.data.attributes.url});
          }
        `}
      </style>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <h2 className="heading">{title}</h2>
          <p>{content[0].children[0].text}</p>
        </div>
      </div>
    </section>
  );
};

export default Review;
