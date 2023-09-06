
import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dev Web',
  description: 'The Tech Agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
     
      <body className={inter.className}>
     <ThemeProvider>
   <AuthProvider>
     <div className=' max-w-[1366px] min-h-screen mx-auto my-0 py-0 px-16 flex flex-col justify-between'>
      <Navbar></Navbar>
        {children}
      <Footer></Footer>
      </div>
      </AuthProvider>
     </ThemeProvider>
      </body>
    </html>
  )
}
