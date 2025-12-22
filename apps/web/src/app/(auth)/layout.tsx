import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        {/* Left side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-foreground/5 border-r border-border">
          <div className="max-w-md px-8">
            <h1 className="text-4xl mb-6 font-bold text-foreground tracking-tight">
              Хайраар бүтээв ❤️
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Өөрт ойрхон бизнесүүдтэй харьцаарай
            </p>
            <div className="mt-12 h-px w-16 bg-primary" />
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="w-full max-w-md">
            {/* Mobile branding */}
            <div className="lg:hidden text-center mb-8">
              <Link href="/" className="inline-block">
                <h1 className="text-2xl font-bold text-foreground mb-1">
                  Qtime 
                </h1>
              </Link>
              <p className="text-muted text-sm">
                Өөрт ойрхон бизнесүүдтэй холбогдоорой
              </p>
            </div>

            {/* Form container */}
            <div className="bg-background border border-border rounded-md p-6 sm:p-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
