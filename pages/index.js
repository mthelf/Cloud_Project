import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { withAuthenticator } from '@aws-amplify/ui-react'
const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <div>Hello world!</div>
)
}

export default withAuthenticator(Home);