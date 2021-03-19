import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className="bg-white h-screen justify-center items-center flex dark:bg-gray-800" >
      <Head>
        <title>tenseur</title>
      </Head>
      <h1 className="dark:text-white font-bold text-8xl text-gray-800">tenseur.</h1>
    </div>
  )
}
