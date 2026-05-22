import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWarehouse, removeWarehouse } from "../features/warehouseSlice";

const useWarehouse = () => {
  const { list, loading, error } = useSelector((state) => state.warehouse);
  const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(fetchWarehouses());
  //   }, [dispatch]);

  const createWarehouse = useCallback(
    (newWarehouse) => {
      dispatch(addWarehouse(newWarehouse));
    },
    [dispatch]
  );

  const deleteWarehouse = useCallback(
    (id) => {
      dispatch(removeWarehouse(id));
    },
    [dispatch]
  );

  return { list, loading, error, createWarehouse, deleteWarehouse };
};

export default useWarehouse;
