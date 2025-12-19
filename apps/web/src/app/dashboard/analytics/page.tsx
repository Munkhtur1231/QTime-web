'use client';

export default function AnalyticsPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="bg-white p-5 rounded-2xl shadow-sm mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-500 text-sm">Дэлгэрэнгүй тайлан ба шинжилгээ</p>
        </div>
      </div>
      <div className="bg-white p-12 rounded-2xl shadow-sm text-center">
        <div className="text-6xl mb-4">📊</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Analytics Dashboard</h3>
        <p className="text-gray-500">Дэлгэрэнгүй тайлан ба шинжилгээ</p>
      </div>
    </div>
  );
}
