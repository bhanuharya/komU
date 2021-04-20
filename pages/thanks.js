import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>komU</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="jquery.min.js"></script>
       <script src="jquery.serialize-object.min.js"></script>
       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
       
        
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/">Terima Kasih</a>
        </h1>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/hnthalia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hanun Thalia, 2021{' '}
          
        </a>
      </footer>
    </div>
  )
}
