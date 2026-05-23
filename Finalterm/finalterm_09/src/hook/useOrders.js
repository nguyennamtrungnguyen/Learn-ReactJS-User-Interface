import { useSelector } from "react-redux";

export const useOrders = (status) => {
  const { orders, loading, error } = useSelector((state) => state.order);

  const safeOrders = Array.isArray(orders) ? orders : [];

  const filteredOrders =
    status === "All"
      ? safeOrders
      : safeOrders.filter((order) => order.status === status);

  return {
    orders: filteredOrders,
    loading,
    error,
  };
};
