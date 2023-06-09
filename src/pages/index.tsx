import Head from 'next/head'
// import Image from 'next/image'
import Hero from '../../components/Hero'
import Instagram from '../../components/Instagram'
import Slider from '../../components/Slider'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Photography App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Hero heading='Captur Photography'  message='I capture moments in nature and keep them alive'/>
      <Slider/>
      <Instagram />
         </>
  )
}
