import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ReactNode } from 'react'

//@ts-ignore
import hljs_dark_theme from 'highlight.js/styles/dark.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pedro Ribeiro',
  description: 'Fullstack developer portfolio.',
}

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <style>{hljs_dark_theme}</style>
      </Head>
      <body className={inter.className+' h-screen'}>
        <div className='h-screen w-screen bg-gray-900 text-red-100'>
          {children}
          {modal}
        </div>
      </body>
    </html>
  )
}
