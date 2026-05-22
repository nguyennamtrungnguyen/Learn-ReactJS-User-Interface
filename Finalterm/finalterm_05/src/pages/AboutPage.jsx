// src/pages/AboutPage.jsx
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <section className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Về Chúng Tôi
          </h2>
          <p className="text-lg text-gray-600">
            MyApp được thành lập với sứ mệnh mang lại trải nghiệm web tối ưu,
            nhanh chóng và trực quan cho mọi người dùng.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
              Sứ mệnh của chúng tôi
            </h3>
            <p className="text-gray-700">
              Chúng tôi cam kết phát triển những ứng dụng chất lượng cao, hỗ trợ
              doanh nghiệp và cá nhân kết nối với khách hàng một cách hiệu quả
              nhất.
            </p>
          </div>
          <img
            src="./mission.png"
            alt="Mission"
            className="w-full rounded-lg shadow-md"
          />
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="./team.png"
            alt="Team"
            className="w-full rounded-lg shadow-md"
          />
          <div>
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
              Đội ngũ của chúng tôi
            </h3>
            <p className="text-gray-700">
              Đội ngũ MyApp gồm các kỹ sư, thiết kế và chuyên gia UX giàu kinh
              nghiệm, luôn sẵn sàng lắng nghe và hiện thực hóa ý tưởng của bạn.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
