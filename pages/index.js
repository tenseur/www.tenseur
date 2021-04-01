import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className="bg-white h-screen justify-center items-center flex flex-col dark:bg-gray-800" >
      <Head>
        <title>tenseur</title>
        <meta name="description" content="tenseur website"/>
      </Head>
      <main className="flex flex-grow justify-center items-center text-center">
        <h1 className="dark:text-white font-bold text-8xl text-gray-800">tenseur.</h1>
      </main>
      <footer className="h-7"><small className="dark:text-gray-200 text-gray-600">&copy; tenseur 2021</small></footer>
    </div>
  )
}
