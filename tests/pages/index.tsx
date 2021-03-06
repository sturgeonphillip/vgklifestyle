import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = () => {
  const funny = (str: string, n: number): boolean => {

    return str.length === n ? true : false;
  }
  return (
    <>
      <main>
        <div className='h-[100vh] flex flex-col justify-center align-middle text-center'>
          <h1 className='text-[72px] bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-extrabold'>
            Batteries Included Next.js
          </h1>
          <h2 className='text-2xl max-w-md mx-auto'>
            A Next.js Boilerplate with TypeScript, Tailwind CSS, and testing
            suite enabled
          </h2>
        </div>
      </main>
    </>
  );
}


export default Home;
