import { useSelector } from "react-redux";

export const useOrders = (status) => {
  const { orders, loading, error } = useSelector((state) => state.order);

  const filteredStatusOrders =
    status === "All"
      ? orders
      : orders.filter((order) => order.status == status);

  return {
    orders: filteredStatusOrders,
    loading,
    error,
  };
};
