import Head from 'next/head';
import styles from '@/assets/styles/layout.module.scss';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title></title>
      </Head>

      <main className={styles.main}>{children}</main>

      <footer></footer>
    </div>
  );
};

export default Layout;
