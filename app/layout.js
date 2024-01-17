
import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog JSS',
  description: 'Blog JSS Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
      {children}
      </AuthProvider>
      </body>
    </html>
  )
}
