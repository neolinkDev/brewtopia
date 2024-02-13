import Image from 'next/future/image';
import Layout from '../components/Layout';
import { CartItem, QuantityUpdate } from '../interfaces';
import { OPTION_VALUES } from '../consts/constants';
import styles from '../styles/carrito.module.css';

interface CarritoProps {
  cart: CartItem[]
  updateQuantity: (beer: QuantityUpdate) => void
}

const Carrito = ({cart, updateQuantity}: CarritoProps) => {
  return (
    <Layout title="Carrito de Compras">

      <main className="container">

        <h1 className="heading">Carrito</h1>

        <div className={styles.content}>
          <div className={styles.cart}>
            <h2>Artículos</h2>

            {cart.length === 0
              ? 'El carrito de compras está vacío'
              : cart.map((item) => (
                  <div key={item.id} className={styles.item}>
                    <div>
                      <Image
                        width={76}
                        height={156}
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <div>
                      <p className={styles.name}>{item.name}</p>

                      {/* <p>Cantidad: {item.quantity}</p> */}
                      <div className={styles.quantity}>
                        <p>Cantidad: </p>

                        <select
                          className={styles.select}
                          onChange={(e) =>
                            updateQuantity({
                              id: item.id,
                              quantity: parseInt(e.target.value),
                            })
                          }
                          value={item.quantity}
                        >
                          <option value={OPTION_VALUES.ONE}>1</option>
                          <option value={OPTION_VALUES.SIX}>6</option>
                          <option value={OPTION_VALUES.TWELVE}>12</option>
                          <option value={OPTION_VALUES.TWENTY_FOUR}>24</option>
                        </select>
                      </div>

                      <p className={styles.price}>
                        $<span>{item.price}</span>
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal: $<span>{item.quantity * item.price}</span>
                      </p>
                    </div>
                  </div>
                ))}
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
