import './globals.css';
import Header from '../components/Header';
import { JetBrains_Mono } from 'next/font/google';
import Footer from '../components/Footer';
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: 'Welcome to Business Directory',
  description: 'Welcome to Business Directory',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn">
      <body className={`${jetbrainsMono.variable} h-screen font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
