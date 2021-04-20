import Head from 'next/head'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>komU</title>
        <link rel="icon" href="/favicon.ico" />
        
        
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">komU</a>
        </h1>

        <p className={styles.description}>
          komU adalah sebuah platform ....
          
        </p>
        

        <p className={styles.description}>
          Get started by click the button below!
          
        </p>

        <a href="/start"><button type="button" class="btn btn-primary" href="/start">Start!</button></a>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
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
