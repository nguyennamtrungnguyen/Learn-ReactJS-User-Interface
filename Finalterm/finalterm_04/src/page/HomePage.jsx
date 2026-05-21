

const HomePage = () => {
  return (
    <section className="min-h-[70vh] bg-gray-50">
      {/* Navbar */}
    

      {/* Hero Section */}
      <div className="flex items-center justify-center px-6 py-24">
        <div className="max-w-4xl text-center">
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
            React + TailwindCSS
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Welcome to FinalTerm
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Đây là trang chủ của ứng dụng React Router dùng TailwindCSS. Giao
            diện hiện đại, responsive và dễ mở rộng.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-lg">
              Bắt đầu ngay
            </button>

            <button className="px-8 py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 transition">
              Xem thêm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
