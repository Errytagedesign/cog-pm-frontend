// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import Navbar from "../../components/navbar";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Navbar />
     <hr className="my-2 border-1 border-hr"/>
    </>
  );
}
