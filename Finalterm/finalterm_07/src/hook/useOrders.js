import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useOrders = (statusFilter) => {
  const { orders, isLoading, error } = useSelector((state) => state.order);

  const filteredOrders = useMemo(() => {
    if (statusFilter === "All") {
      return orders;
    }

    return orders.filter((order) => order.status === statusFilter);
  }, [orders, statusFilter]);

  return {
    orders,
    filteredOrders,
    isLoading,
    error,
  };
};
