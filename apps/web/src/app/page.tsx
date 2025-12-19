import Link from 'next/link';

export default function RoleSelectionPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700 p-8">
      <div className="bg-white p-12 rounded-3xl shadow-2xl max-w-md w-full text-center">
        <h1 className="text-5xl font-black bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-2">
          QTime
        </h1>
        <p className="text-gray-600 mb-10 text-lg">Цаг захиалгын систем</p>

        <div className="flex flex-col gap-4">
          {/* Customer Role */}
          <Link
            href="/customer"
            className="p-6 border-2 border-gray-200 rounded-2xl bg-white hover:border-indigo-500 hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center gap-4 text-left group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
              👤
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Хэрэглэгч
              </h3>
              <p className="text-gray-600 text-sm">
                Үйлчилгээ захиалах, цаг захиалах
              </p>
            </div>
          </Link>

          {/* Business Role */}
          <Link
            href="/auth/login"
            className="p-6 border-2 border-gray-200 rounded-2xl bg-white hover:border-indigo-500 hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center gap-4 text-left group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
              🏢
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Бизнес эзэмшигч
              </h3>
              <p className="text-gray-600 text-sm">
                Захиалга удирдах, статистик харах
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
