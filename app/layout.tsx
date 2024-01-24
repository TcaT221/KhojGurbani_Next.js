import type { Metadata } from 'next'
import { Poppins, Tinos} from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { AudioPlayerProvider } from '@/contexts/AudioPlayerContext';
import dynamic from 'next/dynamic'

import { SpeedInsights } from '@vercel/speed-insights/next';
import { SessionProvider } from 'next-auth/react';

const AudioPlayer = dynamic(() => import('@/components/AudioPlayer'), { ssr: false });


const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: '400'
});

export const tinos = Tinos({
  subsets: ['latin'],
  variable: '--font-tinos',
  display: 'swap',
  weight: '700'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <AudioPlayerProvider>
        <body className="flex flex-col min-h-screen">
          <SessionProvider>
            <ToastContainer />
            <header>
              <NavBar />
            </header>
            <main className="grow">
              {children}
            </main>
            <footer>
              <Footer />
            </footer>
            <AudioPlayer />
            <SpeedInsights />
          </SessionProvider>
        </body>
      </AudioPlayerProvider>
    </html>
  )
}
