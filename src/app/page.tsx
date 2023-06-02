import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { Quicksand } from 'next/font/google';
import Top from '@/components/Top';
import SecondarySection from '@/components/SecondarySection';

export default function Home() {
  return (
    <main className=''>
    <Navbar />
    <Top />

    <SecondarySection 
        Subtitle='Farm, PvP e TWS' 
        title='Organização e Estratégia' 
        MainImg={'/images/288.jpg'} 
        Image1={'/images/289.jpg'} 
        Image2={'/images/289.jpg'} 
        Image3={'/images/289.jpg'} 
        Image4={'/images/289.jpg'} 
    />
    </ main>
  )
}
