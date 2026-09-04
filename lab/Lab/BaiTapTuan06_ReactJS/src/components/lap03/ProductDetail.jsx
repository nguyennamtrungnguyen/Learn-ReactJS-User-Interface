import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded shadow">
      <img
        src={`https://picsum.photos/500/400?${id}`}
        className="rounded-lg"
      />

      <div>
        <h2 className="text-3xl font-bold mb-2">Product #{id}</h2>
        <p className="text-gray-500 mb-4">
          Mô tả sản phẩm rất xịn sò 😎
        </p>

        <p className="text-2xl text-blue-600 font-bold mb-6">$999</p>

        <div className="flex gap-3">
          <button className="bg-green-500 text-white px-6 py-2 rounded">
            Thêm vào giỏ
          </button>

          <button className="bg-blue-500 text-white px-6 py-2 rounded">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;