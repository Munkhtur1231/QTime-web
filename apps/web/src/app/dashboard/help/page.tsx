'use client';

export default function HelpPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="bg-white p-5 rounded-2xl shadow-sm mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>
          <p className="text-gray-500 text-sm">Тусламж ба дэмжлэг</p>
        </div>
      </div>
      <div className="bg-white p-12 rounded-2xl shadow-sm text-center">
        <div className="text-6xl mb-4">❓</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Need Help?</h3>
        <p className="text-gray-500 mb-6">
          Асуулт байвал бидэнтэй холбогдоно уу
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
          Холбоо барих
        </button>
      </div>
    </div>
  );
}
