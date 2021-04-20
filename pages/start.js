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
          <a href="/">komU</a>
        </h1>

        <p className={styles.description}>
          Ayo isi perasaan hati mu disini!
          
        </p>
        <form class="form" action="https://docs.google.com/forms/d/e/1FAIpQLSe70rvGG-HNzIT3mgG0gEZFmtYUOWGgZr5LmNtXnXrw0CQVdQ/formResponse">
       
       
       
        <div className="form-komu">

        
<div>
{/* <label>Email</label> */}
<input name="entry.803274866" type="email" placeholder="Email untuk orang yang kamu tuju" />
</div>
<div>
{/* <label>Subject</label> */}
<input name="entry.919176692" type="text" placeholder="Subjek email" />

</div>
<div>
{/* <label>Message</label> */}

<input name="entry.522405927" type="text"  placeholder="Pesan yang kamu ingin berikan" required/>
</div>


</div>




<input style={{background:"#0070f3", color:"white"}} type="submit" value="Send" />


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
