import { getImageProps } from 'next/image';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ');
      return `url("${url}") ${dpi}`;
    })
    .join(', ');
  return `image-set(${imageSet})`;
}

export default function FirstSearch() {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: '',
    width: 1000,
    height: 1000,
    src: '/bgsearch.png',
  });
  const backgroundImage = getBackgroundImage(srcSet);
  const style = { backgroundImage };

  return (
    <main
      style={style}
      className="h-[450px] w-full flex items-start justify-center bg-cover bg-center"
    >
      <div className="max-w-3xl flex flex-col gap-2 items-center justify-center mx-10">
        <h1 className="text-5xl mt-10 xl:mt-20 [-webkit-text-stroke:1px_green] font-bold text-black text-center">
          Итгэж болох компаниа олоорой
        </h1>
        <h2 className="text-black font-semibold text-2xl text-center">
          Хайх, унших, сэтгэгдэл бичих
        </h2>
        <Link
          href="/yellow-books/search"
          className="group shadow-xl cursor-pointer py-4 mt-5 xl:mt-10 px-6 rounded-4xl bg-background w-full flex items-center justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:bg-secondary/60"
        >
          <div className="text-muted group-hover:text-white transition-colors duration-300">
            Хүссэн газраа хайх..
          </div>
          <div className="bg-secondary p-2 text-white rounded-full transition-transform duration-300 group-hover:rotate-12">
            <CiSearch className="size-8" />
          </div>
        </Link>
      </div>
    </main>
  );
}
