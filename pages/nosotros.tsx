import { NextPage } from 'next';
import Layout from '../components/Layout';
import Image from 'next/future/image';
import styles from '../styles/nosotros.module.css';

const Nosotros: NextPage = () => {
  return (
    <>
      <Layout
        title={'Nosotros'}
        description={'Sobre nosotros, Brewtopia, tienda de cervezas'}
      >
       <main className='container'>

        <h1 className='heading'>Nosotros</h1>

        <div className={styles.content}>

          <Image 
            src="/img/nosotros.jpg" 
            width={800} 
            height={525} 
            alt='Imagen sobre Nosotros' 
            priority={true}
          />

          <div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis massa eget neque ornare interdum. Integer id egestas augue, sit amet malesuada eros. Integer iaculis a dui ut interdum. Maecenas vitae enim vel dui blandit ornare eu id quam. Morbi justo eros, mollis vel molestie in, blandit ut velit. Nulla non magna urna.
            </p>

            <p>
              Sed a faucibus sem, vitae porttitor orci. Nullam sagittis purus eu iaculis consequat. Phasellus commodo lectus ut sapien pretium sodales. Aliquam bibendum in magna ut ultricies. Nulla facilisi. Cras consectetur odio at eros condimentum ullamcorper. Ut ornare, nulla in tincidunt dignissim, lacus orci feugiat nunc, quis semper enim sem ac magna.
            </p>

          </div>

        </div>

       </main>
       
      </Layout>
    </>
  );
};

export default Nosotros;
