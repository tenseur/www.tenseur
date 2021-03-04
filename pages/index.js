import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container} style={{backgroundColor: '#292929'}}>
      <Head>
        <title>tenseur</title>
      </Head>
      <h1 style={{color: "white"}}>tenseur.</h1>
    </div>
  )
}
