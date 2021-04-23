import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        
        <title>komU</title>
        <link rel="icon" href="/favicon.ico" />
        
        
      </Head>

      <main>
        <div className={styles.main && styles.verticalCenter1} >
        <Image
        src="/logofix.png"
        alt="Picture of the author"
        width={110}
        height={110}
      />
        <h1 className={styles.title} style={{fontWeight:"800"}}>

        <a href="/">Hi, aku komU!</a>
        </h1>

        <p className={styles.description}>
        
        </p>
        

        <p className={styles.description}>
        KomU adalah sebuah platform komunikasi untukmu yang ingin menyampaikan perasaanmu dengan lebih baik :)
          
        </p>

        
        <p className={styles.title2} style={{fontWeight:"800"}}>

        <a href="#middle">- ayo coba komU! -</a>
        </p>

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

        </div>
        <div style={{width:"80%", margin:"0 auto"}}>
        <hr style={{textAlign:"center", color:"#2db0ed", border:"2px"}}></hr>
        </div>
        
        <div id="middle" className={styles.verticalCenter2}>
          <div className={styles.descKomu} >
            <h1>
            I statement
            </h1>
            <p>
            alat komunikasi di mana kata ganti orang pertama digunakan (menggunakan "Saya" bukan “Anda") seperti "Saya terganggu oleh kebiasaan Anda" daripada "Anda memiliki kebiasaan buruk," sehingga  mengurangi negativitas dan kesan menyalahkan 
            </p>
          </div>
          <div className={styles.descKomu} >
            <h1>
            Sandwich Feedback
            </h1>
            <p>
            teknik yang terdiri dari menanggapi perilaku dengan membuat pernyataan positif tentang perilaku yang dilakukan di awal dan di akhir, dan memberikan kritik di antaranya
            </p>
            
          </div>
          <a href="/start" ><button type="button" class="btn btn-primary" href="/start" style={{fontSize:"20px", margin:"1rem"}}>Mulai!</button></a>

        </div>
      
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
