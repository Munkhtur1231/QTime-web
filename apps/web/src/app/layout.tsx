import './globals.css';
import { JetBrains_Mono } from 'next/font/google';
import Providers from './providers';
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: 'Welcome to Q-Time',
  description: 'Welcome to Q-Time',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn">
      <body className={`${jetbrainsMono.variable} h-screen font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
