import ProductCard from "./ProductCard";
import useFetch from "../../hooks/useFetch";

export default function ProductPage() {
  const { receviedData, isLoading } = useFetch(
    "https://67c7c86ec19eb8753e7aba01.mockapi.io/products"
  );

  return (
    <main className="py-12 bg-gray-50 min-h-screen">
      {isLoading && (
        <p className="text-center text-3xl text-indigo-500">
          Đang tải dữ liệu, vui lòng chờ....
        </p>
      )}

      {!isLoading && (
        <div className="max-w-6xl mx-auto px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {receviedData.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      )}
    </main>
  );
}
