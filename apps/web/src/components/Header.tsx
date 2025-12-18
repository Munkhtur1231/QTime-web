import Link from 'next/link';
import Image from 'next/image';
import Nav from './Nav';
import MobileNav from './MobileNav';

export default async function Header() {
  return (
    <header className="py-2 bg-foreground xl:py-4">
      <div className="container text-white mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex items-center gap-2 shrink">
          <Image
            src="/logo.png"
            alt="logo"
            width={48}
            height={48}
            className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl"
          />
          <h1 className="text-lg xl:text-2xl font-bold leading-tight flex flex-col ">
            <span>Radnaa&apos;s</span>
            <span>
              Directory <span className="text-primary">.</span>
            </span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
