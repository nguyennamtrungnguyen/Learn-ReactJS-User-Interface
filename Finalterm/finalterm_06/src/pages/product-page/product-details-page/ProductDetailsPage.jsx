// src/pages/ProductDetails.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await fetch(`https://67c7c86ec19eb8753e7aba01.mockapi.io/products/${id}`)
        .then((res) => res.json())
        .then(setProduct)
        .catch(console.error);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8 space-y-6">
        {isLoading && (
          <p className="text-center text-3xl text-indigo-500">
            Đang tải dữ liệu, vui lòng chờ....
          </p>
        )}

        {!isLoading && product && (
          <>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>
            <div className="text-sm text-gray-500">
              <p>
                <span className="font-semibold">Chất liệu:</span>{" "}
                {product.material}
              </p>
              <p>
                <span className="font-semibold">Nhà cung cấp:</span>{" "}
                {product.provider}
              </p>
              <p>
                <span className="font-semibold">Nơi xuất xứ:</span>{" "}
                {product.origin}
              </p>
            </div>
            <Link
              to="/products"
              className="inline-block mt-4 text-indigo-600 hover:underline"
            >
              &larr; Quay lại danh sách
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
