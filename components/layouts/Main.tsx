import React from 'react'
import NavigationBar from '../navigation'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'

interface Props {
    children: any
}

export const MainLayout = (props: Props) => {
  return (
    <>
     <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <NavigationBar />
    {props.children}
    <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}