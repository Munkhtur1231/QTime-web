import Link from 'next/link';

export default function RoleSelectionPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(190deg, rgba(10,10,18,0.55), rgba(10,10,18,0.75)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80')",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.04),transparent_25%)]" />
      <div className="relative max-w-3xl w-full">
        <div className="absolute inset-0 blur-[120px] opacity-50 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="relative bg-white/45 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl px-6 py-8 md:px-12 md:py-10">
          <div className="space-y-5 md:space-y-6 mb-8 md:mb-10">
            <div>
              <div className="inline-flex items-center gap-3 bg-white/15 rounded-full px-4 py-2 border border-white/20 text-white/80 text-xs uppercase tracking-wide">
                ⏱️ QTime • Цаг захиалга
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white mt-4 drop-shadow-sm leading-tight">
              Цаг захиалгын платформ
              </h1>
              <p className="text-white/80 mt-3 text-sm md:text-base max-w-3xl leading-relaxed">
                Үйлчилгээ захиалах эсвэл бизнесээ удирдах сонголтоо хийнэ үү. Цаг
                захиалга, хуваарь, хэрэглэгчтэй харилцах бүх хэрэгслийг нэг дороос.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-5">
            <Link
              href="/customer"
              className="group p-4 md:p-5 rounded-2xl bg-white text-gray-900 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 border border-white/60"
            >
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 md:h-14 md:w-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-lg md:text-2xl text-white shadow-md">
                  👤
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-bold">Хэрэглэгч</h3>
                  <p className="text-gray-600 text-sm md:text-base mt-1">
                    Үйлчилгээ хайх, цаг захиалах, байрлал харах
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/auth/login"
              className="group p-4 md:p-5 rounded-2xl bg-white text-gray-900 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 border border-white/60"
            >
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 md:h-14 md:w-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-lg md:text-2xl text-white shadow-md">
                  🏢
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-bold">
                    Бизнес эзэмшигч
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mt-1">
                    Захиалга удирдах, статистик харах, үйлчилгээ нэмэх
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* <div className="mt-8 grid md:grid-cols-3 gap-4 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-lg">⚡</span> Шуурхай цаг захиалга
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🛡️</span> Найдвартай нэвтрэлт ба эрх
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">📊</span> Бодит цагийн тайлан
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
}
