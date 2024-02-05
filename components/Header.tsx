import Link from 'next/link';
import Image from 'next/future/image';
import styles from '../styles/Header.module.css';
import { useRouter } from 'next/router';
import { ShoppingCartIcon } from './Icons';

const Header = () => {

  const router = useRouter();

  return (
    <header className={styles.header}>

      <div className={`container ${styles.menu_bar}`}>

        <Link href="/">
          <a className={styles.box_logo}>
            <Image src="/img/logo.svg" width={70} height={94} alt="Logo" />
            <h2 className={styles.alias}>Brewtopia</h2>
          </a>
        </Link>

        <nav className={styles.nav}>

          <Link href="/">
            <a className={ router.pathname === '/' ? styles.active : '' }>
              Inicio
            </a>
          </Link>

          <Link href="/tienda">
            <a className={ router.pathname === '/tienda' ? styles.active : '' }>
              Tienda
            </a>
          </Link>

          <Link href="/blog">
            <a className={ router.pathname === '/blog' ? styles.active : '' }>
              Blog
            </a>
          </Link>

          <Link href="/nosotros">
            <a className={ router.pathname === '/nosotros' ? styles.active : '' }>
              Nosotros
            </a>
          </Link>

          <Link href='/carrito'>
            <a>
              <ShoppingCartIcon />
            </a>
          </Link>

        </nav>
        
      </div>

    </header>
  );
};

export default Header;
