import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={`container ${styles.content}`}>

        <div className={styles.footer_logo_nav_box}>

          <Link href="/">
            <a>
              <Image src="/img/logo.svg" width={50} height={94} alt="Logo" />
            </a>
              
          </Link>

          <nav className={styles.nav}>

            <Link href="/">Inicio</Link>

            <Link href="/tienda">Tienda</Link>

            <Link href="/blog">Blog</Link>

            <Link href="/nosotros">Nosotros</Link>

          </nav>

        </div>

        <p className={styles.copyright}>Copyright © { new Date().getFullYear() }. Todos los derechos reservados.</p>

      </div>

    </footer>
  );
};

export default Footer;
