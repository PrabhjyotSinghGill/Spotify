import Head from 'next/head';
import Sidebar from "../components/Sidebar.jsx";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/*Sidebar */}
        <Sidebar></Sidebar>
        {/*Center */} 
      </main>
      <div>
        {/*Player*/}
      </div>
    </div>
  )
}
