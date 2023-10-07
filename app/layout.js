import './globals.css'
import Nav from '@/components/layouts/headers/nav'

export const metadata = {
  title: 'Farly Wuwungan | Personal Portofolio',
  description: `Farly's Personal Portofolio`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-950`}>
        <Nav/>
        <div className='m-auto w-full max-w-[1024px]'>
          {children}
        </div>
      </body>
    </html>
  )
}
