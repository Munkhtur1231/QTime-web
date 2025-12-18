import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex flex-col justify-center items-center px-4 py-6 sm:px-6 lg:px-8">
        <h3 className="mb-3 text-lg sm:text-xl md:text-2xl">
          Өгөгдөл хоосон байна
        </h3>

        <iframe
          src="https://giphy.com/embed/g01ZnwAUvutuK8GIQn"
          className="w-full h-[300px] sm:h-[400px] lg:h-[500px] max-w-[800px]"
          allowFullScreen
        ></iframe>

        <p className="mt-2 mb-3 text-sm sm:text-base">
          <a
            href="https://giphy.com/gifs/high-quality-highqualitygifs-g01ZnwAUvutuK8GIQn"
            className="text-secondary hover:underline"
          >
            source: GIPHY
          </a>
        </p>

        <p className="mb-3 text-sm sm:text-base text-center">
          Уучлаарай, таны хайж байсан өгөгдөл хоосон байна. Нүүр хуудас руу
          буцах уу?
        </p>

        <Link
          href="/"
          className="btn bg-secondary text-white j px-4 py-2   rounded-xl shadow-sm"
        >
          БУЦАХ
        </Link>
      </div>
    </section>
  );
}
