import { useEffect, useState } from "react";
import WarehouseCard from "./WarehouseCard";

export default function WarehousePage() {
  const [warehouses, setWarehouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/warehouses")
      .then((res) => res.json())
      .then((data) => {
        setWarehouses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi khi tải dữ liệu kho:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-orange-50 min-h-screen">
      <h1 className="text-3xl font-bold text-orange-700 mb-6">
        Danh sách kho bãi
      </h1>
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {warehouses.map((w) => (
            <WarehouseCard key={w.id} warehouse={w} />
          ))}
        </div>
      )}
    </div>
  );
}
