import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { FaGithub } from 'react-icons/fa';
import { TfiWorld } from 'react-icons/tfi';
import { TbFileCv } from 'react-icons/tb';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Campaign monitor web app',
  description: 'Simple web app for adding and deleting subscribers from a client list.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col h-screen">
          <div className="flex flex-1">
            <aside className="w-40 lg:w-56 bg-gray-800 text-white px-8 py-12 space-y-8">
              <Link href={'/'} className="text-2xl font-bold mb-8">
                GFilippos Margera App (Guide)
              </Link>
              <nav className="flex flex-col space-y-4">
                <Link href="/subscribers">Subscribers List</Link>
                <Link href="/subscriber/add">Add Subscriber</Link>
                <Separator />
                <div className="flex items-center justify-between gap-2">
                  <Link href="https://www.gfdevo.com" target="_blank" rel="noopener noreferrer">
                    My portfolio website
                  </Link>
                  <TfiWorld />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <Link href="https://github.com/GFilippos" target="_blank" rel="noopener noreferrer">
                    My Github page
                  </Link>
                  <FaGithub size={20} />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a href="/fg_resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </a>
                  <TbFileCv size={20} />
                </div>
              </nav>
            </aside>
            <main className="h-full flex flex-1">
              <div className="w-full h-screen flex justify-center items-center p-4 lg:p-16 pt-12 lg:pt-12">
                {children}
              </div>
            </main>
          </div>
          <footer className="flex justify-end h-16 gap-4 p-4 bg-gray-100 border-t-2 border-t-primary text-primary">
            <div className="text-center">
              <p>&copy; {new Date().getFullYear()} Margera Monitor App. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
