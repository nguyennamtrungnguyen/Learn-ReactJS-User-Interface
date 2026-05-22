import { useDispatch } from "react-redux";
import useWarehouse from "../../hooks/useWarehouse";
import WarehouseCard from "./WarehouseCard";
import WarehouseForm from "./WarehouseForm";
import { useEffect } from "react";
import { fetchWarehouses } from "../../features/warehouseSlice";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function WarehousePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { list, loading } = useWarehouse();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWarehouses());
  }, [dispatch]);

  const handlePathing = () => {
    if (location.pathname === "/warehouse/add") {
      navigate("/warehouse");
    } else navigate("/warehouse/add");
  };

  return (
    <div className="p-6 bg-orange-50 min-h-screen">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold text-orange-700 mb-6">
          Danh sách kho bãi
        </h1>
        <button
          onClick={handlePathing}
          className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded"
        >
          {location.pathname === "/warehouse/add"
            ? "Đóng biểu mẫu thêm"
            : "Thêm kho hàng"}
        </button>
      </div>
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <>
          <div className="w-2/3 mx-auto my-12">
            <Outlet />
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
