export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Trang bạn tìm không tồn tại</p>
      <a
        to="/"
        className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
      >
        Quay về Home
      </a>
    </div>
  );
}
