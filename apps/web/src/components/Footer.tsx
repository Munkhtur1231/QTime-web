import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-2 bg-foreground xl:py-4">
      <div className="container mt-10 text-white mx-auto flex   items-center px-4">
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
      </div>
      <div className="container text-white mx-auto flex   items-center px-4">
        <div className="flex flex-row justify-between gap-10 lg:gap-40">
          <div className="flex mt-10 flex-col gap-2">
            <Link className="text-white/80" href="/">
              Бидний тухай
            </Link>
            <Link className="text-white/80" href="/">
              Холбогдох
            </Link>
            <Link className="text-white/80" href="/">
              Блог
            </Link>
            <Link className="text-white/80" href="/">
              Гомдол
            </Link>
          </div>
          <div className="flex mt-10 flex-col gap-2">
            <Link className="text-white/80" href="/">
              Бизнесүүд
            </Link>
            <Link className="text-white/80" href="/">
              Бизнесээр нэвтрэх
            </Link>
            <Link className="text-white/80" href="/">
              Бизнесийн блог
            </Link>
            <Link className="text-white/80" href="/editor">
              Суперадмин булан
            </Link>
          </div>
        </div>
      </div>
      <div className="container text-white mx-auto flex   items-center px-4">
        <div className="flex mt-10 text-muted flex-row justify-between gap-10 lg:gap-40">
          2025. Зохиогчийн эрхээр хамгаалав
        </div>
      </div>
    </footer>
  );
}
