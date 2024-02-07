import Layout from '../components/Layout';
import styles from '../styles/carrito.module.css';

interface Props {}

const Carrito = (props: Props) => {
  return (
    <Layout title="Carrito de Compras">

      <main className="container">
        <h1 className="heading">Carrito</h1>

        <div className={styles.content}>

          <div className={styles.cart}>
            <h2>Artículos</h2>
          </div>

          <aside className={styles.summary}>
            <h3>Tu orden</h3>
            <p>Total a Pagar</p>
          </aside>
          
        </div>

      </main>


    </Layout>
  );
};

export default Carrito;
