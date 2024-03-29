import Head from 'next/head'
import Sidebar from "../components/Sidebar.js"
import Center from "../components/Center.js"
import Player from "../components/Player.js"
import { getSession } from 'next-auth/react'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex'>
        {/*Sidebar*/}
        <Sidebar></Sidebar>
        {/*Center*/}
        <Center></Center>
      </main>
      <div className="sticky bottom-0">
        {/*Player*/}
        <Player></Player>
      </div>
    </div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context);
  
  return{
    props:{
      session,
    },
  };
}