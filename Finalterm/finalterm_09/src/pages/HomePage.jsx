import React from "react";

export default function HomePage() {
  return (
    <div>
      <section className="bg-orange-600 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">
            Quản lý kho bãi chuyên nghiệp, hiệu quả
          </h2>
          <p className="text-lg mb-8">
            Theo dõi hàng tồn kho, vận chuyển và lưu trữ dễ dàng với hệ thống
            hiện đại.
          </p>
          <a
            href="/register"
            className="bg-white text-orange-600 font-semibold px-6 py-3 rounded hover:bg-gray-100"
          >
            Bắt đầu ngay
          </a>
        </div>
      </section>

      <section id="features" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-12">Tính năng nổi bật</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded shadow-sm">
              <h4 className="font-semibold text-xl mb-2 text-orange-600">
                Theo dõi tồn kho
              </h4>
              <p>Quản lý số lượng, hạn sử dụng và vị trí sản phẩm trong kho.</p>
            </div>
            <div className="p-6 border rounded shadow-sm">
              <h4 className="font-semibold text-xl mb-2 text-orange-600">
                Nhập & xuất hàng
              </h4>
              <p>Tự động hóa quy trình nhập kho và xuất kho theo đơn.</p>
            </div>
            <div className="p-6 border rounded shadow-sm">
              <h4 className="font-semibold text-xl mb-2 text-orange-600">
                Báo cáo trực quan
              </h4>
              <p>
                Xem báo cáo hàng hóa, doanh thu và hiệu suất theo thời gian
                thực.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
