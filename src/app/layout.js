import './globals.css'
import { Inter } from 'next/font/google'
import Constellation from './components/Constellation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Logan Knapp',
  description: 'Logan Knapp\'s personal website',
}

// <Header current_page="Home" /> is the navbar

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='text-white font-mono w-full min-h-screen bg-gradient-to-t from-indigo-950 to-black'>
        <div className='-z-40'>
          <Constellation/>
        </div>
        {children}
      </body>
    </html>
  )
}
