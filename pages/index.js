import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import Provide from '../components/Provide'
import Statics from '../components/Statics'
import Advantages from '../components/Advantages'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='direction-rtl'>
        <Hero/>
        <Slider/>
        <Provide/>
        {/* <Statics/> */}
        <Advantages/>
      </main>

      
    </div>
  )
}
