export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-extrabold text-white mb-4">
        Chào mừng đến với MyApp
      </h1>
      <p className="text-lg text-blue-100 mb-8">
        Ứng dụng React + React Router v7 với Tailwind CSS
      </p>
      <p
        to="/about"
        className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-lg hover:bg-indigo-50 transition"
      >
        Tìm hiểu thêm
      </p>
    </div>
  );
}
