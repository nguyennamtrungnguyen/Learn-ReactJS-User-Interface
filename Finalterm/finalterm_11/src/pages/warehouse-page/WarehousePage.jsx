import { useDispatch } from "react-redux";
import useWarehouse from "../../hooks/useWarehouse";
import WarehouseCard from "./WarehouseCard";
import WarehouseForm from "./WarehouseForm";
import { useEffect } from "react";
import { fetchWarehouses } from "../../features/warehouseSlice";

export default function WarehousePage() {
  const { list, loading } = useWarehouse();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWarehouses());
  }, [dispatch]);

  return (
    <div className="p-6 bg-orange-50 min-h-screen">
      <h1 className="text-3xl font-bold text-orange-700 mb-6">
        Danh sách kho bãi
      </h1>
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <>
          <div className="w-2/3 mx-auto my-12">
            <WarehouseForm />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((w) => (
              <WarehouseCard key={w.id} warehouse={w} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
