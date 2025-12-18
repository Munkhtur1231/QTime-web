import Link from 'next/link';

export default async function TryOurBusiness() {
  return (
    <div className="bg-primary py-2 xl:py-5 rounded-xl shadow px-2 xl:px-10 flex flex-row justify-between items-center ">
      <div className="flex flex-col gap-0 leading-tight">
        <h4 className="text-lg text-black">
          Бизнесээ хөгжүүлэхийг хүсэж байна уу?
        </h4>
        <p className="text-black">
          Radnaa&apos;s Directory дээр өөрсдийн итгэлээ үнэлгээтэй цуг
          хөгжүүлээрэй
        </p>
      </div>
      <div className="">
        <Link
          href="/signin?isBusiness=true"
          className="text-secondary bg-white border-secondary border-2 px-4 py-2 rounded-xl hover:scale-105 transition-all duration-300"
        >
          Эхлэх
        </Link>
      </div>
    </div>
  );
}
