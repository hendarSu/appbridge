import Head from 'next/head';

import styles from './../../styles/Home.module.css';
import Layout from '../../components/layout';

export default function Login() {
  return (
    <Layout>
      <div className={styles.container}>
      <Head>
        <title>WooBridge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>
          Login <a href="#">WooBridge!</a>
        </h1>
        <div className={styles.grid}>

          

        </div>
      </main>
    </div>
    </Layout>
  );
}
