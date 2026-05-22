import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await fetch("https://67c7c86ec19eb8753e7aba01.mockapi.io/products")
        .then((res) => res.json())
        .then(setData)
        .catch(console.error);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <main className="py-12 bg-gray-50 min-h-screen">
      {isLoading && (
        <p className="text-center text-3xl text-indigo-500">
          Đang tải dữ liệu, vui lòng chờ....
        </p>
      )}

      {!isLoading && (
        <div className="max-w-6xl mx-auto px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      )}
    </main>
  );
}
