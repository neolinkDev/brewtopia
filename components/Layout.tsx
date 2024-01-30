import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';


interface layoutProps {
  children?: React.ReactNode;
  title: string;
  description?: string;
}

const Layout = ({ children, title, description }: layoutProps) => {
  return (
    <>
      <Head>
        <title>{`Brewtopia — ${ title }`}</title>
        <meta name="description" content={ description } />
      </Head>

      <Header />
       
      { children }

      <Footer />
    </>
  );
};

export default Layout;
