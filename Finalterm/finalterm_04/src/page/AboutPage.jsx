const AboutPage = () => {
  return (
    <section className="px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Us
        </h1>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Đây là trang giới thiệu. Trang này dùng để mô tả thông tin về website,
          dự án hoặc nhóm phát triển.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 bg-white rounded-xl shadow">
            <h2 className="font-semibold text-xl text-gray-800">Frontend</h2>
            <p className="mt-3 text-gray-600">
              Xây dựng giao diện bằng React và TailwindCSS.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h2 className="font-semibold text-xl text-gray-800">Router</h2>
            <p className="mt-3 text-gray-600">
              Quản lý chuyển trang bằng React Router DOM.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h2 className="font-semibold text-xl text-gray-800">Layout</h2>
            <p className="mt-3 text-gray-600">
              Dùng Header, Footer và Outlet để tạo bố cục chung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
