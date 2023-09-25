import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Aplicación Web de Gestión de Tareas - Created by @olivarezalexis_',
  icons: {
    icon: ['favicon.ico?v=4'],
    //// apple: '/apple-touch-icon.png?v=4',
    //// shortcut: ['/apple-touch-icon.png'],
  },
  //// manifest: '/apple-touch-icon.png',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
