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
        <script type="text/javascript" src="../form_script.js"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/">komU</a>
        </h1>

        <p className={styles.description}>
          Ayo isi perasaan hati mu disini!
          
        </p>
        {/* <div className={styles.web}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe70rvGG-HNzIT3mgG0gEZFmtYUOWGgZr5LmNtXnXrw0CQVdQ/viewform?embedded=true" width="650" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
        <div className={styles.mobile}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe70rvGG-HNzIT3mgG0gEZFmtYUOWGgZr5LmNtXnXrw0CQVdQ/viewform?embedded=true" width="330" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
         */}
        <form id="test-form">
  
  <div>
    <label>To (email address)</label>
    <input type="text" name="form_field_1" placeholder="Field 1"/>
  </div>

  <div>
    <label>subject</label>
    <input type="text" name="form_field_2" placeholder="Field 2"/>
  </div>
  
  <div>
    <label>message</label>
    <input type="text" name="form_field_3" placeholder="Field 3"/>
  </div>
  
  
  <div>
    <button type="submit"id="submit-form">Submit</button>
  </div>

</form>

        
        
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
