import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo Application',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
            <div>
              <Header/>
               {children}
            </div>
        </Layout>
        
      </body>
    </html>
  )
}
