import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Logan Knapp',
  description: 'Logan Knapp\'s personal website',
}

// <Header current_page="Home" /> is the navbar

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='w-full min-h-screen bg-gradient-to-br from-indigo-950 to-fuchsia-950'>
        {children}
      </body>
    </html>
  )
}
