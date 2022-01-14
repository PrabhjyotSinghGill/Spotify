import Head from 'next/head'
import Sidebar from "../components/Sidebar.js"
import Center from "../components/Center.js"

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/*Sidebar*/}
        <Sidebar></Sidebar>
        {/*Center*/}
        <Center></Center>
      </main>
      <div>{/*Player*/}</div>
    </div>
  )
}
