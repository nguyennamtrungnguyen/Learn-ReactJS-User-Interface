import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-blue-600">404</h1>

        <h2 className="mt-4 text-3xl font-semibold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-600">
          Trang bạn đang tìm kiếm không tồn tại.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Quay về trang chủ
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
