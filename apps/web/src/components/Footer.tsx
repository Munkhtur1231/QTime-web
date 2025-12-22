import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-2 bg-foreground xl:py-4">
      <div className="container mt-10 text-white mx-auto flex   items-center px-4">
        <Link href="/" className="flex items-center gap-2 shrink">
          <svg
            className="w-10 h-10 xl:w-12 xl:h-12"
            viewBox="0 0 24 24"
            fill="url(#footer-gradient)"
          >
            <defs>
              <linearGradient
                id="footer-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#667eea" />
                <stop offset="100%" stopColor="#764ba2" />
              </linearGradient>
            </defs>
            <path d="M12 2 2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.86-.85-6-4.37-6-8.5V8.37l6-3.55 6 3.55V11.5c0 4.13-2.14 7.65-6 8.5z" />
          </svg>
          <h1 className="text-lg xl:text-2xl font-extrabold leading-tight flex flex-col bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            <span>QTime</span>
            <span className="text-sm text-white/80 font-medium">
              Цаг захиалгын систем
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
