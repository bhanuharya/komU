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
          <b>Komunikasikan perasaanmu untuknya, untukmu.</b>
        
          
        </p>
        <form class="form" action="https://docs.google.com/forms/d/e/1FAIpQLSd6c_laZNstz9lmQCibZo6bAPmz--7kkZzbhq0ZIBf5xyQiew/formResponse">
       
       
       
        <div className="form-komu">

        
<div className="komu-input">
{/* <label>Email</label> */}
<input name="entry.562937120" type="email" placeholder="Email yang dituju" required/>
</div>
<div className="komu-input">
{/* <label>Subject</label> */}
<input name="entry.172967941" type="text" placeholder="Subjek email" />

</div>
<div className="komu-input">
{/* <label>Message</label> */}

<input name="entry.545272999" type="text"  placeholder="Nama yang dituju" required/>
</div>
<div className="komu-input">
{/* <label>Message</label> */}

<input name="entry.763197166" type="text"  placeholder="Sapaan untukmu (Saya, Aku, Gue,...)" required/>
</div>
<div className="komu-input">
{/* <label>Message</label> */}

<input name="entry.1260721810" type="text"  placeholder="Sapaan untuknya (Anda, Kamu, Lo, ...)" required/>
</div>

<div className="komu-input">
{/* <label>Message</label> */}

<input name="entry.394017876" type="text"  placeholder="Perasaan positif apa yang kamu rasakan mengenai dirinya? Mengapa?" required/>
</div>

<div className="komu-input">
{/* <label>Message</label> */}

<input name="entry.1131511430" type="text"  placeholder="Perasaan negatif apa yang kamu rasakan mengenai dirinya? Mengapa?" required/>
</div>

<div className="komu-input">
{/* <label>Message</label> */}

<input name="entry.1055247069" type="text"  placeholder="Perubahan apa yang kamu harapkan dari dirinya?" required/>
</div>

<div className="komu-input">
{/* <label>Message</label> */}

<input name="entry.470800380" type="text"  placeholder="Apa yang menurutmu dapat kamu lakukan dalam mendukung perubahan tersebut?" required/>
</div>

<div className="komu-input">
{/* <label>Message</label> */}

<input name="entry.72497473" type="text"  placeholder="Untuk menutup pesanmu, hal positif apa yang ingin kamu katakan tentang dirinya?" required/>
</div>


</div>




<input style={{background:"#2db0ed", color:"white",  margin:"1.5rem auto"}} type="submit" value="Send" />


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
