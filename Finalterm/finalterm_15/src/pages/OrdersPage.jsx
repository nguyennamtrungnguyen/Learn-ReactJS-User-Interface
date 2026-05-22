import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeliveryOrders } from "../features/deliveryOrderSlice";
import ProductCard from "../components/ProductCard";

const OrdersPage = () => {
  const { orders, loading } = useSelector((state) => state.deliveryOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDeliveryOrders());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="px-4 my-12">
      <h2 className="text-green-500 text-xl my-4">Danh sách đơn hàng</h2>

      <div className="space-y-12">
        {!loading &&
          orders &&
          orders.map((x) => (
            <div className="py-4 px-2 w-2/3 mx-auto border-2 border-lime-300">
              <p>Khách hàng: {x.customerName}</p>
              <p>Địa chỉ: {x.address}</p>
              <p>Tổng giá tiền: {x.total}</p>
              <div className="grid grids-cols-1 lg:grid-cols-3 gap-4 mt-4">
                {x.items.map((x) => (
                  <div className="border-2 border-lime-500 rounded-lg px-2 py-4">
                    <h3 className="text-center font-semibold text-green-500 text-lg">
                      {x.name}
                    </h3>
                    <p>Số lượng: {x.quantity} VND</p>
                    <p>Giá tiền: {x.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OrdersPage;
